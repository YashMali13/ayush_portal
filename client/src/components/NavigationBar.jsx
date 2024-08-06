import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/startups">Startups</Link>
      <Link to="/mentors">Mentors</Link>
      <Link to="/investors">Investors</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default NavigationBar;
