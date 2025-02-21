import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const JobCard = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy data for development
  const dummyData = [
    {
      id: 0,
      type: "",
      status: "",
      companyName: "",
      eligibility: "",
      place: "",
      salary: "",
      postedOn: "",
      jobType: "",
      candidatesApplied: 0,
    },
  ];

  // Use dummy data directly for now
  useEffect(() => {
    setJobPosts(dummyData);
    setLoading(false);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 sm:py-4">
      {jobPosts.map((job) => (
        <div
          key={job.id}
          className="border rounded-lg shadow-md p-1.5 sm:p-6 lg:p-8 bg-white mb-1.5 sm:mb-4"
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-0.5 sm:gap-4">
            <div className="flex flex-col sm:flex-row w-full gap-0.5 sm:gap-0">
              <div className="w-full text-[13px] sm:text-2xl sm:w-1/4 bg-white p-0 text-black font-bold relative inline-flex items-center">
                Apprentice
                <sup className="ml-0.5 text-[8px] sm:text-xs text-red-800 bg-red-200 px-1 sm:px-2 py-0.5 rounded-full">
                  Expired
                </sup>
              </div>
              <div className="flex justify-between items-center w-full sm:block">
                <div className="text-[13px] sm:text-2xl sm:ml-32 sm:w-1/4 bg-white p-0 text-black-500 font-bold">
                  Company Name
                </div>
                <IconButton
                  size="small"
                  className="text-gray-500 p-0.5 block sm:!hidden"
                >
                  <MoreVertIcon className="w-3.5 h-3.5" />
                </IconButton>
              </div>
            </div>
            {/* Desktop Menu Icon */}
            <IconButton
              size="small"
              className="!hidden sm:!block text-gray-500 absolute right-8"
              style={{ marginTop: "2px" }}
            >
              <MoreVertIcon className="w-6 h-6" />
            </IconButton>
          </div>

          {/* Middle Section */}
          <div className="mt-0.5 sm:mt-6 flex flex-col gap-0.5 sm:gap-6">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex flex-col gap-0.5 sm:gap-5">
                {/* First Row */}
                <div className="flex flex-row justify-between sm:gap-20 items-center">
                  <p className="text-[10px] sm:text-base text-gray-500 flex items-center">
                    <span className="mr-0.5 sm:mr-2">•</span> Eligibility{" "}
                    {job.eligibility}
                  </p>
                  <p className="text-[10px] sm:text-base text-gray-500 flex items-center">
                    <span className="mr-0.5 sm:mr-2 sm:ml-32">•</span> Salary{" "}
                    {job.salary}
                  </p>
                  <p className="text-[10px] sm:text-base text-gray-500 flex items-center">
                    <span className="mr-0.5 sm:mr-2 sm:ml-32">•</span> Job Type{" "}
                    {job.jobType}
                  </p>
                  <button className="bg-blue-100 text-blue-500 text-[9px] sm:text-base font-bold px-1.5 sm:px-4 py-0.5 sm:py-2 rounded-full hover:bg-blue-200 transition-colors w-auto sm:hidden">
                    View
                  </button>
                </div>

                <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-20"></div>

                {/* Second Row */}
                <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-20">
                  <p className="text-[10px] sm:text-base text-gray-500 flex items-center">
                    <span className="mr-0.5 sm:mr-2">•</span> Place {job.place}
                  </p>
                  <p className="text-[10px] sm:text-base text-gray-500 flex items-center">
                    <span className="mr-0.5 sm:mr-2 sm:ml-40">•</span> Posted on
                  </p>
                </div>
              </div>

              {/* Candidates Info - Desktop only */}
              <div className="hidden sm:flex sm:flex-col sm:items-end mt-0">
                <div className="text-green-500 font-bold whitespace-nowrap sm:mr-7">
                  {job.candidatesApplied} Candidates Applied
                </div>
                <button className="hidden sm:block bg-blue-100 text-blue-500 font-bold px-4 py-2 rounded-full hover:bg-blue-200 transition-colors w-full sm:w-auto mt-2">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-0.5 sm:mt-6 p-1 sm:p-4 bg-blue-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-0.5 sm:gap-4 rounded-lg">
            <div className="flex items-center gap-0.5 sm:gap-2">
              <svg
                className="w-3 h-3 sm:w-5 sm:h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <p className="text-[10px] sm:text-base text-gray-500">
                Repost now to receive new candidates
              </p>
            </div>
            <button className="bg-white border border-gray-300 text-[10px] sm:text-base text-gray-500 px-1.5 sm:px-4 py-0.5 sm:py-2 rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto">
              Repost now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
