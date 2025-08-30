import { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, techstack, image, github, demo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText =
    description.length > 100
      ? description.slice(0, 100)
      : description;

  return (
    <div className="project-card">
      <h2>{title}</h2>
      <img src={image} alt={`${title} Screenshot`} className="project-image" />

      <p className="project-description">
        {isExpanded ? description : shortText}
      </p>
      {description.length > 100 && <a className="read-more-btn"
      onClick = {()=>setIsExpanded(!isExpanded)}>{isExpanded ? "...Read Less" : "Read More..."}</a>}
      {techstack && <p className="project-techstack">{techstack}</p>}

      <div className="project-links">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">Demo
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
