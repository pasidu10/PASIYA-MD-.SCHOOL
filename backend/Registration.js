// src/components/Registration.js
import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [grade, setGrade] = useState('O/L');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered as ${grade} student!`);
  };

  return (
    <div className="registration-container">
      <h2>Join Passify</h2>
      <button className="google-btn">Sign in with Google</button>
      <form onSubmit={handleSubmit}>
        <label>Select Your Grade:</label>
        <select value={grade} onChange={(e) => setGrade(e.target.value)}>
          <option value="O/L">O/L</option>
          <option value="A/L">A/L</option>
        </select>
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default Registration;
