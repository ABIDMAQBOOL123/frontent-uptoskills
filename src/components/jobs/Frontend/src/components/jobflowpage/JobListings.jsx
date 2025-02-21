import React from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import logo1 from "../../../public/logo1.png";
import logo2 from "../../../public/logo2.png";
import logo3 from "../../../public/logo3.png";
import logo4 from "../../../public/logo4.png";
import styles from "../../styles/jobflowpage/JobListings.module.css";

const JobListings = () => {
  const jobs = [
    {
      id: 1,
      company: "Linear company",
      position: "Software Engineer",
      location: "Indore",
      type: "Full time",
      salary: "5-7 Lacs PA",
      postedAgo: "29 min ago",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
      skills: ["Data Base", "Java Script", "HTML CSS", "JAVA"],
      logo: logo1,
    },
    {
      id: 2,
      company: "Linear company",
      position: "Software Engineer",
      location: "Indore",
      type: "Full time",
      salary: "5-7 Lacs PA",
      postedAgo: "29 min ago",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
      skills: ["Data Base", "Java Script", "HTML CSS", "JAVA"],
      logo: logo2,
    },
    {
      id: 3,
      company: "Linear company",
      position: "Software Engineer",
      location: "Indore",
      type: "Full time",
      salary: "5-7 Lacs PA",
      postedAgo: "29 min ago",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
      skills: ["Data Base", "Java Script", "HTML CSS", "JAVA"],
      logo: logo3,
    },
    {
      id: 4,
      company: "Linear company",
      position: "Software Engineer",
      location: "Indore",
      type: "Full time",
      salary: "5-7 Lacs PA",
      postedAgo: "29 min ago",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
      skills: ["Data Base", "Java Script", "HTML CSS", "JAVA"],
      logo: logo4,
    },
    {
      id: 5,
      company: "Linear company",
      position: "Software Engineer",
      location: "Indore",
      type: "Full time",
      salary: "5-7 Lacs PA",
      postedAgo: "29 min ago",
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.",
      skills: ["Data Base", "Java Script", "HTML CSS", "JAVA"],
      logo: logo1,
    },
  ];

  return (
    <div className={styles.container}>
      {jobs.map((job) => (
        <div key={job.id} className={styles.jobCard}>
          <div className={styles.jobHeader}>
            <div className={styles.jobDetails}>
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className={styles.jobLogo}
              />
              <div>
                <h3 className={styles.companyName}>{job.company}</h3>
                <h2 className={styles.positionTitle}>{job.position}</h2>
                <div className={styles.jobMeta}>
                  <span>
                    <SlLocationPin />
                  </span>
                  {job.location}
                  <span className="ml-4 text-xs">•</span>
                  <span>
                    <CiClock2 />
                  </span>
                  {job.type}
                  <span className="ml-4 text-xs">•</span>
                  <span>
                    <LiaRupeeSignSolid />
                  </span>
                  {job.salary}
                  <span className="ml-4 text-xs">•</span>
                  <span>
                    <CiCalendar />
                  </span>
                  {job.postedAgo}
                </div>
                <p className={styles.jobDescription}>{job.description}</p>
              </div>
            </div>
            <button className={styles.bookmarkButton}>
              <IoBookmarkOutline size={24} />
            </button>
          </div>
          <div className={styles.skillsContainer}>
            {job.skills.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
          <div className={styles.viewDetailsButtonContainer}>
            <button className={styles.viewDetailsButton}>View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
