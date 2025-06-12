

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
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ACCIDENT TRACKING</h1>

      <div className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Image
          src={isMenuOpen ? "/arrows (2).png" : "/arrows (1).png"}
          alt="Toggle Menu"
          width={24}
          height={24}
        />
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.show : styles.hide}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
