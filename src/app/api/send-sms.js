import { MongoClient } from "mongodb";
import https from "https";

const uri = process.env.MONGO_URI;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    // ✅ Parse vehicle number from request
    const { vehicleNumber } = req.body;
    if (!vehicleNumber) {
      return res.status(400).json({ success: false, message: "Vehicle number is required" });
    }

    // ✅ Connect to MongoDB
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("Accident_Tracking");  // 🚨 No spaces in DB name
    const collection = db.collection("users");

    // ✅ Find user by vehicle number
    const user = await collection.findOne({ vehicleNumber });

    if (!user) {
      await client.close();
      return res.status(404).json({ success: false, message: "Vehicle not found" });
    }

    const phone1 = user.phone1;
    const phone2 = user.phone2;

    // ✅ Validate Infobip API Key
    const INFOBIP_API_KEY = process.env.INFOBIP_API_KEY;
    const INFOBIP_API_URL = process.env.INFOBIP_API_URL;
    const INFOBIP_SENDER = process.env.INFOBIP_SENDER;

    if (!INFOBIP_API_KEY || !INFOBIP_API_URL || !INFOBIP_SENDER) {
      return res.status(500).json({ success: false, message: "Infobip API credentials missing" });
    }

    // ✅ Prepare SMS Request
    const postData = JSON.stringify({
      messages: [
        {
          destinations: [{ to: phone1 }, { to: phone2 }],
          from: INFOBIP_SENDER,
          text: `Alert! Your vehicle (${vehicleNumber}) has been registered successfully.`,
        },
      ],
    });

    const options = {
      method: "POST",
      hostname: INFOBIP_API_URL.replace("https://", "").split("/")[0],
      path: "/sms/2/text/advanced",
      headers: {
        Authorization: `App ${INFOBIP_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    // ✅ Send SMS Request
    const smsRequest = https.request(options, (smsRes) => {
      let chunks = [];

      smsRes.on("data", (chunk) => {
        chunks.push(chunk);
      });

      smsRes.on("end", () => {
        const responseBody = Buffer.concat(chunks).toString();
        res.status(200).json({ success: true, message: "SMS sent successfully", data: JSON.parse(responseBody) });
      });
    });

    smsRequest.on("error", (error) => {
      console.error("Error sending SMS:", error);
      res.status(500).json({ success: false, message: "Error sending SMS", error: error.message });
    });

    smsRequest.write(postData);
    smsRequest.end();

    // ✅ Close DB Connection
    await client.close();
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
}
