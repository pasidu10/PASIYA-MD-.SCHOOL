// src/components/Registration.js
import React, { useState } from "react";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    grade: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted: " + JSON.stringify(formData));
  };

  return (
    <div className="reg-container">
      <h2>Register with PASIYA-MD ai schools</h2>

      <button className="google-btn">Google සමඟින් ලොග් වන්න</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select name="grade" value={formData.grade} onChange={handleChange} required>
          <option value="">Grade Select</option>
          <option value="O/L">O/L</option>
          <option value="A/L">A/L</option>
        </select>

        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
}

export default Registration;
