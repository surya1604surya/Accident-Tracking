"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page1() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [sodhi, setsodhi] = useState("");
  const router = useRouter();

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!vehicleNumber.trim()) {
    alert("Please enter a vehicle number.");
    return;
  }

  try {
    const response = await fetch("/api/getUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vehicleNumber }),
    });

    const text = await response.text(); // ✅ Only read once
    let data;

    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("❌ Failed to parse JSON from /api/getUser:", text);
      setError("Invalid server response from getUser API.");
      return;
    }

    if (response.ok) {
      setUser(data);
      setError(null);

      const emailRes = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email1,
          email2: data.email2,
          locationDetails: sodhi,
          vehicleNumber: vehicleNumber,
        }),
      });

      const emailText = await emailRes.text(); // ✅ Only read once
      let emailData;

      try {
        emailData = JSON.parse(emailText);
      } catch (e) {
        console.error("❌ Failed to parse JSON from /api/sendEmail:", emailText);
        alert("❌ Email API returned invalid response.");
        return;
      }

      if (emailRes.ok) {
        alert("📧 Email sent successfully!");
        router.push("/success2");
      } else {
        console.error("❌ Email send error:", emailData.error);
        alert("❌ Failed to send email.");
      }
    } else {
      setUser(null);
      setError(data.message || "User not found.");
    }

  } catch (error) {
    console.error("Network or unexpected error:", error);
    setError("There was an error. Please try again later.");
  }
};


  // ✅ Add this return block!
  return (
    <div className={styles.homeBody}>
    <div className={styles.div1}>
      <h1>Retrieve User by Vehicle Number</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputHover}
          type="text"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          placeholder="Enter Vehicle Number"
          required
        />
        <textarea
          className={styles.in}
          value={sodhi}
          onChange={(e) => setsodhi(e.target.value)}
          placeholder="Enter location and other details"
          required
        />
        <button type="submit" className={styles.btn}>Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Uncomment for debug view:
      {user && (
        <div>
          <h2>User Details:</h2>
          <p>Name: {user.name}</p>
          <p>Email 1: {user.email1}</p>
          <p>Email 2: {user.email2}</p>
          <p>Location Info: {sodhi}</p>
        </div>
      )}
      */}
    </div>
    </div>
  );
}
