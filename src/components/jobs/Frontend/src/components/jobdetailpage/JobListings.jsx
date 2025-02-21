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
import styles from "../../styles/jobdetailpage/joblistings.module.css";

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
    <div className={`${styles.hideScrollbar} mx-24 my-7 py-4`}>
      <div className="flex gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl p-7 shadow-sm w-[748px] h-[297px] border"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-[72px] h-[72px] rounded-lg"
                />
                <div className="ml-2 w-[553.53px] h-[185px]">
                  <h3 className="text-gray-900 font-normal text-lg text-#141414">
                    {job.company}
                  </h3>
                  <h2 className="text-2xl gap-2 text-orange-500 font-medium">
                    {job.position}
                  </h2>

                  <div className="flex items-center gap-2 text-[rgba(20,20,20,.7)] text-base font-normal mt-2">
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
                  <p className="text-gray-600 mt-4 text-[16px] font-normal">
                    {job.description}
                  </p>
                </div>
              </div>

              <button className="text-black hover:text-gray-600">
                <IoBookmarkOutline size={24} />
              </button>
            </div>

            <div className="flex justify-between mt-3">
              <div className="flex gap-2 items-center justify-center pl-[95px]">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="py-[16px] px-[20px] bg-gray-100 rounded-[12px] text-sm text-#5B5B5B"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-end">
                <button className="text-indigo-600 text-sm hover:text-indigo-700 bg-indigo-50 rounded py-0.5 px-1.5">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
