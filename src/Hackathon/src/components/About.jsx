import React, { useEffect, useState } from "react";
import styles from "./about.module.css";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(
          "https://upto-skills.onrender.com/api/about"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch About data");
        }
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching About data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  return (
    <div className={styles.hackathonPage}>
      <div className={styles.about}>
        <h2 className={styles.title}>{aboutData.title}</h2>
        <p className={styles.description}>{aboutData.description1}</p>
        <div className={styles["image-container"]}>
          <img
            src={`https://upto-skills.onrender.com${aboutData.image}`}
            className={styles["about-image"]}
            alt="About"
          />
        </div>
        <p className={styles.description}>{aboutData.description2}</p>
      </div>
    </div>
  );
};

export default About;
