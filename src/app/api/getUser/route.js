// src/app/api/getUser/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";       // Use relative path if you don't have jsconfig.json
import User from "@/models/User";              // Adjust path if needed

// POST /api/getUser
export async function POST(req) {
  try {
    const { vehicleNumber } = await req.json();

    if (!vehicleNumber) {
      return NextResponse.json(
        { message: "Vehicle number is required!" },
        { status: 400 }
      );
    }

    await dbConnect();

    const user = await User.findOne({ vehicleNumber });

    if (!user) {
      return NextResponse.json(
        { message: "User not found!" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        name: user.name,
        email1: user.email1,
        email2: user.email2,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Optional: for quick testing in browser
export async function GET() {
  return NextResponse.json({ message: "GET route works!" });
}
