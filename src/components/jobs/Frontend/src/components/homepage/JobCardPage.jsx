import React, { useState } from "react";
import JobCard from "./JobCard"; // Assuming JobCard is in the same directory
import styles from "../../styles/homepage/JobCardPage.module.css"; // Import the CSS module
import logo1 from "../../../public/logo1.png";
import logo2 from "../../../public/logo2.png";
import logo3 from "../../../public/logo3.png";
import logo4 from "../../../public/logo4.png";

const JobCardPage = ({ filters }) => {
  const { qualification, subQualification } = filters;

  // Sample job data
  const jobs = [
    {
      company: "Tech Corp",
      timing: "Full-time",
      position: "Software Engineer",
      location: "Delhi, India",
      employmentType: "Full-time",
      description:
        "Work on cutting-edge technologies and build scalable applications.",
      skills: ["JavaScript", "React", "Node.js"],
      qualification: "Graduate",
      specialization: "B.Tech - Computer Science",
      salary: "$100,000",
      companyLogo: logo1,
    },
    {
      company: "Design Studio",
      timing: "Full-time",
      position: "UI/UX Designer",
      location: "Hyderabad, India",
      employmentType: "Contract",
      description:
        "Design intuitive and user-friendly interfaces for web and mobile applications.",
      skills: ["Figma", "Sketch", "Adobe XD"],
      qualification: "Diploma",
      specialization: "Diploma - Computer Science",
      salary: "$80,000",
      companyLogo: logo2,
    },
    {
      company: "Data Solutions",
      timing: "Full-time",
      position: "Data Scientist",
      location: "Bangalore, India",
      employmentType: "Full-time",
      description: "Analyze large datasets and build predictive models.",
      skills: ["Python", "Machine Learning", "SQL"],
      qualification: "Post Graduate",
      specialization: "B.Tech - Computer Science",
      salary: "$120,000",
      companyLogo: logo3,
    },
    {
      company: "Marketing Agency",
      timing: "Full-time",
      position: "Digital Marketing Specialist",
      location: "Noida, India",
      employmentType: "Full-time",
      description:
        "Develop and implement digital marketing strategies to drive growth.",
      skills: ["SEO", "Google Analytics", "Social Media Marketing"],
      qualification: "Post Graduate",
      specialization: "B.Tech - Computer Science",
      salary: "$70,000",
      companyLogo: logo4,
    },
    {
      company: "Marketing Agency",
      timing: "Full-time",
      position: "Digital Marketing Specialist",
      location: "Noida, India",
      employmentType: "Full-time",
      description:
        "Develop and implement digital marketing strategies to drive growth.",
      skills: ["SEO", "Google Analytics", "Social Media Marketing"],
      qualification: "Post Graduate",
      specialization: "B.Tech - Computer Science",
      salary: "$70,000",
      companyLogo: logo4,
    },
    {
      company: "Marketing Agency",
      timing: "Full-time",
      position: "Digital Marketing Specialist",
      location: "Noida, India",
      employmentType: "Full-time",
      description:
        "Develop and implement digital marketing strategies to drive growth.",
      skills: ["SEO", "Google Analytics", "Social Media Marketing"],
      qualification: "Post Graduate",
      specialization: "B.Tech - Computer Science",
      salary: "$70,000",
      companyLogo: logo4,
    },
    {
      company: "Marketing Agency",
      timing: "Full-time",
      position: "Digital Marketing Specialist",
      location: "Noida, India",
      employmentType: "Full-time",
      description:
        "Develop and implement digital marketing strategies to drive growth.",
      skills: ["SEO", "Google Analytics", "Social Media Marketing"],
      qualification: "Post Graduate",
      specialization: "B.Tech - Computer Science",
      salary: "$70,000",
      companyLogo: logo4,
    },
    {
      company: "Marketing Agency",
      timing: "Full-time",
      position: "Digital Marketing Specialist",
      location: "Noida, India",
      employmentType: "Full-time",
      description:
        "Develop and implement digital marketing strategies to drive growth.",
      skills: ["SEO", "Google Analytics", "Social Media Marketing"],
      qualification: "Post Graduate",
      specialization: "B.Tech - Computer Science",
      salary: "$70,000",
      companyLogo: logo4,
    },
    {
      company: "Marketing Agency",
      timing: "Full-time",
      position: "Digital Marketing Specialist",
      location: "Noida, India",
      employmentType: "Full-time",
      description:
        "Develop and implement digital marketing strategies to drive growth.",
      skills: ["SEO", "Google Analytics", "Social Media Marketing"],
      qualification: "Post Graduate",
      specialization: "B.Tech - Computer Science",
      salary: "$70,000",
      companyLogo: logo4,
    },
    {
      company: "Marketing Agency",
      timing: "Full-time",
      position: "Digital Marketing Specialist",
      location: "Noida, India",
      employmentType: "Full-time",
      description:
        "Develop and implement digital marketing strategies to drive growth.",
      skills: ["SEO", "Google Analytics", "Social Media Marketing"],
      qualification: "Post Graduate",
      specialization: "B.Tech - Computer Science",
      salary: "$70,000",
      companyLogo: logo4,
    },
    // Add more jobs as needed
  ];

  // State to manage the number of visible rows
  const [visibleRows, setVisibleRows] = useState(1); // Initially show 1 row (4 jobs)

  // Filter jobs based on qualification and sub-qualification
  const filteredJobs = jobs.filter((job) => {
    const qualificationMatch =
      !qualification || job.qualification === qualification;
    const subQualificationMatch =
      !subQualification || job.specialization === subQualification;
    return qualificationMatch && subQualificationMatch;
  });

  // Determine which jobs to display
  const jobsToDisplay = filteredJobs.length > 0 ? filteredJobs : jobs;
  const jobsToShow = jobsToDisplay.slice(0, visibleRows * 4); // Show jobs based on visible rows

  // Split jobs into rows of 4
  const rows = [];
  for (let i = 0; i < jobsToShow.length; i += 4) {
    rows.push(jobsToShow.slice(i, i + 4));
  }

  // Function to show more rows
  const handleShowMore = () => {
    setVisibleRows((prev) => prev + 1); // Add one more row
  };

  // Function to show fewer rows
  const handleShowLess = () => {
    setVisibleRows((prev) => Math.max(1, prev - 1)); // Remove one row (minimum 1 row)
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Latest Featured Jobs</h1>
        <h3 className={styles.subtitle}>
          Find the Jobs/Internships that fits your career aspiration
        </h3>
      </div>

      {/* Job Cards Grid */}
      <div className={styles.grid}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.gridRow}>
            {row.map((job, index) => (
              <div key={index} className={styles.gridItem}>
                <JobCard
                  company={job.company}
                  timing={job.timing}
                  position={job.position}
                  location={job.location}
                  employmentType={job.employmentType}
                  description={job.description}
                  skills={job.skills}
                  salary={job.salary}
                  companyLogo={job.companyLogo}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Show More/Show Less Buttons */}
      <div className={styles.buttonContainer}>
        <button
          onClick={handleShowMore}
          className={styles.showMoreButton}
          disabled={visibleRows >= Math.ceil(jobsToDisplay.length / 4)} // Disable if all rows are shown
        >
          Show More
        </button>
        <button
          onClick={handleShowLess}
          className={styles.showLessButton}
          disabled={visibleRows === 1} // Disable if only one row is shown
        >
          Show Less
        </button>
      </div>
    </div>
  );
};

export default JobCardPage;
