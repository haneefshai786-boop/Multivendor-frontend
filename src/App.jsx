import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const testBackend = async () => {
    try {
      const res = await axios.get("https://multivendor-backend-6ozb.onrender.com");
      setMessage("✅ Connected to backend successfully!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Cannot reach backend");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Frontend-Backend Connection Test</h1>
      <button onClick={testBackend} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Test Connection
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
}

export default App;
