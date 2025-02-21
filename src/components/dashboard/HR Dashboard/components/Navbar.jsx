import React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import Logo from "../assets/uptoskills_logo.png"
const Navbar = () => {
  return (
    <div className="h-20 w-full bg-white border-b flex items-center justify-between px-4 sm:px-6 drop-shadow-xl">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src={Logo} 
          alt="UptoSkills" 
          className="h-40"
        />
      </div>

      {/* Right side items */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Support */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-600">
          <HiQuestionMarkCircle className="h-6 w-6 text-gray-500" />
          <span className="hidden sm:block text-gray-700 text-lg">Support</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2">
          <svg 
            className="h-6 w-6 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <img 
            src="https://via.placeholder.com/32" 
            alt="Profile" 
            className="h-10 w-10 rounded-full border-2 border-gray-200"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Navbar; 