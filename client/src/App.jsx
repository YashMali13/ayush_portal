// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard/Home";
import StartupsPage from "./components/Startup/Startups";
import MentorsPage from "./components/Mentors/Mentors";
import InvestorsPage from "./components/Investor/InvestorsList";
import LoginPage from "./components/Login/Login";
import RegisterPage from "./components/Login/Register";
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
