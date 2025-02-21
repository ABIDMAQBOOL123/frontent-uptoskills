import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/jobflowpage/HeroSection.module.css";
// import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className={styles.heroContent}>
      <h1 className={styles.mainTitle}>
        Get your Dream <span className={styles.orangeText}>Job</span>
      </h1>
      <p className={styles.description}>
        Find You New Job Today! New Job Postings Everyday just for you, browse
        the job you want and <br />
        apply wherever you want.
      </p>
      <div className={styles.searchBar}>
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Job title or keyword"
          />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="India"
          />
        </div>
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default HeroSection;
