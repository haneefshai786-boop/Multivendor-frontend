import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Click the button to test connection");

  // ✅ Your Render backend URL
  const API_BASE_URL = "https://multivendor-backend-6ozb.onrender.com";

  const testConnection = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/test`);
      if (!res.ok) throw new Error("Backend not reachable");
      const data = await res.text(); // or res.json() if backend sends JSON
      setMessage(`✅ Backend Response: ${data}`);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to connect to backend");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "sans-serif" }}>
      <h2>Frontend-Backend Connection Test</h2>
      <button
        onClick={testConnection}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Test Connection
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
}

export default App;
