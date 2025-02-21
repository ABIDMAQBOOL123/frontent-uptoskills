import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import avatar from "../../images/avtar.jpg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nameCard}>
        <div className={styles.profilePic}>
          <div
            className={styles.progressBar}
            style={{ position: "relative" }}
          ></div>
          <img
            src={avatar}
            alt="Profile Avatar"
            style={{
              width: "71px",
              height: "70px",
              borderRadius: "50%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "absolute",
              top: "5%",
              left: "0%",
            }}
          />
        </div>
        <div className={styles.mail}>
          <h2>Ramdas Sakpal</h2>
          <h3>ramdas@gmail.com</h3>
          <NavLink
            exact={true}
            to="/student%20dashboard/home"
            className={styles.navlink}
          >
            <h4>View Profile ˃</h4>
          </NavLink>
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.stay}>
          {/* Uncomment if needed */}
          {/* <h3>Stay On The Topic : Topic Name</h3> */}
        </div>
        <div className={styles.btns}></div>
      </div>
      <div className={styles.box3}>
        {/* Uncomment if badges are needed */}
        {/* <div className={styles.badges}>
          <h3>MY BADGES</h3>
        </div>
        <div className={styles.imgs}>
          <img src="./images/bronze_badge.png" alt="Bronze Badge" />
          <img src="./images/silver_badge.png" alt="Silver Badge" />
          <img src="./images/gold_badge.png" alt="Gold Badge" />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
