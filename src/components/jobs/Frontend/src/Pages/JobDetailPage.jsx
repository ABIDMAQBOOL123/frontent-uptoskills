import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../../common/NavigationBar";
import Footer from "../../../../common/Footer";
import AboutCompany from "../components/jobdetailpage/AboutCompany";
import AboutJob from "../components/jobdetailpage/AboutJob";
import JobDetails from "../components/jobdetailpage/JobDetails";
import JobListings from "../components/jobdetailpage/JobListings";
import logo1 from "../../public/logo1.png";

const JobDetailPage = () => {
  const { id } = useParams();
  const jobData = {
    id: 1,
    companyLogo: logo1,
    companyName: "Tech Solutions",
    location: "Indore",
    jobType: "Full-Time",
    experienceLevel: "Junior: 1 to 3 years",
    salaryRange: "20K - 25K",
    postedDate: "Feb 06, 2024",
    qualification: "Graduate",
    websiteLink: "https://www.techsolutions.com",
    skills: ["UI/UX", "Mobile Design", "Web Design"],
    responsibilities: [
      "Gather and evaluate user requirements in collaboration with product managers and engineers.",
      "Illustrate design ideas using storyboards, process flows, and sitemaps.",
      "Design graphic user interface elements like menus, tabs, and widgets.",
      "Build page navigation buttons and search fields.",
      "Develop UI mockups and prototypes that clearly illustrate how sites function and look like.",
      "Create original graphic designs (e.g., images, sketches, and tables).",
      "Prepare and present rough drafts to internal teams and key stakeholders.",
      "Identify and troubleshoot UX problems (e.g., responsiveness).",
      "Conduct layout adjustments based on user feedback.",
      "Adhere to style standards on fonts, colors, and images.",
    ],
    requirements: [
      "Proven work experience as a UI/UX Designer or similar role.",
      "Portfolio of design projects.",
      "Knowledge of wireframe tools (e.g., Wireframe.cc and InVision).",
      "Up-to-date knowledge of design software like Adobe Illustrator and Photoshop.",
      "Team spirit; strong communication skills to collaborate with various stakeholders.",
      "Good time-management skills.",
      "BSc in Design, Computer Science, or relevant field.",
    ],
    other: ["English Level - High", "Preference - Male Candidate"],
    buttonText: "Apply Now",
  };

  const handleApplyClick = () => {
    console.log("Apply button clicked!");
  };

  const companyData = {
    companyName: "TCS",
    foundedYear: 1968,
    description:
      "an IT services and consulting company that offers services such as cloud computing, information security, and network connectivity. TCS is part of the Tata Group, India's largest conglomerate. As of 2024, TCS is the largest IT company in India by market capitalization.",
    industry: "Information Service",
    companySize: "50-70 Employees",
    location: "Indore",
    websiteLink: "https://www.tcs.com",
  };

  return (
    <>
      <Navbar />

      <JobDetails {...jobData} onApplyClick={handleApplyClick} />

      <AboutJob job={jobData} />

      <AboutCompany {...companyData} />

      <JobListings />

      <Footer />
    </>
  );
};

export default JobDetailPage;
