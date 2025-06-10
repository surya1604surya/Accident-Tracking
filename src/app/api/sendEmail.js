// // pages/api/sendEmail.js
// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { name, email, email2, locationDetails, vehicleNumber } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_FROM,
//       pass: process.env.PASS,
//     },
//   });

//   const mailOptions = {
//     from: `ScanA Team <${process.env.EMAIL_FROM}>`,
//     to: [email, email2],
//     subject: "🚨 Accident Alert - Immediate Attention Needed",
//     html: `
//       <h2>Accident Report</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Vehicle Number:</strong> ${vehicleNumber}</p>
//       <p><strong>Location & Details:</strong></p>
//       <pre style="white-space:pre-line;">${locationDetails}</pre>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ error: error.message });
//   }
// }

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, email2, locationDetails, vehicleNumber } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false, // 👈 fixes the self-signed certificate issue
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

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: error.message });
  }
}
