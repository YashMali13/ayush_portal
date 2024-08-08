// Projects.jsx
import React from "react";
import "../styles/Projects.css";

function Projects({ projects }) {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong> - {project.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
