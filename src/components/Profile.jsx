import React from 'react';
import { apiFetch } from "../utils/api.js";

export default function Profile() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    apiFetch("/api/profile").then(data => {
      setUsername(data.username);
      setEmail(data.email);
    });
  }, []);

  const handleUpdate = async () => {
    try {
      await apiFetch("/api/profile", "PUT", { email });
      setMessage("Profile updated!");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <p className="mb-2">Username: {username}</p>
      <input className="border px-3 py-2 mb-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleUpdate}>Update Profile</button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
