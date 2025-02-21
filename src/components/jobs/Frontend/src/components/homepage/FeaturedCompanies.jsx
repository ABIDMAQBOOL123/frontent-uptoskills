import React, { useState } from "react";
import TCS from "../../../public/Tcs.jpg";
import Infosys from "../../../public/infosys.png";
import YashTech from "../../../public/yash.png";
import Cognizant from "../../../public/cognizant.png";
import Capgemini from "../../../public/capgemini.png";
import Accenture from "../../../public/accenture.png";
import Wipro from "../../../public/wipro.png";
import TechMahindra from "../../../public/techmahindra.png";
import Deloitte from "../../../public/Deloitte.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../../styles/homepage/FeaturedCompany.module.css";

const companies = [
  { name: "TCS", image: TCS },
  { name: "Infosys", image: Infosys },
  { name: "YashTech", image: YashTech },
  { name: "Capgemini", image: Capgemini },
  { name: "Cognizant", image: Cognizant },
  { name: "Accenture", image: Accenture },
  { name: "Wipro", image: Wipro },
  { name: "TechMahindra", image: TechMahindra },
  { name: "Deloitte", image: Deloitte },
];

function FeaturedCompanies() {
  const [startIndex, setStartIndex] = useState(0);
  const [isViewAll, setIsViewAll] = useState(false);

  const itemsToShow = 5; // Number of cards visible in carousel view
  const totalItems = companies.length;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow < totalItems ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const toggleViewAll = () => {
    setIsViewAll((prevState) => !prevState);
    setStartIndex(0); // Reset to the beginning when toggling views
  };

  return (
    <div className={styles.companyContainer}>
      <h2 className={styles.heading}>
        Featured <span className={styles.highlight}>Companies</span> hiring now
      </h2>

      {isViewAll ? (
        // Grid View for "View All" Mode
        <div className={styles.grid}>
          {companies.map((company, index) => (
            <div key={index} className={styles.card}>
              <img
                src={company.image}
                alt={company.name}
                className={styles.image}
              />
              <p className={styles.companyName}>{company.name}</p>
              <a href="#" className={styles.viewJobs}>
                View Jobs
              </a>
            </div>
          ))}
        </div>
      ) : (
        // Carousel View
        <div className={styles.carousel}>
          {startIndex > 0 && (
            <button className={styles.navButton} onClick={handlePrevious}>
              <FaChevronLeft />
            </button>
          )}

          <div className={styles.cards}>
            {companies
              .slice(startIndex, startIndex + itemsToShow)
              .map((company, index) => (
                <div key={index} className={styles.card}>
                  <img
                    src={company.image}
                    alt={company.name}
                    className={styles.image}
                  />
                  <p className={styles.companyName}>{company.name}</p>
                  <a href="#" className={styles.viewJobs}>
                    View Jobs
                  </a>
                </div>
              ))}
          </div>

          {startIndex + itemsToShow < totalItems && (
            <button className={styles.navButton} onClick={handleNext}>
              <FaChevronRight />
            </button>
          )}
        </div>
      )}

      <div className={styles.buttonContainer}>
        <button className={styles.viewAllButton} onClick={toggleViewAll}>
          {isViewAll ? "Show Less" : "View All Companies"}
        </button>
      </div>
    </div>
  );
}

export default FeaturedCompanies;
