"use client";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Page1() {
  useEffect(() => {
    if (!localStorage.getItem("reloaded")) {
      localStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      localStorage.removeItem("reloaded");
    }
  }, []);

  return (
    <div className={styles.div1}>
      <h2>🚨 Road Accident Emergency Numbers in India 🚨</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Service</th>
              <th className={styles.th}>Emergency Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className={`${styles.evenRow} ${styles.hoverRow}`}>
              <td className={styles.td}>National Emergency Number</td>
              <td className={styles.td}>112</td>
            </tr>
            <tr className={styles.hoverRow}>
              <td className={styles.td}>Ambulance</td>
              <td className={styles.td}>102 / 108</td>
            </tr>
            <tr className={`${styles.evenRow} ${styles.hoverRow}`}>
              <td className={styles.td}>Traffic Police Helpline</td>
              <td className={styles.td}>103</td>
            </tr>
            <tr className={styles.hoverRow}>
              <td className={styles.td}>National Highway Helpline</td>
              <td className={styles.td}>1033</td>
            </tr>
            <tr className={`${styles.evenRow} ${styles.hoverRow}`}>
              <td className={styles.td}>Police</td>
              <td className={styles.td}>100</td>
            </tr>
            <tr className={styles.hoverRow}>
              <td className={styles.td}>Fire Brigade</td>
              <td className={styles.td}>101</td>
            </tr>
            <tr className={`${styles.evenRow} ${styles.hoverRow}`}>
              <td className={styles.td}>Railway Helpline</td>
              <td className={styles.td}>139</td>
            </tr>
            <tr className={styles.hoverRow}>
              <td className={styles.td}>Women’s Helpline</td>
              <td className={styles.td}>1091</td>
            </tr>
            <tr className={`${styles.evenRow} ${styles.hoverRow}`}>
              <td className={styles.td}>Child Helpline</td>
              <td className={styles.td}>1098</td>
            </tr>
            <tr className={styles.hoverRow}>
              <td className={styles.td}>Disaster Management Helpline</td>
              <td className={styles.td}>1078</td>
            </tr>
            <tr className={`${styles.evenRow} ${styles.hoverRow}`}>
              <td className={styles.td}>Road Accident Emergency (NHAI)</td>
              <td className={styles.td}>1033</td>
            </tr>
            <tr className={styles.hoverRow}>
              <td className={styles.td}>Air Ambulance</td>
              <td className={styles.td}>9540161344</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
