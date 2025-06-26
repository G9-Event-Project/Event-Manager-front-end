import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Profile from "./components/Profile.js";
import Dashboard from "./components/Dashboard.js"; // Person B
import EventDetail from "./components/EventDetail.js"; // Person B
import Navbar from "./components/Navbar.js";

const { BrowserRouter, Routes, Route } = ReactRouterDOM;

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
