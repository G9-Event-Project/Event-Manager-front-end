import React from 'react';
export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
