import React from "react";
import "./Jobs-Content.css"; // Importing the corresponding CSS file

const JobsContent = () => {
  return (
    <div className="jobs-content">
      <div className="section1">
        <div className="learn-section">
          <h3 className="section-title">
            Learn
            <hr />
          </h3>
          <ul className="section-list">
            <li>
              <a href="#" className="section-link">
                Blog
              </a>
              <p className="section-description">
                Up-to-date insights on conversational hiring.
              </p>
            </li>
            <li>
              <a href="#" className="section-link">
                Client Stories
              </a>
              <p className="section-description">
                Innovative organizations with innovation solutions.
              </p>
            </li>
            <li>
              <a href="#" className="section-link">
                Resource Center
              </a>
              <p className="section-description">
                Visionary content for every industry.
              </p>
            </li>
            <li>
              <a href="#" className="section-link">
                FAQ
              </a>
              <p className="section-description">What's on your mind?</p>
            </li>
          </ul>
        </div>
        <div className="learn-section">
          <h3 className="section-title">
            Contact
            <hr />
          </h3>
          <ul className="section-list">
            <li>
              <a href="#" className="section-link">
                Upcomming events
              </a>
              <p className="section-description">
                Up-to-date insights on conversational hiring.
              </p>
            </li>
            <li>
              <a href="#" className="section-link">
                Contact US
              </a>
              <p className="section-description">
                Innovative organizations with innovation solutions.
              </p>
            </li>
            <li>
              <a href="#" className="section-link">
                Help Center
              </a>
              <p className="section-description">
                Visionary content for every industry.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="section2">
        <div className="featured-reads-section">
          <h3 className="section-title">
            Featured Reads
            <hr />
          </h3>
          <div className="reads-item">
            <img
              src="Accelerated-global-hiring.png"
              alt="Accelerated global hiring"
              className="reads-image"
            />
            <div>
              <p className="reads-title">Accelerated global hiring.</p>
              <a href="#" className="reads-link">
                Read the report
              </a>
            </div>
          </div>
          <div className="reads-item">
            <img
              src="The ROI of AI.png"
              alt="The ROI of AI"
              className="reads-image"
            />
            <div>
              <p className="reads-title">The ROI of AI</p>
              <a href="#" className="reads-link">
                Read the e-book
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsContent;
