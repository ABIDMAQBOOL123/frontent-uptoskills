import React, { useEffect, useState } from "react";
import styles from "./Prize.module.css";

const PrizeCard = ({ rank, prizeAmount, medalImage }) => {
  return (
    <div className={styles.prizeCard}>
      <div className={styles.medalContainer}>
        <img src={medalImage} alt={`${rank} medal`} className={styles.medal} />
      </div>
      <div className={styles.prizeDetails}>
        <p className={styles.rank}>{rank}</p>
        <p className={styles.amount}>INR {prizeAmount}</p>
        <p className={styles.sponsor}>SBI LIFE</p>
      </div>
    </div>
  );
};

const Prize = () => {
  const [prizes, setPrizes] = useState([]); // State to store prize data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch prize data from the backend
  useEffect(() => {
    const fetchPrizes = async () => {
      try {
        const response = await fetch(
          "https://upto-skills.onrender.com/api/prizes"
        ); // Replace with your backend API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch prize data");
        }
        const data = await response.json();
        setPrizes(data); // Set the fetched data to state
      } catch (err) {
        console.error("Error fetching prize data:", err);
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchPrizes();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading state
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>; // Show error message
  }

  return (
    <div className={styles.prizeContainer}>
      {prizes.map((prize) => (
        <PrizeCard
          key={prize._id} // Use a unique key (e.g., prize ID from the backend)
          rank={prize.rank}
          prizeAmount={prize.prizeAmount}
          medalImage={prize.medalImage}
        />
      ))}
    </div>
  );
};

export default Prize;
