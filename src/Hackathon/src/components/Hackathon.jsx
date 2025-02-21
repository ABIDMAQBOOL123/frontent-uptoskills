import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaTag } from "react-icons/fa";
import useIntersectionObserver from "./useIntersectionObserver"; // Import the hook
import styles from "./Hackathon.module.css";

function Hackathon() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.8 }); // Use the hook

  // Fixed registration deadline (5 days from now)
  const registrationDeadline = new Date();
  registrationDeadline.setDate(registrationDeadline.getDate() + 5);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = registrationDeadline - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  const isRegistrationClosed =
    timeLeft.days <= 0 &&
    timeLeft.hours <= 0 &&
    timeLeft.minutes <= 0 &&
    timeLeft.seconds <= 0;

  return (
    <div
      ref={ref} // Attach the ref to the container
      className={`${styles.hackathonContainer} ${
        isVisible ? styles.animate : ""
      }`} // Add the `animate` class when visible
    >
      {/* Title */}
      <h1 className={isVisible ? styles.animate : ""}>HACK-AI-THON 2024</h1>

      {/* Registration Info */}
      <div
        className={`${styles.registrationInfo} ${
          isVisible ? styles.animate : ""
        }`}
      >
        <span className={styles.calendarIcon}>
          <FaCalendarAlt size={20} color="#CA0C4A" />
        </span>
        <span>LAST DATE TO REGISTER</span>
        <span>Sun 22 Dec 2024</span>
      </div>

      {/* Timer */}
      <div
        className={`${styles.registrationClosed} ${
          isVisible ? styles.animate : ""
        }`}
      >
        <span>REGISTRATION CLOSED IN</span>
        <span className={styles.timer}>
          {!isRegistrationClosed
            ? `${timeLeft.days}d:${timeLeft.hours}h:${timeLeft.minutes}m:${timeLeft.seconds}s`
            : "0d:0h:0m:0s"}
        </span>
      </div>

      {/* Free Registration */}
      <div
        className={`${styles.freeRegistration} ${
          isVisible ? styles.animate : ""
        }`}
      >
        <span>Free</span>
        <FaTag size={20} color="#CA0C4A" />
      </div>

      {/* Registration Button */}
      <button
        className={`${styles.registrationButton} ${
          isVisible ? styles.animate : ""
        }`}
        disabled={isRegistrationClosed}
      >
        {isRegistrationClosed ? "Registration Closed" : "Register Now"}
      </button>

      {/* Participation Info */}
      <div
        className={`${styles.participationInfo} ${
          isVisible ? styles.animate : ""
        }`}
      >
        <h2>Who can Participate?</h2>
        <p>
          This initiative is open to students, professionals, startups, and
          freelance developers.
        </p>
      </div>
    </div>
  );
}

export default Hackathon;
