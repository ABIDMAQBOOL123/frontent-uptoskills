import React from "react";
import { Briefcase } from "lucide-react";
import styles from "../../styles/homepage/JobCard.module.css";

const JobCard = ({
  company,
  timing,
  position,
  location,
  employmentType,
  skills = [],
  salary,
  companyLogo,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          {companyLogo ? (
            <img
              src={companyLogo}
              alt={`${company} logo`}
              className={styles.logo}
            />
          ) : (
            <Briefcase className={styles.defaultIcon} />
          )}
        </div>
        <div className={styles.companyInfo}>
          <h3 className={styles.companyName}>{company}</h3>
          <p className={styles.timing}>{timing}</p>
        </div>
      </div>
      <div className={styles.content}>
        <h4 className={styles.position}>{position}</h4>
        <p className={styles.salary}>{salary}</p>
        <div className={styles.details}>
          <span>{location}</span>
          <span>{employmentType}</span>
        </div>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
        <a href="#" className={styles.viewDetails}>
          View Details
        </a>
      </div>
    </div>
  );
};

export default JobCard;
