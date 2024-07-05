import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/">Courses</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link> | <Link to="/profile">Profile</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
