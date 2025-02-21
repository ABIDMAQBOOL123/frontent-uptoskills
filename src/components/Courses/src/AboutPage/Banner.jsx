import React from "react";
import "./Banner.css"; // Import your CSS here
import Video from "../Images/VideoAI.mp4";
function Banner() {
  return (
    <div className="container">
      <div className="course-info">
        <p>Courses &gt; AI/ML</p>
        {/* <h1>Software Tools<br />AI/ML</h1> */}
        <h3>Software Tools</h3>
        <h1>AI/ML</h1>
        <div className="icons">
          <span>⭐ 4.6</span>
          <span>🕒 17h 14m total length</span>
        </div>
      </div>
      <div className="play-button">
        <video
          width="450"
          height="250"
          src={ Video }
          loop
          autoPlay
          muted
          className="video"
          title="AI/ML Course Video"
        ></video>
      </div>
    </div>
  );
}

export default Banner;
