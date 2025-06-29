import React from 'react';
import { apiFetch } from "../utils/api.js";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // ⛔️ Prevent page reload
    try {
      const res = await apiFetch("/api/login", "POST", { username, password });
      localStorage.setItem("token", res.access_token);
      window.location.href = "/dashboard"; // ✅ Redirect
    } catch (err) {
      setError(err.message);
      console.error("Login error:", err);
    }
  };

  return (
    <div className='Login'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
