import styles from "./ExploreJobs.module.css";

function ExploreJobs() {
  return (
    <div className={styles.customFrame}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2>Explore New Jobs Now</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed praesent
            pharetra quisque consectetur tellus elit. Suspendisse ultrices vitae
            at platea. Euismod pretium sit est etiam.
          </p>
          <button>Get Started</button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/ExploreJob.png"
            alt="Explore New Jobs Now"
            className={styles.womanImage}
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreJobs;
