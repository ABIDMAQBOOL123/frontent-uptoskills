import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/jobdetailpage/aboutCompany.module.css";
import { TbCircleArrowUpRight } from "react-icons/tb";

const AboutCompany = ({
  companyName,
  foundedYear,
  description,
  industry,
  companySize,
  location,
  websiteLink,
}) => (
  <div className={styles.companyDetails}>
    <h2 className={styles.title}>About the Company</h2>
    <p className={styles.description}>
      Founded in {foundedYear}, {companyName} is {description}
    </p>
    <div className={styles.infoGrid}>
      <div className={styles.infoItem}>
        <strong>Industry</strong>
        <span>{industry}</span>
      </div>
      <div className={styles.infoItem}>
        <strong>Company Size</strong>
        <span>{companySize}</span>
      </div>
      <div className={styles.infoItem}>
        <strong>Location</strong>
        <span>{location}</span>
      </div>
    </div>
    <a
      href={websiteLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.applyButton}
    >
      Apply Company Site <TbCircleArrowUpRight />
    </a>
  </div>
);

AboutCompany.propTypes = {
  companyName: PropTypes.string.isRequired,
  foundedYear: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  companySize: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  websiteLink: PropTypes.string.isRequired,
};

export default AboutCompany;
