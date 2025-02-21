// src/Review.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import user from "../Images/user.png";
import "./Reviews.css";

const reviews = [
  { name: "RITESH CHAUHAN", comment: "good", profilePic: "https://via.placeholder.com/40/007bff/ffffff?text=RC" },
  { name: "NAMAN SHARMA", comment: "good", profilePic: "https://via.placeholder.com/40/ff6347/ffffff?text=NS" },
  { name: "ANKITA SINGH", comment: "excellent", profilePic: "https://via.placeholder.com/40/4caf50/ffffff?text=AS" },
  { name: "RAHUL GUPTA", comment: "very good", profilePic: "https://via.placeholder.com/40/9c27b0/ffffff?text=RG" },
  { name: "PRIYA KUMAR", comment: "nice experience", profilePic: "https://via.placeholder.com/40/f44336/ffffff?text=PK" },
  { name: "VIJAY MEHTA", comment: "satisfactory", profilePic: "https://via.placeholder.com/40/3f51b5/ffffff?text=VM" },
  { name: "ANJALI VERMA", comment: "awesome", profilePic: "https://via.placeholder.com/40/ff9800/ffffff?text=AV" },
];

const Review = () => {
  const [visible, setVisible] = useState(2); // Initially show 2 reviews

  const handleViewMore = () => {
    setVisible(reviews.length); // Show all reviews
  };

  return (
    <div className="review-container">
      <h2>Reviews ({reviews.length})</h2>
      {reviews.slice(0, visible).map((review, index) => (
        <div key={index} className="review-item">
          <img src={user} alt={review.name} className="profile-pic" />
          <div className="review-content">
            <div className="stars">
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
            </div>
            <p className="name">{review.name}</p>
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
      {visible < reviews.length && (
        <button className="view-more" onClick={handleViewMore}>
          View more
        </button>
      )}
    </div>
  );
};

export default Review;