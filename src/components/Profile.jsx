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
    <div>
      <h2>Profile</h2>
      <p>Username: {username}</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleUpdate}>Update Profile</button>
      {message && <p>{message}</p>}
    </div>
  );
}
