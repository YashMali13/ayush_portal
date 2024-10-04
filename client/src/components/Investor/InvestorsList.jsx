import React from 'react';
import './InvestorsList.css';  // Import the CSS file

// Card component for each investor with a clickable link
const InvestorCard = ({ name, location, description, url }) => {
  return (
    <a
      href={url}  // URL for navigation
      target="_blank"  // Opens the link in a new tab
      rel="noopener noreferrer"  // Security feature for external links
      className="card-link"
    >
      <div className="card">
        <div className="details">
          <h3 className="name">{name}</h3>
          <p className="location">{location}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </a>
  );
};

// Investors list component
const InvestorsList = () => {
  const investors = [
    {
      name: 'Seshadrinathan Krishnan',
      location: 'Ernakulam, Kerala',
      description: 'Animation, Agriculture, Green Technology, Finance Technology, Enterprise Solutions',
      url: 'https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0',
    },
    {
      name: 'GSF India',
      location: 'Bengaluru, Karnataka',
      description: 'AR VR (Augmented + Virtual Reality), Computer Vision, Telecommunications',
      url: 'https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0',
    },
    {
      name: 'Dholakia Ventures',
      location: 'Surat, Gujarat',
      description: 'Architecture Interior Design, AR VR, Automation, Enterprise Solutions',
      url: 'https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0',
    },
    {
      name: 'Amiya Srivastava',
      location: 'Bengaluru, Karnataka',
      description: 'FinTech, Education Technology, Artificial Intelligence, Machine Learning',
      url: 'https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0',
    },
    {
      name: 'Truedigital Ventures',
      location: 'Bengaluru Urban, Karnataka',
      description: 'Blockchain, Internet of Things (IoT), Robotics, Smart City Solutions',
      url: 'https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0',
    },
    {
      name: '7th Gen Ventures',
      location: 'Bengaluru, Karnataka',
      description: 'Sustainable Energy, CleanTech, Healthcare, Financial Services',
      url: 'https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0',
    },
  ];

  return (
    <div className="container">
      {investors.map((investor, index) => (
        <InvestorCard
          key={index}
          name={investor.name}
          location={investor.location}
          description={investor.description}
          url={investor.url}  // Passing the URL to each card
        />
      ))}
    </div>
  );
};

export default InvestorsList;
