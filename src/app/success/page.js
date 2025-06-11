  export default function SuccessPage() {
  return (
    <div style={styles.fullPage}>
      <div style={styles.card}>
        <h1 style={styles.heading}>✅ User Saved Successfully!</h1>
        <p style={styles.paragraph}>
          Your information has been recorded successfully.
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
