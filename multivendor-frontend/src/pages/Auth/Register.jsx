import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";
      await axios.post(`${apiBase}/api/auth/register`, form);
      setSuccess("Registration successful — you can now log in.");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 420 }}>
      <h3 className="mb-4">Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input name="email" value={form.email} onChange={handleChange} type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input name="password" value={form.password} onChange={handleChange} type="password" className="form-control" required />
        </div>

        {error && <div className="text-danger mb-2">{error}</div>}
        {success && <div className="text-success mb-2">{success}</div>}

        <button className="btn btn-success w-100" type="submit">Register</button>
      </form>

      <p className="mt-3 text-center">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}
