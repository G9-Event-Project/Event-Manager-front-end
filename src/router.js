import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Profile from "./components/Profile.jsx";
import Dashboard from "./components/Dashboard.jsx";
import EventDetail from "./components/EventDetail.jsx";
import Navbar from "./components/Navbar.jsx";

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
