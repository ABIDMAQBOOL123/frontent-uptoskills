import React, { useEffect, useState } from "react";
import styles from "./Timeline.module.css";

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch timeline data from the backend
  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await fetch(
          "https://upto-skills.onrender.com/api/timeline"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch timeline data");
        }
        const data = await response.json();
        setTimelineData(data);
      } catch (err) {
        console.error("Error fetching timeline data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTimelineData();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.timelineTitle}>Timeline</h2>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div key={item._id || index} className={styles.timelineItem}>
            {/* Timeline Line and Dot */}
            <div className={styles.timelineLine}>
              <div className={styles.timelineDot}></div>
              {index !== timelineData.length - 1 && (
                <div className={styles.timelineConnector}></div>
              )}
            </div>

            {/* Timeline Content */}
            <div
              className={styles.timelineContent}
              style={{
                backgroundColor: item.color || "#f9f9f9",
                border: `1px solid ${item.color || "#e0e0e0"}`,
              }}
            >
              {/* Date Section */}
              <div className={styles.timelineDate}>
                <span className={styles.timelineDay}>
                  {item.date.split("-")[2]}
                </span>
                <span className={styles.timelineMonth}>
                  {new Date(item.date).toLocaleString("default", {
                    month: "short",
                  })}
                </span>
              </div>

              {/* Event Details */}
              <div className={styles.timelineDetails}>
                <h3 className={styles.timelineEvent}>{item.title}</h3>
                <p className={styles.timelineDuration}>
                  <strong>Duration:</strong> {item.duration}
                </p>
                <p className={styles.timelineDescription}>{item.description}</p>

                {/* Optional Start and End Dates */}
                {item.startDate || item.endDate ? (
                  <div className={styles.timelineDates}>
                    <p>
                      <strong>Start:</strong>{" "}
                      {item.startDate
                        ? new Date(item.startDate).toLocaleString()
                        : "Not specified"}
                    </p>
                    <p>
                      <strong>End:</strong>{" "}
                      {item.endDate
                        ? new Date(item.endDate).toLocaleString()
                        : "Not specified"}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
