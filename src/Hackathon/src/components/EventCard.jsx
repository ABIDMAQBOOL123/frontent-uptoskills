import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTag,
  FaRegClock,
} from "react-icons/fa"; // React Icons
import styles from "./EventCard.module.css";

const EventCard = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event data from the backend
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          "https://upto-skills.onrender.com/api/event"
        );
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, []);

  if (!event) return <p>Loading...</p>; // Show loading state until data is fetched

  return (
    <div className={styles.eventCard}>
      <div className={styles.eventImage}>
        <img
          src={`https://upto-skills.onrender.com${event.image}`}
          alt={event.title}
        />
      </div>
      <div className={styles.eventDetails}>
        <div>
          <h2 className={styles.eventTitle}>{event.title}</h2>
          <div className={styles.eventInfo}>
            <span className={styles.tag}>
              <FaCalendarAlt className={styles.icon} /> Date: {event.date}
            </span>
            <span className={styles.tag}>
              <FaMapMarkerAlt className={styles.icon} /> Location:{" "}
              {event.location}
            </span>
            <span className={styles.tag}>
              <FaTag className={styles.icon} /> Category: {event.category}
            </span>
            <span className={styles.tag}>
              <FaRegClock className={styles.icon} /> Duration: {event.duration}
            </span>
          </div>
        </div>
        <button
          className={styles.registerButton}
          disabled={event.registrationClosed}
        >
          {event.registrationClosed ? "Registration Closed" : "Register Now"}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
