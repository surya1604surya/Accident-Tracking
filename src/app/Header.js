

// import Link from "next/link";
// import styles from "./Header.module.css";

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <h1 className={styles.title}>ACCIDENT TRACKING</h1>
//       <nav className={styles.nav}>
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/contact">Contact</Link>
//       </nav>
//     </header>
//   );
// }
"use client";

import styles from "./Header.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>SafeDrive</div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
