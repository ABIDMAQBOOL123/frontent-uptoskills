import React from "react";
import PropTypes from "prop-types";
import { FaUserGraduate } from "react-icons/fa";
import { TbCircleArrowUpRight } from "react-icons/tb";
import { PiBriefcase, PiBuildings } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FiCalendar, FiFlag, FiShare2 } from "react-icons/fi";
import CompanyLogo from "../../../public/logo1.png"; // Ensure the path is correct
import styles from "../../styles/jobdetailpage/jobDetails.module.css";

const JobDetails = ({
  companyLogo,
  companyName,
  location,
  jobType,
  experienceLevel,
  salaryRange,
  postedDate,
  qualification,
  websiteLink,
  onApplyClick,
}) => (
  <div className={styles.jobDetails}>
    {/* Header Section */}
    <div className={styles.header}>
      <img
        src={companyLogo || CompanyLogo}
        alt="Company Logo"
        className={styles.companyLogo}
      />
      <div className={styles.companyInfo}>
        <h1 className={styles.companyName}>{companyName}</h1>
      </div>
      <button className={styles.applyButton} onClick={onApplyClick}>
        Apply Now
      </button>
    </div>

    {/* Tags Section */}
    <div className={styles.tags}>
      <div className={`${styles.tag} ${styles.purpleTag}`}>
        <IoLocationOutline className={styles.icon} /> {location}
      </div>
      <div className={`${styles.tag} ${styles.yellowTag}`}>
        <PiBuildings className={styles.icon} /> {jobType}
      </div>
      <div className={`${styles.tag} ${styles.brownTag}`}>
        <PiBriefcase className={styles.icon} /> {experienceLevel}
      </div>
      <div className={`${styles.tag} ${styles.greenTag}`}>
        ₹ {salaryRange} (Per Month)
      </div>
    </div>

    {/* Job Details Section */}
    <div className={styles.details}>
      <div className={`${styles.tag} ${styles.blueTag}`}>
        <FiCalendar className={styles.icon} /> Posted on {postedDate}
      </div>
      <div className={`${styles.tag} ${styles.blueTag}`}>
        <FaUserGraduate className={styles.icon} /> {qualification}
      </div>
    </div>

    {/* Footer Links */}
    <div className={styles.footer}>
      <a href="#" className={styles.link}>
        <FiShare2 className={styles.icon} /> Share
      </a>
      <a href="#" className={styles.link}>
        <FiFlag className={styles.icon} /> Report
      </a>
      {websiteLink && (
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <TbCircleArrowUpRight className={styles.icon} /> Website
        </a>
      )}
    </div>
  </div>
);

JobDetails.propTypes = {
  companyLogo: PropTypes.string, // URL or path for the logo
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  experienceLevel: PropTypes.string.isRequired,
  salaryRange: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired,
  qualification: PropTypes.string.isRequired,
  websiteLink: PropTypes.string,
  onApplyClick: PropTypes.func,
};

JobDetails.defaultProps = {
  companyLogo: null, // Fallback handled by the component
  websiteLink: null,
  onApplyClick: () => alert("Application submitted!"),
};

export default JobDetails;
