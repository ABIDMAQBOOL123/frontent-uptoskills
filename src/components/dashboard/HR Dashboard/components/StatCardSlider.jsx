import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/StatCardCarousel.css";

const StatCardSlider = ({ stats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const cards = [
    { title: "JOBS POSTED", value: stats.jobsPosted, bgColor: "bg-violet-200" },
    {
      title: "INTERNSHIP POSTED",
      value: stats.internshipsPosted,
      bgColor: "bg-sky-200",
    },
    {
      title: "CANDIDATES APPLIED",
      value: stats.candidatesApplied,
      bgColor: "bg-amber-100",
    },
    {
      title: "CANDIDATES SELECTED",
      value: stats.candidatesSelected,
      bgColor: "bg-green-100",
    },
    {
      title: "CANDIDATES PENDING",
      value: stats.candidatesPending,
      bgColor: "bg-fuchsia-200",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const StatCard = ({ title, value, bgColor = "bg-white" }) => (
    <motion.div
      className={`${bgColor} rounded-xl shadow-xl 
      w-[260px] h-[140px] sm:w-[160px] sm:h-[120px] 
      p-4 transform transition-all duration-300 
      hover:shadow-2xl border-b-4 border-blue-100 backdrop-blur-sm 
      animate-fadeIn relative overflow-hidden group
      mx-auto sm:mx-2 carousel-item`}
    >
      <div
        className="absolute -right-10 -top-10 w-24 h-24 rounded-full 
        bg-gradient-to-br from-blue-500/30 to-transparent blur-2xl 
        group-hover:scale-150 transition-transform duration-500"
      />
      <div className="flex flex-col h-full justify-between">
        <h2 className="text-gray-900 text-sm sm:text-sm font-medium uppercase tracking-wider text-center">
          {title}
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-2xl sm:text-2xl font-bold text-gray-800">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      className="relative mt-5 
      sm:mx-20 sm:p-4 
      mx-auto px-2 
      bg-white-100 flex-1 overflow-hidden 
      border rounded-lg shadow-xl carousel-container
      max-w-[300px] sm:max-w-none 
      w-[calc(100%-2rem)] sm:w-auto"
    >
      {/* Mobile View */}
      <div className="block sm:hidden">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <StatCard {...cards[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[-5px] top-1/2 -translate-y-1/2 z-10
              w-8 h-8 sm:w-10 sm:h-10 
              flex items-center justify-center
              bg-white rounded-full shadow-lg
              text-gray-600 hover:text-gray-800
              transition-all duration-200"
          >
            <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-5px] top-1/2 -translate-y-1/2 z-10
              w-8 h-8 sm:w-10 sm:h-10 
              flex items-center justify-center
              bg-white rounded-full shadow-lg
              text-gray-600 hover:text-gray-800
              transition-all duration-200"
          >
            <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4 mb-2">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View - Unchanged */}
      <div className="hidden sm:flex carousel-track">
        {cards.map((card, index) => (
          <StatCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default StatCardSlider;
