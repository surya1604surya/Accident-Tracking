"use client";

import styles from "./Home.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const router = useRouter();  // ✅ Initialize Router

  const handleNavigation = (page) => {
    router.push(`/page${page}`); // Navigate to the new page
    // Small delay ensures smooth navigation
  };
  useEffect(() => {
      if (!localStorage.getItem("reloaded")) {
        localStorage.setItem("reloaded", "true");
        window.location.reload();
      } else {
        localStorage.removeItem("reloaded"); // Reset for the next visit
      }
    }, []);
  return (
    <div className="flex flex-col min-h-screen max-h-screen min-w-screen max-w-screen">
      {/* <video src='h1.mp4' /> */}
    <video 
  src="/bghy.mp4" 
  autoPlay 
  muted 
  loop 
  preload="metadata" 
  className={styles.backgroundVideo} 
/>

      <Header className={styles.title} />
      <main className={styles.maintag}>
        <div className={styles.firstRow}>
          <button className={styles.b0} onClick={() => handleNavigation(1)} >
            <div>Register Accident</div>
          </button>
          <button className={styles.b1} onClick={() => handleNavigation(2)} >
            <div>SIGNUP</div>
          </button>

          <button className={styles.b2} onClick={() => handleNavigation(3)} >
            <div>Emergency Numbers</div>
          </button>
        </div>

        <div className={styles.secondRow}>
          <button className={styles.b3} onClick={() => handleNavigation(4)} >
            <div>Safety Rules</div>
          </button>

          <button className={styles.b4} onClick={() => handleNavigation(5)} >
            <div>Help</div>
          </button>
        </div>
      </main>
    </div>
  );
}


