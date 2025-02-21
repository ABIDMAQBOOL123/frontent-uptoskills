import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Challenges.module.css";

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch challenges from the backend
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch(
          "https://upto-skills.onrender.com/api/challenges"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("API Response:", data); // Debugging: Log the API response
        setChallenges(data); // Directly set the array to the state
      } catch (err) {
        console.error("Error fetching challenges:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  // Display loading state
  if (loading) {
    return <div className={styles.loading}>Loading challenges...</div>;
  }

  // Display error state
  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  // Display challenges
  return (
    <div className={styles.hackathonPage}>
      <div className={styles.challengesContainer}>
        <h2 className={styles.heading}>Challenges</h2>
        <div className={styles.challengesGrid}>
          {Array.isArray(challenges) &&
            challenges.map((challenge) => (
              <div className={styles.challengeCard} key={challenge.id}>
                <img
                  src={challenge.image}
                  alt={`Challenge ${challenge.id}: ${challenge.title}`}
                  className={styles.challengeImage}
                />
                <div className={styles.challengeContent}>
                  <h3>
                    {challenge.id}: {challenge.title}
                  </h3>
                  <Link
                    to={`/challenge/${challenge.id}`}
                    className={styles.viewMore}
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
