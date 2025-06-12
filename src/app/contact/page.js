import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.homeBody}>
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <h2 className={styles.subtitle}>Web Site: Accident Tracking</h2>
      <p className={styles.description}>
        If you have any questions or need assistance, feel free to reach out to us:
      </p>
      <div className={styles.contactInfo}>
        <h3 className={styles.contactInfoTitle}>Email: *******@gmail.com</h3>
        <h3 className={styles.contactInfoTitle}>Phone: **********</h3>
        <p className={styles.contactInfoDescription}>Save Life</p>
      </div>
    </div>
  </div>
  );
}
