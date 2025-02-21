import React from "react";
import styles from "./Partners.module.css"; // Import CSS Module

const Partners = () => {
  return (
    <div className={styles.partnersComponent}>
      <h2>Our Trusted Partners</h2>
      <p>
        <span>Innovating Payment Ecosystems Globally</span>
        <br />
        Join a network of world-class companies revolutionizing
        <br />
        payment solutions and empowering merchants everywhere.
        <br />
      </p>
      <div className={styles.partnerLogos}>
        <img src="/HCL.png" alt="HCL" />
        <img src="/TechMahindra.png" alt="Tech Mahindra" />
        <img src="/Accenture.png" alt="Accenture" />
        <img src="/Capgemini.png" alt="Capgemini" />
        <img src="/MUsigma.png" alt="Mu Sigma" />
        <img src="/IBM.png" alt="IBM" />
      </div>
    </div>
  );
};

export default Partners;
