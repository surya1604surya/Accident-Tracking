"use client";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Page4() {
  useEffect(() => {
    if (!localStorage.getItem("reloaded")) {
      localStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      localStorage.removeItem("reloaded");
    }
  }, []);

  return (
    <div className={styles.homeBody}>
    <div className={styles.div1}>
      <h2 className={styles.h2}>🛑 Important Safety Measures While Traveling 🛑</h2>

      <div className={styles.safetyContainer}>
        {/* 1. Always Wear a Helmet */}
        <div className={styles.safetyRule}>
          <img src="/helmet.jpeg" alt="Wear a Helmet" className={styles.safetyImage} />
          <p className={styles.p}><b>Wear a Helmet:</b> Always wear a certified helmet while riding a two-wheeler to protect yourself from head injuries.</p>
        </div>

        {/* 2. Fasten Your Seatbelt */}
        <div className={styles.safetyRule}>
          <img src="/seatbelt.png" alt="Fasten Seatbelt" className={styles.safetyImage} />
          <p className={styles.p}><b>Buckle Up:</b> Always wear a seatbelt while driving or sitting in a car. It can save lives during an accident.</p>
        </div>

        {/* 3. Follow Traffic Rules */}
        <div className={styles.safetyRule}>
          <img src="/trafficsignal.png" alt="Follow Traffic Signals" className={styles.safetyImage} />
          <p className={styles.p}><b>Obey Traffic Signals:</b> Stop at red lights, follow speed limits, and respect pedestrian crossings.</p>
        </div>

        {/* 4. Avoid Using Mobile Phones */}
        <div className={styles.safetyRule}>
          <img src="/nophone.png" alt="No Mobile While Driving" className={styles.safetyImage} />
          <p className={styles.p}><b>Stay Focused:</b> Avoid using mobile phones while driving or crossing roads. Distractions cause accidents.</p>
        </div>

        {/* 5. Do Not Overload Vehicles */}
        <div className={styles.safetyRule}>
          <img src="/tripledriving.jpeg" alt="No Overloading" className={styles.safetyImage} />
          <p className={styles.p}><b>Avoid Overloading:</b> Do not overcrowd vehicles or carry excessive luggage, as it affects balance and control.</p>
        </div>

        {/* 6. Stay Alert in Public Transport */}
        <div className={styles.safetyRule}>
          <img src="/publictransport.jpeg" alt="Public Transport Safety" className={styles.safetyImage} />
          <p className={styles.p}><b>Be Aware:</b> When using public transport, keep your belongings safe and avoid talking to strangers unnecessarily.</p>
        </div>

        {/* 7. Use Pedestrian Crossings */}
        <div className={styles.safetyRule}>
          <img src="/zebra-crossing.png" alt="Use Pedestrian Crossings" className={styles.safetyImage} />
          <p className={styles.p}><b>Use Zebra Crossings:</b> Always cross roads at designated pedestrian crossings and look both ways before stepping onto the road.</p>
        </div>

        {/* 8. Avoid Drunk Driving */}
        <div className={styles.safetyRule}>
          <img src="/no-drunk-driving.jpeg" alt="No Drunk Driving" className={styles.safetyImage} />
          <p className={styles.p}><b>Never Drink and Drive:</b> Alcohol reduces reaction time and increases accident risks. Take a cab or ask a sober friend to drive.</p>
        </div>

        {/* 9. Check Vehicle Condition */}
        <div className={styles.safetyRule}>
          <img src="/vehicle-check.jpeg" alt="Check Vehicle Condition" className={styles.safetyImage} />
          <p className={styles.p}><b>Inspect Your Vehicle:</b> Before traveling, check brakes, tire pressure, fuel, and lights to avoid breakdowns.</p>
        </div>

        {/* 10. Keep Emergency Contacts Handy */}
        <div className={styles.safetyRule}>
          <img src="/emergency-contact.png" alt="Emergency Contact" className={styles.safetyImage} />
          <p className={styles.p}><b>Emergency Preparedness:</b> Save important helpline numbers and inform family about your travel route.</p>
        </div>
      </div>
    </div> </div>
  );
}
