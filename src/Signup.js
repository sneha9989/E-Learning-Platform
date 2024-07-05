import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Signup = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [registered, setRegistered] = useState(false); // State to track registration status
  const { login } = useAuth();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    login({ email: form.email });
    setRegistered(true); // Set registration status to true
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Sign Up</h1>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required />
        <button type="submit" className="button">Sign Up</button>
      </form>
      {registered && (
        <div className="popup">
          <p>Registered successfully!</p>
          <button onClick={() => setRegistered(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Signup;
