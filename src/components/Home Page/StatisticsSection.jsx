import React, { useEffect, useState } from "react";
import styles from "./StatisticsSection.module.css"; // Import CSS Module

const StatisticsSection = () => {
  const [stats, setStats] = useState({
    creativeEvents: 0,
    skillTutors: 0,
    onlineTrainings: "0",
    peopleWorldwide: "0",
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(
          "https://upto-skills.onrender.com/api/statistics"
        );
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <section className={styles.statisticsSection}>
      {/* Map image */}
      <div className={styles.mapLayer}>
        <img src="/world-map.png" alt="World Map" className={styles.mapImage} />
      </div>
      {/* Stats overlay */}
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>{stats.creativeEvents}</h2>
          <div className={styles.underline}></div>
          <p className={styles.statLabel}>Creative Events</p>
          <hr />
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>{stats.skillTutors}</h2>
          <div className={styles.underline}></div>
          <p className={styles.statLabel}>Skill Tutor</p>
          <hr />
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>{stats.onlineTrainings}+</h2>
          <div className={styles.underline}></div>
          <p className={styles.statLabel}>Online Training</p>
          <hr />
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>{stats.peopleWorldwide}+</h2>
          <div className={styles.underline}></div>
          <p className={styles.statLabel}>People Worldwide</p>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
