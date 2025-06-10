import twilio from "twilio";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

    const { phoneNumber, otp } = req.body;
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    try {
        const verificationCheck = await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID).verificationChecks.create({ to: phoneNumber, code: otp });
        return res.status(200).json({ success: verificationCheck.status === "approved" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
