export default function SuccessPage() {
  return (
    <div style={styles.fullPage}>
      <div style={styles.card}>
        <h1 style={styles.heading}>✅ Thank You So Much!</h1>
        <h2 style={styles.subheading}>
          Your message has been delivered successfully 🎉
        </h2>
        <p style={styles.paragraph}>
          We truly appreciate your effort in providing the information. Your response has been received,
          and the necessary actions have been taken. Thank you for making a difference — it means a lot!
        </p>
        <a href="/" style={styles.link}>Go back to Home</a>
      </div>
    </div>
  );
}

const styles = {
  fullPage: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(to right, #FFFDE7, #E1F5FE)", // Light yellow to light blue
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    boxSizing: "border-box",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
  },
  heading: {
    color: "#2E7D32", // Green
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  subheading: {
    color: "#444",
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  paragraph: {
    color: "#555",
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
  },
  link: {
    color: "#1565C0",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};
