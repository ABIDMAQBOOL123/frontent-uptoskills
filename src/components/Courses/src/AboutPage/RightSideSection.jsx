import React from "react";
import "./RightSideSection.css";
import {
  FaRegLightbulb,
  FaClipboardList,
  FaAward,
  FaUserTie,
  FaClock,
  FaHandsHelping,
  FaBookOpen,
  FaQuestionCircle,
  FaClipboardCheck,
} from "react-icons/fa";

const RightSideSection = () => {
  const takeaways = [
    { icon: <FaRegLightbulb />, text: "Learn from Industry Leaders" },
    { icon: <FaClipboardList />, text: "Industry Aligned Projects" },
    { icon: <FaAward />, text: "Featured Listing of Resume" },
    { icon: <FaClipboardCheck />, text: "Certification" },
    { icon: <FaUserTie />, text: "Personalised Career Coaching" },
    { icon: <FaClock />, text: "Duration of the Course - 30 hours | 6 weeks" },
    {
      icon: <FaHandsHelping />,
      text: "Practical Hands-On Exercises and Assignments",
    },
    { icon: <FaBookOpen />, text: "Case Study-Based Learning" },
    { icon: <FaQuestionCircle />, text: "Doubt-Clearing Support" },
    { icon: <FaClipboardList />, text: "Unique Industry-Led Content" },
    { icon: <FaAward />, text: "Industry Recognised Certificate" },
  ];

  return (
    <div>
      <div className="right-section">
        <button className="pro-button">Go Pro Now</button>

        <div className="key-takeaways">
          <h3>Key Takeaways</h3>
          <ul>
            {takeaways.map((item, index) => (
              <li key={index}>
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="refer-section">
          <p>
            <strong>Refer Pro</strong> and earn ₹500 for every enrollment!
          </p>
          <button className="refer-button">Refer Now</button>
        </div>
      </div>
    </div>
  );
};

export default RightSideSection;
