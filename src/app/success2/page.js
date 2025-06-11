export default function SuccessPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>✅ Thank You So Much!</h1>
        <h2 style={styles.subheading}>
          Your message has been delivered successfully 🎉
        </h2>
        <p style={styles.paragraph}>
          We truly appreciate your effort in providing the information. Your
          response has been received, and the necessary actions have been taken.
          Thank you for making a difference — it means a lot!
        </p>
        <a href="/" style={styles.link}>Go back to Home</a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #FFFDE7, #E1F5FE)", // soft yellow to blue
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    boxSizing: "border-box",
  },
  card: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
  },
  heading: {
    fontSize: "2rem",
    color: "#2E7D32", // green success
    marginBottom: "1rem",
  },
  subheading: {
    fontSize: "1.3rem",
    color: "#333",
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "1.5rem",
  },
  link: {
    color: "#1565C0",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

