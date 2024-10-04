// import React from "react";
// import "../../styles/Startups.css";

// function Startups() {
//   return (
//     <div className="startups">
//       <h1>Startups</h1>
//       <div className="startup-list">
//         {/* List of startups will be displayed here */}
//       </div>
//     </div>
//   );
// }

// export default Startups;

import React from 'react';
import './Startups.css';

const Startups = () => {
  const handleRedirect = () => {
    window.location.href = 'https://www.startupindia.gov.in/content/sih/en/search.html?roles=Startup&page=0';
  };

  return (
    <div className="startups-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Ayush Startup Challenge</h1>
          <p>Empowering startups in the Ayush sectors through innovation and technology</p>
          <button onClick={handleRedirect} className="cta-button">
            Explore Ayush Startups
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About the Challenge</h2>
        <p>
          The All India Institute of Ayurveda (AIIA) is a prestigious institute under the Ministry of Ayush, committed to
          integrating traditional Ayurvedic knowledge with modern technologies. With 25 specialty departments, 12 clinics, 
          and 8 research labs, AIIA provides a platform for global collaboration and advanced research.
        </p>
        <p>
          Through its partnership with Startup India, AIIA seeks to identify and support innovative startups in the Ayush 
          sectors (Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy) that are leveraging the power of new technologies.
        </p>
      </section>

      {/* Offerings Section */}
      <section className="offerings-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Access to 25 specialty departments and 12 clinics.</li>
          <li>Global collaborative research opportunities.</li>
          <li>State-of-the-art interdisciplinary research laboratories.</li>
          <li>Support for postgraduate and Ph.D. programs in Ayurveda and allied fields.</li>
        </ul>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Participate?</h2>
        <div className="features">
          <div className="feature-item">
            <h3>Innovative Solutions</h3>
            <p>
              This challenge offers startups the chance to bring innovative solutions to the Ayush sectors by utilizing 
              cutting-edge technologies.
            </p>
          </div>
          <div className="feature-item">
            <h3>Government Support</h3>
            <p>
              With the backing of the Ministry of Ayush, participants receive comprehensive support and resources to grow 
              their innovations.
            </p>
          </div>
          <div className="feature-item">
            <h3>Global Reach</h3>
            <p>
              Collaborate with international experts and institutions to promote Ayurvedic research and practice globally.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Innovate?</h2>
        <p>Join the Ayush Startup Challenge and be part of the revolution in health and wellness.</p>
        <button onClick={handleRedirect} className="cta-button">
          Explore Startups Now
        </button>
      </section>
    </div>
  );
};

export default Startups;
