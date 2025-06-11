
"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Page1() {
  const [vehicleNumber, setVehicleNumber] = useState(Array(10).fill(""));  // Default empty vehicle number
  const [formData, setFormData] = useState({ name: "", email1: "", email2: "" });
  const [errors, setErrors] = useState({ vehicleNumber: "", email1: "", email2: "" });
  const router = useRouter();

  // Handle vehicle number input (Only allow alphanumeric characters)
  const handleVehicleChange = (e, index) => {
    let value = e.target.value.toUpperCase();  // Ensure uppercase for consistency
    if (/^[A-Z0-9]?$/.test(value)) {  // Allow only alphanumeric characters
      let newVehicleNumber = [...vehicleNumber];
      newVehicleNumber[index] = value;
      setVehicleNumber(newVehicleNumber);
    }
  };

  // Handle form data input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate inputs before form submission
  const validateInput = () => {
    let valid = true;
    let newErrors = { vehicleNumber: "", email1: "", email2: "" };

    // Validate vehicle number (should be exactly 10 characters long)
    const vehicleStr = vehicleNumber.join("");
    if (vehicleStr.length !== 10) {
      newErrors.vehicleNumber = "Vehicle number must be exactly 10 characters!";
      valid = false;
    }

    // Validate email addresses (simple email regex validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email1)) {
      newErrors.email1 = "Please enter a valid email for Email-1!";
      valid = false;
    }
    if (!emailRegex.test(formData.email2)) {
      newErrors.email2 = "Please enter a valid email for Email-2!";
      valid = false;
    }

    setErrors(newErrors);  // Update the error state
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;  // If validation fails, do not submit

    const requestData = {
      vehicleNumber: vehicleNumber.join(""),  // Combine vehicle number array into string
      name: formData.name,
      email1: formData.email1,
      email2: formData.email2,
    };

    console.log("Sending Data:", requestData);  // Debugging log

    try {
      const response = await fetch("/api/saveUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("Response Data:", data);  // Debugging log

      if (response.ok) {
        router.push("/success");  // Redirect to success page after submission
      } else {
        alert(data.message);  // Show error message from the backend
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className={styles.homeBody}>
    <div className={styles.div1}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vehicle Number:</label>
          <div style={{ display: "flex", gap: "5px" }}>
            {vehicleNumber.map((char, index) => (
              <input
                className={styles.inputHover}
                key={index}
                type="text"
                maxLength="1"
                value={char}
                onChange={(e) => handleVehicleChange(e, index)}
                required
              />
            ))}
          </div>
          {errors.vehicleNumber && <p style={{ color: "red" }}>{errors.vehicleNumber}</p>}
        </div>

        <input
          className={styles.inputHover}
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          className={styles.inputHover}
          type="email"
          name="email1"
          placeholder="Email-1"
          onChange={handleChange}
          required
        />
        {errors.email1 && <p style={{ color: "red" }}>{errors.email1}</p>}
        <input
          className={styles.inputHover}
          type="email"
          name="email2"
          placeholder="Email-2"
          onChange={handleChange}
          required
        />
        {errors.email2 && <p style={{ color: "red" }}>{errors.email2}</p>}

        <br />
        <button type="submit" className={styles.sb}>Submit</button>
      </form>
    </div>
 </div>
  );
}
