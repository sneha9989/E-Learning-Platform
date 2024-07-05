import React from 'react';
import { useAuth } from './AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) return <div>Please log in</div>;

  return (
    <div className="container">
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <button onClick={logout} className="button">Logout</button>
    </div>
  );
};

export default Profile;
