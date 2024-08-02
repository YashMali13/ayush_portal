// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import StartupsPage from "./components/Startups";
import MentorsPage from "./components/Mentors";
import InvestorsPage from "./components/Investors";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/startups" element={<StartupsPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
