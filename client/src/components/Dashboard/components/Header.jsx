// src/components/Header.js
import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Ayush Portal</div>
        <ul className="nav-links">
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
