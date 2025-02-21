import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import "./CourseInfo.css";

const CourseInfo = () => {
  const items = [
    "Helps you to get a deep dive into the Python basics and data structures.",
    "Boost your resume with in-demand skills and advanced tools like pandas, Scikit-learn, Keras, and TensorFlow.",
    "You will gain a clear understanding of Regression, Classification, various Machine Learning algorithms, Neural Networks, and Deep Learning.",
    "Hands-on projects like Real-time face mask detection and much more.",
    "Impress interviewers by showcasing strong technical and practical skills.",
    "Get a rewarding career in ML and AI with essential skills and project experiences.",
  ];

  return (
    <div className="course-info-container">
      <h2 className="course-info-title">About the Course</h2>
      <p className="course-info-description">
        In this course, you will learn from basics to advance of Machine Learning and Artificial Intelligence with
        hands-on experience. At the end, you will be making a bunch of projects which you will be able to add to your
        resume.
      </p>
      <ul className="course-info-list">
        {items.map((item, index) => (
          <li key={index} className="course-info-item">
            <FaRegDotCircle className="course-info-icon" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseInfo;