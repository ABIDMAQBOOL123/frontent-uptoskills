import { useState } from "react";
import "./AboutMain.css";
import CourseInfo from "./CourseInfo";
import CareerGrowth from "./CareerGrowth";
import CourseContent from "./CourseContent";
import Certificate from "./Certificate";
import Reviews from "./Reviews";
import Banner from "./Banner";
import RightSideSection from "./RightSideSection";

function AboutMain() {
  return (
    <>
      <div className="hero">
        <div className="side-char">
          <Banner />
          <div className="parent-container">
            <div className="main-content">
              <CourseInfo />
              <CareerGrowth />
              <CourseContent />
              <Certificate />
              <Reviews />
            </div>
            <div className="right-container">
              <RightSideSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMain;
