import React from "react";
import styles from "../styles/JobFlowPage.module.css"; // Import the CSS Module
import Navbar from "../../../../common/NavigationBar";
import Footer from "../../../../common/Footer";
import HeroSection from "../components/jobflowpage/HeroSection";
import Filters from "../components/jobflowpage/Filters";
import Promotions from "../components/jobflowpage/Promotions";
import JobListings from "../components/jobflowpage/JobListings";

const JobFlowPage = () => {
  return (
    <div className={styles.jfpContainer}>
      <Navbar />
      <HeroSection />
      <div className={styles.mainContent}>
        <div className={styles.filtersSection}>
          <Filters />
        </div>

        <div className={styles.jobListingsSection}>
          <JobListings />
        </div>
        <div className={styles.promotionsSection}>
          <Promotions />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobFlowPage;
