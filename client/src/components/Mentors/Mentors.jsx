import React, { useState } from "react";

const MentorCard = ({ name, image, description, roles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  const cardStyle = {
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    width: "280px",
    margin: "20px",
    background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
    boxShadow:
      "4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.7)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isOpen ? "scale(1.05)" : "scale(1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "120px",
    height: "120px",
    objectFit: "cover",
    marginBottom: "15px",
    transition: "transform 0.3s ease",
  };

  const descriptionStyle = {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: isOpen ? "none" : 3,
    WebkitBoxOrient: "vertical",
    fontSize: "0.9em",
    color: "#555",
    marginTop: "10px",
    transition: "max-height 0.3s ease",
    maxHeight: isOpen ? "none" : "3.6em", // This ensures the description is initially clamped to 3 lines
    textAlign: "justify",
  };

  const rolesStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "15px",
    gap: "10px",
  };

  const roleBadgeStyle = {
    backgroundColor: "#0062cc",
    color: "white",
    padding: "6px 12px",
    borderRadius: "12px",
    fontSize: "0.8em",
    fontWeight: "500",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "8px 18px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    marginTop: "15px",
    transition: "background-color 0.3s ease",
    fontSize: "0.9em",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
  };

  const exploreButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
    marginTop: "10px",
    textDecoration: "none",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h3 style={{ color: "#333", fontWeight: "600", marginTop: "10px" }}>
        {name}
      </h3>
      <div style={descriptionStyle}>{description}</div>
      <button style={buttonStyle} onClick={toggleDescription}>
        {isOpen ? "Hide" : "Read more"}
      </button>
      <div style={rolesStyle}>
        {roles.map((role, index) => (
          <span key={index} style={roleBadgeStyle}>
            {role}
          </span>
        ))}
      </div>
      <a
        href="https://www.startupindia.gov.in/content/sih/en/search.html?roles=Mentor&page=0#"
        target="_blank"
        rel="noopener noreferrer"
        style={exploreButtonStyle}
      >
        Explore
      </a>
    </div>
  );
};

const Mentors = () => {
  const mentors = [
    {
      name: "Yash Mali",
      image: "https://avatars.githubusercontent.com/u/112254451?v=4",
      description:
        "Hi! It's been a great experience to work with Terasology as it has made me stand and explore about myself.",
      roles: ["Designer", "Testing"],
    },
    {
      name: "Uday Kawde",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEz3nOJut-VAA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692895345522?e=1735776000&v=beta&t=dy63D0W3tmo0XtxNbX2RYWHbQqsohrJ2ul5DZIoxDww",
      description:
        "Experience to work with Terasology as it has made me stand and explore about myself.",
      roles: ["Web Design", "Outreach", "Testing", "World Generation"],
    },
    {
      name: "Sujay Kangane",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEnXPrk108b3w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692542492247?e=1735776000&v=beta&t=rEsVoa96VoI7POie9SVnZEQ3B6NZetXiOexZ65nmYE8",
      description:
        "Hi! It's been a great experience to work with Terasology as it has made me stand and explore about myself.",
      roles: ["Documentation", "Logistics", "Content"],
    },
    {
      name: "Om Kale",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFoghQtdj28eQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725451722390?e=1735776000&v=beta&t=ZbEGhRCzta7_YL8T0ssPPdr2gkuUWA0mMIZYfKVr2QU",
      description:
        "Hi! It's been a great experience to work with Terasology as it has made me stand and explore about myself.",
      roles: ["Documentation", "Logistics", "Content"],
    },
  ];

  const pageStyle = {
    textAlign: "center",
    padding: "40px",
    background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
    minHeight: "100vh",
  };

  return (
    <div style={pageStyle}>
      <h1
        style={{
          color: "#007bff",
          fontWeight: "700",
          marginBottom: "40px",
          fontSize: "2.2em",
        }}
      >
        Meet our GSoC-2018 Mentors!
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {mentors.map((mentor, index) => (
          <MentorCard
            key={index}
            name={mentor.name}
            image={mentor.image}
            description={mentor.description}
            roles={mentor.roles}
          />
        ))}
      </div>
    </div>
  );
};

export default Mentors;
