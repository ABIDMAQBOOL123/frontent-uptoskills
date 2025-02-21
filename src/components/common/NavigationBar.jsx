import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.css"; // Import CSS Module
import sidebarStyles from "./Sidebar.module.css"; // Import CSS Module
import JobsContent from "./naviagatio bar content/Jobs-Content";
import Discove_Conent from "./naviagatio bar content/Discover_Content";
import Internship_content from "./naviagatio bar content/Internship_content";
import Learn_Earn from "./naviagatio bar content/Learn_Earn";

const NavigationBar = ({ openLoginModal }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showCorporateDropdown, setShowCorporateDropdown] = useState(false);
  const [navOpen, setNavOpen] = useState(false); // State to manage sidebar visibility
  const location = useLocation();

  const handleMouseEnter = (index) => setActiveDropdown(index);
  const handleMouseLeave = () => setActiveDropdown(null);

  const isActive = (path) => location.pathname === path;

  const toggleNav = () => {
    setNavOpen(!navOpen);
    if (!navOpen) {
      document.documentElement.style.overflowY = "hidden"; // Disable scroll on html
      document.body.style.overflowY = "hidden"; // Disable scroll on body
      console.log("Sidebar opened - scroll disabled");
    } else {
      document.documentElement.style.overflowY = "auto"; // Enable scroll on html
      document.body.style.overflowY = "auto"; // Enable scroll on body
      console.log("Sidebar closed - scroll enabled");
    }
  };

  const closeNav = () => {
    setNavOpen(false);
    document.documentElement.style.overflowY = "auto"; // Enable scroll on html
    document.body.style.overflowY = "auto"; // Enable scroll on body
    console.log("Sidebar closed - scroll enabled");
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        navOpen &&
        !e.target.closest(`.${sidebarStyles.sidebar}`) &&
        !e.target.closest(`.${sidebarStyles.menuIcon}`)
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [navOpen]);

  return (
    <header className={styles.premiumHeader}>
      <div className={styles.mainNav}>
        {/* Sidebar Toggle */}
        <div className={styles.mobileNavbar}>
          <div
            className={sidebarStyles.menuIcon}
            onClick={toggleNav}
            aria-label="Open Menu"
          >
            ☰ {/* Replace with an icon if needed */}
          </div>

          {/* Logo */}
          <div className={styles.logo}>
            <img src="/UptoSkills.png" alt="UptoSkills Logo" />
          </div>
        </div>
        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          {/* Learn & Earn */}
          <div
            className={`${styles.navItem} ${
              isActive("/courses") ? styles.active : ""
            }`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/courses" className={styles.navLink}>
              Learn & Earn <span className={styles.dropdownArrow}></span>
            </Link>
            {activeDropdown === 0 && (
              <div className={styles.cardDropdown}>
                <Learn_Earn />
              </div>
            )}
          </div>

          {/* Jobs */}
          <div
            className={`${styles.navItem} ${
              isActive("/jobs") ? styles.active : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/jobs" className={styles.navLink}>
              Jobs <span className={styles.dropdownArrow}></span>
            </Link>
            {activeDropdown === 1 && (
              <div className={styles.cardDropdown}>
                <JobsContent />
              </div>
            )}
          </div>

          {/* Internships */}
          <div
            className={`${styles.navItem} ${
              isActive("/discover") ? styles.active : ""
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/discover" className={styles.navLink}>
              Internships <span className={styles.dropdownArrow}></span>
            </Link>
            {activeDropdown === 2 && (
              <div className={styles.cardDropdown}>
                <Internship_content />
              </div>
            )}
          </div>

          {/* Discover */}
          <div
            className={`${styles.navItem} ${
              isActive("/degree-program") ? styles.active : ""
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/degree-program" className={styles.navLink}>
              Discover <span className={styles.dropdownArrow}></span>
            </Link>
            {activeDropdown === 3 && (
              <div className={styles.cardDropdown}>
                <Discove_Conent />
              </div>
            )}
          </div>
        </nav>

        {/* Search Bar */}
        <div className={styles.icons}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            aria-label="Search"
          />
          <img
            src="/search.png"
            alt="Search Icon"
            className={styles.searchIcon}
            aria-hidden="true"
          />
        </div>

        {/* Action Buttons */}
        <div className={styles.hideOnMobile}>
          <div className={styles.actionButtons}>
          <Link to="/login">
  <button className={styles.loginBtn}>Login</button>
</Link>


            {/* Corporate Dropdown */}
            <div
              className={styles.corporateBtnWrapper}
              onMouseEnter={() => setShowCorporateDropdown(true)}
              onMouseLeave={() => setShowCorporateDropdown(false)}
            >
              <button className={styles.corporateBtn}>For Enterprise</button>
              {showCorporateDropdown && (
                <div className={styles.corporateDropdown}>
                  <JobsContent />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`${sidebarStyles.sidebar} ${
          navOpen ? sidebarStyles.active : ""
        }`}
      >
        <nav className={sidebarStyles.navLinks}>
          <div
            className={`${sidebarStyles.navItem} ${
              isActive("/courses") ? sidebarStyles.active : ""
            }`}
          >
            <Link to="/courses" className={sidebarStyles.navLink}>
              Learn & Earn
            </Link>
          </div>
          <div
            className={`${sidebarStyles.navItem} ${
              isActive("/jobs") ? sidebarStyles.active : ""
            }`}
          >
            <Link to="/jobs" className={sidebarStyles.navLink}>
              Jobs
            </Link>
          </div>
          <div
            className={`${sidebarStyles.navItem} ${
              isActive("/discover") ? sidebarStyles.active : ""
            }`}
          >
            <Link to="/discover" className={sidebarStyles.navLink}>
              Internships
            </Link>
          </div>
          <div
            className={`${sidebarStyles.navItem} ${
              isActive("/degree-program") ? sidebarStyles.active : ""
            }`}
          >
            <Link to="/degree-program" className={sidebarStyles.navLink}>
              Discover
            </Link>
          </div>

          <div className={sidebarStyles.actionButtons}>
            <button className={sidebarStyles.loginBtn} onClick={openLoginModal}>
              Login
            </button>

            {/* Corporate Dropdown */}
            <div
              className={sidebarStyles.corporateBtnWrapper}
              onClick={() => setShowCorporateDropdown(!showCorporateDropdown)}
            >
              <button className={sidebarStyles.corporateBtn}>
                For Enterprise
              </button>
              {showCorporateDropdown && (
                <div className={sidebarStyles.corporateDropdown}>
                  <JobsContent />
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
