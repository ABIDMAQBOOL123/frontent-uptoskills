import React, { useState, useEffect } from "react";
import styles from "./FAQ.module.css";

const FAQs = () => {
  const [faqs, setFaqs] = useState([]); // State to store FAQ data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [activeIndex, setActiveIndex] = useState(null);

  // Fetch FAQ data from the backend
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch(
          "https://upto-skills.onrender.com/api/faqs"
        ); // Replace with your backend API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch FAQ data");
        }
        const data = await response.json();
        setFaqs(data); // Set the fetched data to state
      } catch (err) {
        console.error("Error fetching FAQ data:", err);
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading state
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>; // Show error message
  }

  return (
    <div className={styles.hackathonPage}>
      <div className={styles.faqsContainer}>
        <h2>FAQs</h2>
        <div className={styles.faqs}>
          {faqs.map((faq, index) => (
            <div
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faqQuestion}>
                {faq.question}
                <span className={styles.arrow}>
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
