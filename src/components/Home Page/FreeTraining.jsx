import React from "react";
import styles from "./FreeTraining.module.css"; // Import CSS Module
import img1 from "../../assets/Image/group-users.png";
import img2 from "../../assets/Image/Jobs.png";
import img3 from "../../assets/Image/Internship.png";
import img4 from "../../assets/Image/degree.png";

const FreeTraining = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.cards}>
        <li className={styles.card}>
          <div className={styles.iconBackground}>
            <div className={styles.cardIcon}>
              <img src={img1} alt="Free Trainings" />
            </div>
          </div>
          <div className={styles.infoDiv}>
            <h3 className={styles.cardTitle}>Free Trainings</h3>
            <p className={styles.cardDescription}>
              Transform your career with our comprehensive and industrial focus
              training programmes.
            </p>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.iconBackground}>
            <div className={styles.cardIcon}>
              <img src={img2} alt="Free Jobs" />
            </div>
          </div>
          <div className={styles.infoDiv}>
            <h3 className={styles.cardTitle}>Free Jobs</h3>
            <p className={styles.cardDescription}>
              Access various job opportunities designed to suit your skill set.
            </p>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.iconBackground}>
            <div className={styles.cardIcon}>
              <img src={img3} alt="Free Internship" />
            </div>
          </div>
          <div className={styles.infoDiv}>
            <h3 className={styles.cardTitle}>Free Internship</h3>
            <p className={styles.cardDescription}>
              Gain hands-on experience with our industry-focused internships.
            </p>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.iconBackground}>
            <div className={styles.cardIcon}>
              <img src={img4} alt="Degree Program" />
            </div>
          </div>
          <div className={styles.infoDiv}>
            <h3 className={styles.cardTitle}>Degree Programs</h3>
            <p className={styles.cardDescription}>
              Pursue accredited degree programs to advance your education.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default FreeTraining;
