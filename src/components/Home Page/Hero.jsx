import React from "react";
import styles from "./Hero.module.css"; // Import the CSS Module
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.skillTechContainer}>
      <div className={styles.leftSection}>
        <h4>Skill For Lifetime!</h4>
        <h1>
          India’s No 1 Skill
          <br />
          Tech Organization!
        </h1>
        <p>
          Improving your career with uptoskills: Free training for Brighter
          Future.
        </p>
        <div className={styles.buttons}>
          <button className={styles.viewTrainingBtn}>View Training →</button>
          <button className={styles.bookDemoBtn}>Book Demo</button>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.featuredApps}>
          <h3>Featured Apps</h3>
          <div className={styles.appList}>
            <div
              className={styles.appItem}
              onClick={() => navigate("/courses")}
            >
              <img src="/Courses.png" alt="Courses" />
              <div>
                <h4>Courses</h4>
                <p>Comprehensive CRM platform for customer-facing teams.</p>
              </div>
            </div>
            <div className={styles.appItem} onClick={() => navigate("/job")}>
              <img src="/Suitcase.png" alt="Job" />
              <div>
                <h4>Job</h4>
                <p>Secure email service for your business.</p>
              </div>
            </div>
            <div
              className={styles.appItem}
              onClick={() => navigate("/hackathon")}
            >
              <img src="/hackathon.png" alt="Industrial Tours" />
              <div>
                <h4>Hackathon</h4>
                <p>Participate in Hackathon</p>
              </div>
            </div>
            <div className={styles.appItem}>
              <img src="/degree-program.png" alt="Degree Program" />
              <div>
                <h4>Degree Program</h4>
                <p>Remote support and unattended remote access software.</p>
              </div>
            </div>
          </div>
          <a href="#" className={styles.exploreProductsLink}>
            Explore all products →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
