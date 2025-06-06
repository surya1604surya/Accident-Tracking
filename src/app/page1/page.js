// // "use client";
// // import { useState } from "react";
// // import styles from "./page.module.css";
// // import { useRouter } from "next/navigation";

// // export default function Page2() {
// //   const [vehicleNumber, setVehicleNumber] = useState("");
// //   const [user, setUser] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [sodhi,setsodhi]=useState("");
  
// //   const handlesetsodhi = (e) => {
// //     setsodhi(e.target.value);
// //   };

// //   const handleVehicleChange = (e) => {
// //     setVehicleNumber(e.target.value);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!vehicleNumber.trim()) {
// //       alert("Please enter a vehicle number.");
// //       return;
// //     }

// //     try {
// //       const response = await fetch("/api/getUser", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ vehicleNumber }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setUser(data);  // If user found, set the user data
// //         setError(null);  // Clear any previous error
// //       } else {
// //         setUser(null);  // Clear previous user data
// //         setError(data.message);  // Set error message
// //       }

// //     } catch (error) {
// //       console.error("Error fetching user:", error);
// //       setError("There was an error retrieving the user. Please try again later.");
// //     }
// //   };

// //   return (
// //     <div className={styles.div1}>
// //       <h1>Retrieve User by Vehicle Number</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           className={styles.inputHover}
// //           type="text"
// //           value={vehicleNumber}
// //           onChange={handleVehicleChange}
// //           placeholder="Enter Vehicle Number"
// //           required
// //         />
// //         <textarea
// //           className={styles.in}
// //           type="text"
// //           value={sodhi}
// //           onChange={handlesetsodhi}
// //           placeholder="Enter location and other details"
// //           required
// //         />
// //         <button type="submit" className={styles.btn}>Search</button>
// //       </form>

// //       {error && <p style={{ color: "red" }}>{error}</p>}

// //       {user && (
// //         <div>
// //           <h2>User Details:</h2>
// //           <p>Name: {user.name}</p>
// //           <p>Email 1: {user.email1}</p>
// //           <p>Email 2: {user.email2}</p>
// //           <p>{sodhi}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// "use client";
// import { useState } from "react";
// import styles from "./page.module.css";

// export default function Page2() {
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [sodhi, setsodhi] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!vehicleNumber.trim()) {
//       alert("Please enter a vehicle number.");
//       return;
//     }

//     try {
//       const response = await fetch("/api/getUser", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ vehicleNumber }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data);
//         setError(null);

//         // ✅ Send email after user found
//         const emailRes = await fetch("/api/sendEmail", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: data.name,
//             email: data.email1,
//             email2: data.email2,
//             locationDetails: sodhi,
//             vehicleNumber: vehicleNumber,
//           }),
//         });

//         const emailData = await emailRes.json();
//         if (emailRes.ok) {
//           alert("📧 Email sent successfully!");
//         } else {
//           console.error(emailData.error);
//           alert("❌ Failed to send email.");
//         }
//       } else {
//         setUser(null);
//         setError(data.message);
//       }

//     } catch (error) {
//       console.error("Error:", error);
//       setError("There was an error. Please try again later.");
//     }
//   };

//   return (
//     <div className={styles.div1}>
//       <h1>Retrieve User by Vehicle Number</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           className={styles.inputHover}
//           type="text"
//           value={vehicleNumber}
//           onChange={(e) => setVehicleNumber(e.target.value)}
//           placeholder="Enter Vehicle Number"
//           required
//         />
//         <textarea
//           className={styles.in}
//           value={sodhi}
//           onChange={(e) => setsodhi(e.target.value)}
//           placeholder="Enter location and other details"
//           required
//         />
//         <button type="submit" className={styles.btn}>Search</button>
//       </form>

//       {/* {error && <p style={{ color: "red" }}>{error}</p>}

//       {user && (
//         <div>
//           <h2>User Details:</h2>
//           <p>Name: {user.name}</p>
//           <p>Email 1: {user.email1}</p>
//           <p>Email 2: {user.email2}</p>
//           <p>Location Info: {sodhi}</p>
//         </div>
//       )} */}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page1() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [sodhi, setsodhi] = useState("");
  const router = useRouter(); // Initialize useRouter

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

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        setError(null);

        // Send email after user found
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

        const emailData = await emailRes.json();
        if (emailRes.ok) {
          alert("📧 Email sent successfully!");
          router.push("/success2"); // Redirect to the success page after email is sent
        } else {
          console.error(emailData.error);
          alert("❌ Failed to send email.");
        }
      } else {
        setUser(null);
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("There was an error. Please try again later.");
    }
  };

  return (
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

      {/* {user && (
        <div>
          <h2>User Details:</h2>
          <p>Name: {user.name}</p>
          <p>Email 1: {user.email1}</p>
          <p>Email 2: {user.email2}</p>
          <p>Location Info: {sodhi}</p>
        </div>
      )} */}
    </div>
  );
}
