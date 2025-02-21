import React from "react";
import styles from "../../styles/jobdetailpage/aboutJob.module.css";

const AboutJob = ({ job }) => {
  const { title, skills, responsibilities, requirements, other, buttonText } =
    job;

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>{"About the Job"}</h2>
      <div className={styles.skillsSection}>
        <h3 className={styles.subHeading}>Skills</h3>
        <p className={styles.skills}>{skills.join(" | ")}</p>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subHeading}>Responsibilities:</h3>
        <ul className={styles.list}>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subHeading}>Requirements and Skills:</h3>
        <ul className={styles.list}>
          {requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {other && (
        <div className={styles.section}>
          <h3 className={styles.subHeading}>Other</h3>
          <ul className={styles.list}>
            {other.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <br />
      <button className={styles.applyButton}>
        {buttonText || "Apply Now"}
      </button>
    </div>
  );
};

export default AboutJob;
