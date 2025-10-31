import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await axios.post(`${apiBase}/api/auth/login`, { email, password });
      // Save token (example)
      localStorage.setItem("token", res.data.token);
      // Redirect to home
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 420 }}>
      <h3 className="mb-4">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" required />
        </div>
        {error && <div className="text-danger mb-2">{error}</div>}
        <button className="btn btn-primary w-100" type="submit">Login</button>
      </form>

      <p className="mt-3 text-center">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
