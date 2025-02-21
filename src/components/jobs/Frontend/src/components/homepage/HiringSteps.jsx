import React from "react";
import styles from "../../styles/homepage/HiringSteps.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faFileAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const HiringSteps = () => {
  const steps = [
    {
      title: "Create an Account",
      description:
        "Automate recurring invoices and save time by using pre-built templates. Get paid on time.",
      icon: faUser,
    },
    {
      title: "Search Job",
      description:
        "Snap and categorize receipts in seconds and link your bank account.",
      icon: faSearch,
    },
    {
      title: "Upload CV/ Resume",
      description:
        "Set up payroll and bonuses for all your employees, and never be late on salaries.",
      icon: faFileAlt,
    },
    {
      title: "Get Job",
      description:
        "Get real-time visibility into every expense and payment, with a neat dashboard.",
      icon: faBriefcase,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.firstRow}>
        {/* Title and Sign Up Button */}
        <div className={styles.titleSection}>
          <h2 className={styles.headerTitle}>
            Get Hired in <br />4 Quick Easy Steps
          </h2>
          <button className={styles.signUpButton}>
            Sign Up Now <span className={styles.arrow}>&#8594;</span>
          </button>
        </div>

        {/* First Tile */}
        <div className={styles.firstTile}>
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={steps[0].icon} />
            </div>
            <h3 className={styles.stepTitle}>{steps[0].title}</h3>
            <p className={styles.stepDescription}>{steps[0].description}</p>
          </div>
        </div>
      </div>

      {/* Remaining Three Tiles */}
      <div className={styles.secondRow}>
        {steps.slice(1).map((step, index) => (
          <div className={styles.stepCard} key={index}>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={step.icon} />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringSteps;
