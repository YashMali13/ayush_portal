import React from "react";
import "../../styles/Dashboard.css";

import "../../App.css";

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Contact from "./components/Contact";

function Dashboard() {
  return (
    <div className="home">
      <h1>Welcome to the Startup Platform </h1>
      <p>Select a section from the navigation bar to get started.</p>
      <div className="App">
        <Header />
        <Introduction />
        <Features />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
