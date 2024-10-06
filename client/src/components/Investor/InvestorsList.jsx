import React, { useState } from "react";
import "./InvestorsList.css";

// Card component for each investor with a clickable link
const InvestorCard = ({ name, location, description, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="card">
        {/* <img src={image} alt={${name}} className="investor-image" /> */}
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
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const investors = [
    {
      name: "Seshadrinathan Krishnan",
      location: "Ernakulam, Kerala",
      description:
        "Animation, Agriculture, Green Technology, Finance Technology, Enterprise Solutions",
      url: "https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0",
      image: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      name: "GSF India",
      location: "Bengaluru, Karnataka",
      description:
        "AR VR (Augmented + Virtual Reality), Computer Vision, Telecommunications",
      url: "https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dholakia Ventures",
      location: "Surat, Gujarat",
      description:
        "Architecture Interior Design, AR VR, Automation, Enterprise Solutions",
      url: "https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Amiya Srivastava",
      location: "Bengaluru, Karnataka",
      description:
        "FinTech, Education Technology, Artificial Intelligence, Machine Learning",
      url: "https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Truedigital Ventures",
      location: "Bengaluru Urban, Karnataka",
      description:
        "Blockchain, Internet of Things (IoT), Robotics, Smart City Solutions",
      url: "https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "7th Gen Ventures",
      location: "Bengaluru, Karnataka",
      description:
        "Sustainable Energy, CleanTech, Healthcare, Financial Services",
      url: "https://www.startupindia.gov.in/content/sih/en/search.html?roles=Investor&page=0",
      image: "https://via.placeholder.com/150",
    },
    // Adding 9 more investors
    {
      name: "IN44 Capital",
      location: "Chennai, Tamil Nadu",
      description: "AR VR, Computer Vision, Agriculture, Aeronautics",
      url: "https://www.example.com",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ventana Ventures Fund",
      location: "Udupi, Karnataka",
      description: "Toys and Games",
      url: "https://www.example.com",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Upsparks Capital",
      location: "Bengaluru, Karnataka",
      description: "Agriculture, AI, Green Technology, Finance Technology",
      url: "https://www.example.com",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Real Time Angel Fund",
      location: "Gurugram, Haryana",
      description: "AR VR, Automotive, Computer Vision, AI",
      url: "https://www.example.com",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Navya Shree",
      location: "Bengaluru, Karnataka",
      description: "Construction, AI, Green Technology, Technology Hardware",
      url: "https://www.example.com",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Transition Venture Capital",
      location: "Bengaluru Urban, Karnataka",
      description: "Renewable Energy",
      url: "https://www.example.com",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mr Rajesh Raveendran",
      location: "Chennai, Tamil Nadu",
      description: "Telecommunication & Networking, AI, Finance Technology",
      url: "https://www.example.com",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Pulkit Dak",
      location: "Hyderabad, Telangana",
      description: "Analytics, AR VR, Computer Vision, Telecommunications",
      url: "https://www.example.com",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Individual Investor 01",
      location: "Baksa, Assam",
      description: "Analytics",
      url: "https://www.example.com",
      image: "https://via.placeholder.com/150",
    },
  ];

  // Filter investors based on search term and location
  const filteredInvestors = investors
    .filter(
      (investor) =>
        (investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          investor.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        (locationFilter === "" || investor.location.includes(locationFilter))
    )
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "location")
        return a.location.localeCompare(b.location);
      return 0;
    });

  // Show more investors on clicking "Load More"
  const showMoreInvestors = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="container">
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by name or expertise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="location-filter"
        >
          <option value="">All Locations</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Assam">Assam</option>
        </select>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-option"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="location">Location</option>
        </select>
      </div>

      <div className="cards-container">
        {filteredInvestors.slice(0, visibleCount).map((investor, index) => (
          <InvestorCard
            key={index}
            name={investor.name}
            location={investor.location}
            description={investor.description}
            url={investor.url}
            image={investor.image}
          />
        ))}
      </div>

      {visibleCount < filteredInvestors.length && (
        <button onClick={showMoreInvestors} className="load-more">
          Load More
        </button>
      )}
    </div>
  );
};

export default InvestorsList;