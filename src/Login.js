import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const { login } = useAuth();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    login({ email: form.email });
    setLoggedIn(true); // Set login status to true
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Login</h1>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required />
        <button type="submit" className="button">Login</button>
      </form>
      {loggedIn && (
        <div className="popup">
          <p>Login successful!</p>
          <button onClick={() => setLoggedIn(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Login;
