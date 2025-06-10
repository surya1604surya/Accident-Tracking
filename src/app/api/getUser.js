// pages/api/getUser.js
import dbConnect from "../../lib/dbConnect";  // Assuming dbConnect is set up
import User from "../../models/User";  // Your user model

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { vehicleNumber } = req.body;

  if (!vehicleNumber) {
    return res.status(400).json({ message: "Vehicle number is required!" });
  }

  try {
    await dbConnect();

    const user = await User.findOne({ vehicleNumber });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // Send back user data (excluding sensitive info if needed)
    return res.status(200).json({
      name: user.name,
      email1: user.email1,
      email2: user.email2,
    });
  } catch (error) {
    console.error("Error retrieving user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
