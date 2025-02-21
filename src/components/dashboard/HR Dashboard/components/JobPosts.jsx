import React, { useState } from "react";
import JobCard from "./JobCard";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import styles from "../styles/JobPosts.module.css";

const JobPosts = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <Navbar />
      <div className={styles.mainContent}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className={styles.contentArea}>
          <div className={styles.headerSection}>
            <h1 className={styles.jobCount}>All Jobs(2)</h1>
            <div className={styles.dropdownContainer}>
              <button className={styles.postJobButton} onClick={toggleDropdown}>
                Post a new job
                <KeyboardArrowDownIcon className={styles.dropdownIcon} />
              </button>

              {showDropdown && (
                <div className={styles.dropdownMenu}>
                  <button className={styles.dropdownItem}>
                    <AddIcon className={styles.dropdownItemIcon1} />
                    Start with new post
                    <span className={styles.dropdownItemDesc}>
                      Use our blank form to create your job
                    </span>
                  </button>
                  <button className={styles.dropdownItem}>
                    <ListAltIcon className={styles.dropdownItemIcon2} />
                    Use a job template
                    <span className={styles.dropdownItemDesc}>
                      Save time and hire like high-growth companies using
                      templates
                    </span>
                    <span className={styles.saveTime}>Save 50% more time</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <JobCard />

          {/* Middle Card */}
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.jobTitle}>
                  Naps Trainee
                  <sup className={`${styles.statusBadge} ${styles.active}`}>
                    Active
                  </sup>
                </div>
              </div>

              {/* Middle Section */}
              <div className={styles.cardContent}>
                <div className={styles.infoRow}>
                  <p className={styles.infoItem}>
                    <span className={styles.bullet}>•</span> Eligibility
                  </p>
                  <p className={styles.infoItem}>
                    <span className={styles.bullet}>•</span> Salary
                  </p>
                  <p className={styles.infoItem}>
                    <span className={styles.bullet}>•</span> Job Type
                  </p>
                  <div className={styles.candidatesInfo}>
                    <div className={styles.candidatesCount}>
                      Candidates Applied
                    </div>
                  </div>
                </div>
                <div
                  className={styles.infoRow}
                  style={{ position: "relative" }}
                >
                  <p className={styles.infoItem}>
                    <span className={styles.bullet}>•</span> Place
                  </p>
                  <p className={styles.infoItem}>
                    <span className={styles.bullet}>•</span> Posted on
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosts;
