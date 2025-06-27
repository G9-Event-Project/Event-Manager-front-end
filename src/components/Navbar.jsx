import React from 'react';
export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div>
        <a href="/dashboard" className="mr-4">Dashboard</a>
        <a href="/profile" className="mr-4">Profile</a>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
