import React from 'react';
import { apiFetch } from "../utils/api.js";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = async () => {
    try {
      const res = await apiFetch("/api/login", "POST", { username, password });
      localStorage.setItem("token", res.access_token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input className="border px-4 py-2 mb-2 w-64" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className="border px-4 py-2 mb-2 w-64" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
