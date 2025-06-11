import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(req) {
  try {
    const body = await req.json();
    const { vehicleNumber, name, email1, email2 } = body;

    if (!vehicleNumber || !name || !email1 || !email2) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    await dbConnect();

    const newUser = new User({ vehicleNumber, name, email1, email2 });
    await newUser.save();

    return NextResponse.json({ message: "User saved successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error saving user:", error);
    if (error.code === 11000) {
      return NextResponse.json({ message: "Vehicle number already exists" }, { status: 400 });
    }
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
