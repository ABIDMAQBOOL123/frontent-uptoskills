import React, { useState } from "react";
import HeroSection from "../components/homepage/HeroSection";
import Navbar from "../../../../common/NavigationBar";
import Footer from "../../../../common/Footer";
import Cities from "../components/homepage/Cities";
import HiringSteps from "../components/homepage/HiringSteps";
import JobCardPage from "../components/homepage/JobCardPage";
import Rating from "../components/homepage/Rating";
import FAQPage from "../components/homepage/FAQPage";
import FeaturedCompanies from "../components/homepage/FeaturedCompanies";
import QualificationSelector from "../components/homepage/QualificationSelector";

const HomePage = () => {
  // State to manage the selected qualification and stream
  const [qualification, setQualification] = useState("10th");
  const [stream, setStream] = useState("");

  // List of available qualifications
  const qualifications = ["10th", "12th", "ITI", "Diploma", "Graduate"];

  // Handler for qualification change
  const handleQualificationChange = (e) => {
    const index = parseInt(e.target.value, 10);
    setQualification(qualifications[index]);
    setStream("");
  };

  // Handler for stream change
  const handleStreamChange = (selectedStream) => {
    setStream(selectedStream);
  };

  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Pass the state and handlers as props to QualificationSelector */}
      <QualificationSelector
        qualification={qualification}
        stream={stream}
        qualifications={qualifications}
        onQualificationChange={handleQualificationChange}
        onStreamChange={handleStreamChange}
      />

      {/* Pass the selected qualification and stream as filters to JobCardPage */}
      <JobCardPage filters={{ qualification, stream }} />

      <Cities />
      <FeaturedCompanies />
      <HiringSteps />
      <FAQPage />
      <Rating />
      <Footer />
    </>
  );
};

export default HomePage;
