import React from 'react';
import { apiFetch } from "../utils/api.js";

export default function Register() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleRegister = async () => {
    try {
      await apiFetch("/api/register", "POST", { username, email, password });
      setSuccess("Account created! Redirecting...");
      setTimeout(() => (window.location.href = "/login"), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister} >Register</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
}
