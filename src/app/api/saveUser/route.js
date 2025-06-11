import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";       // Use relative path if you don't have jsconfig.json
import User from "@/models/User";    


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { vehicleNumber, name, email1, email2 } = req.body;

  if (!vehicleNumber || !name || !email1 || !email2) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await dbConnect();

    const newUser = new User({
      vehicleNumber,
      name,
      email1,
      email2,
    });

    await newUser.save();

    return res.status(201).json({ message: "User saved successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    if (error.code === 11000) {
      return res.status(400).json({ message: "Vehicle number already exists" });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
