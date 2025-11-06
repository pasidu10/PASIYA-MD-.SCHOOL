// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">Passify</h1>
        <nav>
          <ul>
            <li><a href="#ol">O/L</a></li>
            <li><a href="#al">A/L</a></li>
            <li><button className="login-btn">Log In / Register</button></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Empowering Sri Lankan Students for Excellence!</h2>
        <p>අප සමඟින් ඔබේ අනාගතය සාර්ථක කරගන්න. A/L සහ O/L සදහා විෂයයන් සම්බන්ධ සම්පූර්ණ මගපෙන්වීමක්.</p>
        <button className="explore-btn">විෂයයන් ගවේෂණය කරන්න</button>
      </section>
    </div>
  );
};

export default Home;
