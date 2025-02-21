import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./CareerGrowth.css";

const CareerProspects = () => {
  const items = [
    {
      iconColor: "#e91e63", // Pink
      text: "Understand the core principles, algorithms, and models crucial for success in AI/ML interviews and assessments.",
    },
    {
      iconColor: "#ffc107", // Yellow
      text: "Develop hands-on skills with projects that translate theory into practice, ensuring readiness for technical assessments and job-specific problem-solving.",
    },
    {
      iconColor: "#673ab7", // Purple
      text: "Learn effective interview communication, problem-solving tactics, and boost confidence through mock assessments, equipping you for success in AI/ML job interviews.",
    },
  ];

  return (
    <div className="career-prospects-container">
      <h2 className="career-prospects-title">
        Career Growth Prospects After The Completion of This Course
      </h2>
      <p className="career-prospects-subtitle">
        Cracking Job Interviews and Preliminary Assessments
      </p>
      <ul className="career-prospects-list">
        {items.map((item, index) => (
          <li key={index} className="career-prospects-item">
            <FaCheckCircle
              className="career-prospects-icon"
              style={{ color: item.iconColor }}
            />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerProspects;