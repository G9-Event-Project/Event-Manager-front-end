import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import EventDetail from './components/EventDetail';
import EventForm from './components/EventForm';

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      {token && <Navbar />}
      <Routes>
        {/* Default route: show login if not authenticated */}
        <Route path="/" element={localStorage.getItem("token") ? <Dashboard /> : <Register />} />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes  */}
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/event/new" element={token ? <EventForm /> : <Navigate to="/login" />} />
        <Route path="/event/:id" element={token ? <EventDetail /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
