import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Starter Template</h1>

      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#fafafa",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.75rem 1.25rem",
    fontSize: "1.1rem",
    cursor: "pointer",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
};
