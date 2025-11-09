// src/components/Home.js
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">PASIYA-MD ai schools</h1>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/al">A/L</a>
          <a href="/ol">O/L</a>
          <button className="login-btn">Log In / Register</button>
        </nav>
      </header>

      <section className="hero">
        <h2>ඔබේ අධ්‍යාපනය ව්‍යාප්ත කරමු 🚀</h2>
        <p>
          O/L සහ A/L පාඩම්, past papers, සහ AI ගුරුවරයා සමඟ ඉගෙන ගන්න — එකම තැනකින්!
        </p>
        <button className="explore-btn">විෂයයන් ගවේෂණය කරන්න</button>
      </section>

      <footer className="footer">
        <p>Powered by PASIYA-MD TEAM © 2025</p>
      </footer>
    </div>
  );
}

export default Home;
