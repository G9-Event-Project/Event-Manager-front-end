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
      setTimeout(() => (window.location.href = "/"), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input className="border px-4 py-2 mb-2 w-64" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" className="border px-4 py-2 mb-2 w-64" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="border px-4 py-2 mb-2 w-64" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister} className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-600 mt-2">{success}</p>}
    </div>
  );
}
