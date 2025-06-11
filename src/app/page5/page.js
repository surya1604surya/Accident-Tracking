"use client";
import styles from "./page.module.css";

export default function Page4() {
  return (
    <div className={styles.homeBody}>
    <div className={styles.container}>
      <h2 className={styles.title}>🚗 Steps to Register in Our Website 🚗</h2>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>1️⃣ Register an Accident (For Reporting an Incident)</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Go to the homepage and click on <b>"Register Accident."</b></li>
          <li className={styles.listItem}>Enter the <b>Vehicle Number</b> in the provided input field.</li>
          <li className={styles.listItem}>Submit the form to report the accident.</li>
          <li className={styles.listItem}>The system will process the details and store the information.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>2️⃣ Signup (For User Registration)</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Click on the <b>"SIGNUP"</b> button on the homepage.</li>
          <li className={styles.listItem}>Fill in the required details:</li>
          <ul className={styles.list}>
            <li className={styles.listItem}>✅ Vehicle Number</li>
            <li className={styles.listItem}>✅ Full Name</li>
            <li className={styles.listItem}>✅ Primary Phone Number</li>
            <li className={styles.listItem}>✅ Secondary Phone Number</li>
          </ul>
          <li className={styles.listItem}>Submit the form to complete the registration.</li>
          <li className={styles.listItem}>The data is stored for future use, allowing users to access relevant services.</li>
        </ul>
      </div> </div>
    </div>
  );
}
