import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";

const HeroSection = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCustomBanner, setShowCustomBanner] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(
          "https://upto-skills.onrender.com/api/hero"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch hero data");
        }
        const data = await response.json();
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching HeroSection data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  const toggleBanner = () => {
    setShowCustomBanner(!showCustomBanner);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  return (
    <section className={styles.hero}>
      {/* Floating Shapes */}
      <div className={styles.floatingCircle}></div>
      <div className={styles.floatingTriangle}></div>
      <div className={styles.floatingSquare}></div>

      {/* Particle Effects */}
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={styles.particle}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* Toggle Button - Positioned Outside the Main Content */}
      <button onClick={toggleBanner} className={styles.toggleButton}>
        {showCustomBanner ? "Show Uploaded Banner" : "Show Custom Banner"}
      </button>

      {/* Conditional Rendering */}
      {showCustomBanner ? (
        // Custom Banner (with gradient background)
        <div className={`${styles.gradientBackground} ${styles.hoverGlow}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroLogo}>
              <img
                src={`https://upto-skills.onrender.com/${heroData.logo}`}
                alt="HACK-AI-THON Logo"
                className={`${styles.logoImage} ${styles.hoverGlow}`}
                onError={(e) => {
                  e.target.src = "/path/to/fallback-logo.png"; // Fallback image
                }}
              />
              <p className={`${styles.tagline} ${styles.neonText}`}>
                <i>{heroData.tagline}</i>
              </p>
            </div>
            <div className={styles.heroText}>
              <h1 className={`${styles.heroTitle} ${styles.neonText}`}>
                HACK-AI-THON
              </h1>
              <h2 className={styles.heroYear}>{heroData.year}</h2>
            </div>
            <div className={styles.heroPoweredBy}>
              <p className={styles.poweredByText}>POWERED BY</p>
              <img
                src={`https://upto-skills.onrender.com/${heroData.poweredByLogo}`}
                alt="Powered By Logo"
                className={`${styles.poweredByImage} ${styles.hoverGlow}`}
                onError={(e) => {
                  e.target.src = "/path/to/fallback-powered-by-logo.png"; // Fallback image
                }}
              />
            </div>
            <p className={styles.heroPrize}>
              Prizes Worth{" "}
              <span className={`${styles.prizeAmount} ${styles.neonText}`}>
                {heroData.prizeWorth}
              </span>
            </p>
          </div>
        </div>
      ) : (
        // Uploaded Banner (displayed as it is, without gradient background)
        <div className={styles.uploadedBanner}>
          <img
            src={`https://upto-skills.onrender.com/${heroData.uploadedBanner}`}
            alt="Uploaded Banner"
            className={styles.uploadedBannerImage}
            onError={(e) => {
              e.target.src = "/path/to/fallback-banner.png"; // Fallback image
            }}
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
