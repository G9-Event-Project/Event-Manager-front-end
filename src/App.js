import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import SearchBar from './components/SearchBar';
import EventForm from './components/EventForm';
import EventDetail from './components/EventDetail';
import Dashboard from './components/Dashboard';
import CommentSection from './components/CommentSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <Profile />
      <Register />
      <SearchBar />
      <EventForm />
      <EventDetail />
      <Dashboard />
      <CommentSection />
    </div>
  );
};

export default App;


