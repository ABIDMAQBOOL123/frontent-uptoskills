import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import "../styles/HrDashboard.css";
import CompanyLogo from "../assets/company_logo.png";
import JobCard from "./JobCard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import StatCardSlider from "./StatCardSlider";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const HrDashboard = () => {
  const [stats, setStats] = useState({
    jobsPosted: 0,
    internshipsPosted: 0,
    candidatesApplied: 0,
    candidatesSelected: 0,
    candidatesPending: 0,
  });

  useEffect(() => {
    // Function to fetch stats from backend
    const fetchStats = async () => {
      try {
        const response = await fetch("BACKEND_API_URL/stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="h-20 bg-white-300 px-4 sm:px-6 w-full">
            <div className="h-full flex flex-col sm:flex-row items-center sm:items-center justify-between bg-white-100 w-full">
              <div className="hidden sm:block sm:flex-1"></div>

              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex items-center  sm:gap-5">
                  <img
                    src={CompanyLogo}
                    alt="company logo"
                    className="h-7 mt-3 object-cover sm:h-12 sm:w-12"
                  />
                  <h1 className="text-lg ml-2 sm:text-xl font-semibold">
                    Company Name
                  </h1>
                </div>
              </div>

              <div className="w-full sm:w-auto mt-2 sm:mt-0 sm:flex-1 flex justify-center sm:justify-end">
                <button
                  className="p-1 sm:px-6 sm:py-2.5 bg-gray-500 text-white text-sm sm:text-base rounded-lg 
                  hover:bg-[#ff6d34]
                  transition-all duration-300 ease-in-out
                  hover:scale-110 hover:shadow-lg 
                  active:scale-95 cursor-pointer
                  flex items-center gap-1 sm:gap-2"
                >
                  <MoreVertIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  Post Job
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <StatCardSlider stats={stats} />

          {/* Job Cards */}
          <div className="mt-3">
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrDashboard;
