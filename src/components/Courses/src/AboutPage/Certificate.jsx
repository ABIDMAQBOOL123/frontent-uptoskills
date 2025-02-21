import React from "react";
import "./Certificate.css";
import certificate_course from "../Images/certificate_course.png";
const Certificate = () => {
  return (
    <div className="certificate-wrapper">
      <div className="certificate">
        {/* Left Section with Image */}
        <div className="certificate-left">
          <img src={certificate_course} alt="Certificate" className="certificate-image" />
          
        </div>

        {/* Right Section */}
        <div className="certificate-right">
          <h2>Certification of Completion</h2>
          <p className="description">
            Upgrade your skills and stay current with the industry by completing
            these professional courses, which also provide certification upon
            completion.
          </p>   
        </div>
      </div>
    </div>
  );
};

export default Certificate;
