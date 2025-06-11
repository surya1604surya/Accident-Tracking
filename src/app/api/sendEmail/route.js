import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, email2, locationDetails, vehicleNumber } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false, // Optional, can help in some hosting environments
      },
    });

    const mailOptions = {
      from: `ScanA Team <${process.env.EMAIL_FROM}>`,
      to: [email, email2],
      subject: "🚨 Accident Alert - Immediate Attention Needed",
      html: `
        <h2>Accident Report</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Vehicle Number:</strong> ${vehicleNumber}</p>
        <p><strong>Location & Details:</strong></p>
        <pre style="white-space:pre-line;">${locationDetails}</pre>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
