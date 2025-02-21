import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.logo}
        src="./UptoSkills.png"
        alt="UptoSkills logo"
      />
      <div className={styles.upper}>
        <section className={styles.contactInfo}>
          <ul>
            <li>
              <p>
                <span className={styles.highlight}>Address:</span>
                <br /> Palam, New Delhi
              </p>
            </li>
            <li>
              <p>
                <span className={styles.highlight}>Email:</span> <br />
                info@uptoskills.com
              </p>
            </li>
            <li>
              <p>
                <span className={styles.highlight}>Phone:</span> <br />
                +91-9319772294
              </p>
            </li>
          </ul>
        </section>

        <section className={styles.links}>
          <h2>Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </section>

        <section className={styles.services}>
          <h2>Services</h2>
          <ul>
            <li>Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit </li>
          </ul>
        </section>

        <section className={styles.courses}>
          <h2>Courses</h2>
          <ul>
            <li>AI & Machine Learning </li>
            <li>Data Science</li>
            <li>Digital Marketing</li>
            <li>Cloud Computing </li>
          </ul>
        </section>

        <section className={styles.subscribeUs}>
          <h2>Subscribe Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </section>
      </div>

      <div className={styles.lower}>
        <div className={styles.lowerContainer}>
          <img src="./Linkedin.png" alt="LinkedIn" />
          <img src="./Instagram.png" alt="Instagram" />
          <img src="./Facebook.png" alt="Facebook" />
          <img src="./Twitter.png" alt="Twitter" />
          <div className={styles.emailSubscription}>
            <input type="text" placeholder="Enter Your Email" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
