import React, { useState } from "react";
import styles from "../../styles/homepage/Cities.module.css";
import Mumbai from "../../../public/Mumbai.jpg";
import Bangalore from "../../../public/Bangalore.webp";
import Delhi from "../../../public/Delhi.avif";
import Hyderabad from "../../../public/Hyderabad.webp";
import Chennai from "../../../public/Chennai.webp";
import Ahmedabad from "../../../public/Ahmedabad.jpg";
import Jaipur from "../../../public/Jaipur.jpg";
import Kolkata from "../../../public/Kolkata.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const cities = [
  { name: "Mumbai", jobs: "30K+ Jobs", image: Mumbai },
  { name: "Bangalore", jobs: "20K+ Jobs", image: Bangalore },
  { name: "Delhi", jobs: "20K+ Jobs", image: Delhi },
  { name: "Hyderabad", jobs: "10K+ Jobs", image: Hyderabad },
  { name: "Chennai", jobs: "10K+ Jobs", image: Chennai },
  { name: "Ahmedabad", jobs: "10K+ Jobs", image: Ahmedabad },
  { name: "Jaipur", jobs: "10K+ Jobs", image: Jaipur },
  { name: "Kolkata", jobs: "30K+ Jobs", image: Kolkata },
  // { name: "Lucknow", jobs: "20K+ Jobs", image: "Lucknow.jpg" },
  // { name: "Patna", jobs: "10K+ Jobs", image: "Patna.jpg" },
  // { name: "Pune", jobs: "10K+ Jobs", image: "pune.avif" },
];

function CityCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [isViewAll, setIsViewAll] = useState(false);

  const itemsToShow = 5; // Number of cards visible in carousel view
  const totalItems = cities.length;

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
    <div className={styles.citycontainer}>
      <h2 className={styles.heading}>
        Explore jobs in <span className={styles.highlight}>400+ cities</span>
      </h2>
      <p className={styles.subheading}>
        Find the jobs/Internship that fits your career aspirations
      </p>

      {isViewAll ? (
        // Grid View for "View All" Mode
        <div className={styles.grid}>
          {cities.map((city, index) => (
            <div key={index} className={styles.card}>
              <img src={city.image} alt={city.name} className={styles.image} />
              <p className={styles.cityName}>{city.name}</p>
              <p className={styles.jobs}>{city.jobs}</p>
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
            {cities
              .slice(startIndex, startIndex + itemsToShow)
              .map((city, index) => (
                <div key={index} className={styles.card}>
                  <img
                    src={city.image}
                    alt={city.name}
                    className={styles.image}
                  />
                  <p className={styles.cityName}>{city.name}</p>
                  <p className={styles.jobs}>{city.jobs}</p>
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
          {isViewAll ? "Show Less" : "View All Cities"}
        </button>
      </div>
    </div>
  );
}

export default CityCarousel;
