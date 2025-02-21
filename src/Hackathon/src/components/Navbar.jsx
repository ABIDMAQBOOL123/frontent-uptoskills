import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <ul className={styles.navbar__list}>
          {[
            "About",
            "Challenges",
            "Evaluation Parameters",
            "Timeline",
            "Prize",
            "FAQ",
          ].map((item, index) => (
            <li
              key={index}
              className={`${styles.navbar__item} ${
                activeIndex === index ? styles["navbar__item--active"] : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <a className={styles.navbar__link} href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
