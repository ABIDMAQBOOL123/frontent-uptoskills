import React, { useState } from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    console.log(`Selected language: ${language}`);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <nav className={styles.navbarTop}>
      <div className={styles.languageSelector} onClick={toggleDropdown}>
        <span>Select Language</span>

        {/* Dropdown Menu */}
        <div
          className={`${styles.languageDropdown} ${
            isDropdownOpen ? styles.active : ""
          }`}
        >
          <ul>
            <li onClick={() => handleLanguageSelect("English")}>English</li>
            <li onClick={() => handleLanguageSelect("Spanish")}>Spanish</li>
            <li onClick={() => handleLanguageSelect("French")}>French</li>
          </ul>
        </div>
      </div>
      <ul className={styles.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/organize-initiative">Organize Initiative</a>
        </li>
      </ul>
      <button className={styles.loginButton}>Login/Register</button>
    </nav>
  );
};

export default Navigation;
