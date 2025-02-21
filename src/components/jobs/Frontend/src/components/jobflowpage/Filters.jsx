import React, { useState } from "react";
import styles from "../../styles/jobflowpage/filters.module.css";

const Filters = () => {
  const [experience, setExperience] = useState(0);
  const [salary, setSalary] = useState(0);

  const handleExperienceChange = (e) => {
    const value = e.target.value;
    setExperience(value);
    // Update the CSS variable for the experience slider
    document
      .querySelector(`.${styles.experienceSlider}`)
      .style.setProperty("--slider-fill-experience", `${(value / 10) * 100}%`);
  };

  const handleSalaryChange = (e) => {
    const value = e.target.value;
    setSalary(value);
    // Update CSS variable for the salary slider
    document
      .querySelector(`.${styles.salarySlider}`)
      .style.setProperty("--slider-fill-salary", `${(value / 50) * 100}%`);
  };

  return (
    <div className={styles.filtersContainer}>
      <h2 className={styles.title}>Filters</h2>

      {/* Experience Filter */}
      <div className={`${styles.filterGroup} ${styles.experienceSlider}`}>
        <label className={styles.filterLabel}>
          Experience
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className={styles.textInput}
            placeholder="Enter"
          />
        </label>
        <div className={styles.sliderWrapper}>
          {/* Static 0 Label */}
          <span className={styles.startLabel}>0</span>

          {/* Range Input */}
          <input
            type="range"
            min="0"
            max="10"
            value={experience}
            onChange={handleExperienceChange}
            className={styles.rangeInput}
            id="experienceSlider"
          />

          {/* Dynamic Value */}
          {experience > 0 && (
            <span
              className={styles.dynamicValue}
              style={{
                left: `calc(${(experience / 10) * 100}% - 5px)`,
              }}
            >
              {experience}
            </span>
          )}
        </div>
      </div>

      {/* Salary Filter */}
      <div className={`${styles.filterGroup} ${styles.salarySlider}`}>
        <label className={styles.filterLabel}>
          Salary / PA
          <input
            type="number"
            min="0"
            max="50"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className={styles.textInput}
            placeholder="Enter"
          />
        </label>
        <input
          type="range"
          min="0"
          max="50"
          value={salary}
          onChange={handleSalaryChange}
          className={styles.rangeInput}
        />
        <span className={styles.filterValue}>₹ {salary} Lacs</span>
      </div>

      {/* Employment Type */}
      <div className={`${styles.filterGroup} ${styles.employmentType}`}>
        <label className={styles.filterLabel}>Employment Type</label>
        <div>
          <input type="checkbox" id="full-time" />
          <label htmlFor="full-time">Full Time</label>
        </div>
        <div>
          <input type="checkbox" id="part-time" />
          <label htmlFor="part-time">Part Time</label>
        </div>
        <div>
          <input type="checkbox" id="contract" />
          <label htmlFor="contract">Freelancer</label>
        </div>
        <div>
          <input type="checkbox" id="contract" />
          <label htmlFor="contract">Contract Base</label>
        </div>
      </div>

      {/* Workplace */}
      <div className={`${styles.filterGroup} ${styles.workplaceType}`}>
        <label className={styles.filterLabel}>Type Of Workplace</label>
        <div>
          <input type="checkbox" id="remote" />
          <label htmlFor="remote">Remote</label>
        </div>
        <div>
          <input type="checkbox" id="on-site" />
          <label htmlFor="on-site">On-Site</label>
        </div>
        <div>
          <input type="checkbox" id="work from home" />
          <label htmlFor="hybrid">Work from Home</label>
        </div>
      </div>

      {/* Location */}
      <div className={`${styles.filterGroup} ${styles.Location}`}>
        <label className={styles.filterLabel}>Location</label>
        <div>
          <input type="checkbox" id="delhi" />
          <label htmlFor="remote">Delhi</label>
        </div>
        <div>
          <input type="checkbox" id="pune" />
          <label htmlFor="on-site">Pune</label>
        </div>
        <div>
          <input type="checkbox" id="indore" />
          <label htmlFor="hybrid">Indore</label>
        </div>
        <div>
          <input type="checkbox" id="bangalore" />
          <label htmlFor="hybrid">Bangalore</label>
        </div>
        <div>
          <input type="checkbox" id="noida" />
          <label htmlFor="hybrid">Noida</label>
        </div>
        <div>
          <input type="checkbox" id="mumbai" />
          <label htmlFor="hybrid">Mumbai</label>
        </div>
      </div>

      {/* Date Posted */}
      <div className={`${styles.filterGroup} ${styles.datePosted}`}>
        <label className={styles.filterLabel}>Date Posted</label>
        <div>
          <input type="checkbox" id="all" />
          <label htmlFor="remote">All</label>
        </div>
        <div>
          <input type="checkbox" id="24hrs" />
          <label htmlFor="on-site">Last 24 Hrs</label>
        </div>
        <div>
          <input type="checkbox" id="48hrs" />
          <label htmlFor="hybrid">Last 48 Hrs</label>
        </div>
        <div>
          <input type="checkbox" id="last-week" />
          <label htmlFor="hybrid">Last Week</label>
        </div>
      </div>

      {/* Department */}
      <div className={`${styles.filterGroup} ${styles.department}`}>
        <label className={styles.filterLabel}>Department</label>
        <div>
          <input type="checkbox" id="consultant" />
          <label htmlFor="remote">Consultant</label>
        </div>
        <div>
          <input type="checkbox" id="banking" />
          <label htmlFor="on-site">Banking</label>
        </div>
        <div>
          <input type="checkbox" id="customer-supprt" />
          <label htmlFor="hybrid">Customer Support</label>
        </div>
        <div>
          <input type="checkbox" id="designing" />
          <label htmlFor="hybrid">Designing</label>
        </div>
        <div>
          <input type="checkbox" id="development" />
          <label htmlFor="hybrid">Development</label>
        </div>
        <div>
          <input type="checkbox" id="hr" />
          <label htmlFor="hybrid">HR</label>
        </div>
        <div>
          <input type="checkbox" id="ds-analytics" />
          <label htmlFor="hybrid">Data Science & Analytics</label>
        </div>
        <div>
          <input type="checkbox" id="Finance-accounting" />
          <label htmlFor="hybrid">Finance & Accounting</label>
        </div>
        <div>
          <input type="checkbox" id="social-service" />
          <label htmlFor="hybrid">CRS & Social Service</label>
        </div>
        <div>
          <input type="checkbox" id="advertising" />
          <label htmlFor="hybrid">Advertising / Communication</label>
        </div>
        <div>
          <input type="checkbox" id="consulting" />
          <label htmlFor="hybrid">Consulting</label>
        </div>
        <div>
          <input type="checkbox" id="facility-management" />
          <label htmlFor="hybrid">Facility Management</label>
        </div>
      </div>

      {/* Sort by */}
      <div className={`${styles.filterGroup} ${styles.sortby}`}>
        <label className={styles.filterLabel}>Sort by</label>
        <div>
          <input type="checkbox" id="relevant" />
          <label htmlFor="remote">Relevant</label>
        </div>
        <div>
          <input type="checkbox" id="salary" />
          <label htmlFor="on-site">Salary - High to Low</label>
        </div>
        <div>
          <input type="checkbox" id="Date-posted" />
          <label htmlFor="hybrid">Date posted - New to Old</label>
        </div>
        <div>
          <input type="checkbox" id="last-week" />
          <label htmlFor="hybrid">Last Week</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
