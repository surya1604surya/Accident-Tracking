// import styles from "./Header.module.css";

// export default function Header() {
//     return (
//       <header className={styles.header}>
//         <h1 className={styles.title}>ACCIDENT TRACKING</h1>
//         <nav className={styles.nav}>
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//         </nav>
//       </header>
//     );
// }

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ACCIDENT TRACKING</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
