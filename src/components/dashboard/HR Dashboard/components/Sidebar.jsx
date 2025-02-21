import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBriefcase,
  FaFileAlt,
  FaTasks,
  FaDatabase,
  FaUsers,
  FaCreditCard,
  FaMoneyBillAlt,
  FaAddressBook,
  FaCartPlus,
  FaTimes,
  FaBars
} from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { name: "Jobs Posts", path: "/job-posts", icon: <FaBriefcase /> },
    { name: "Internship\n Post", path: "/internship-posts", icon: <FaFileAlt /> },
    { name: "Events", path: "/assessment", icon: <FaTasks /> },
    { name: "Database", path: "/database", icon: <FaDatabase /> },
    { name: "Campus\nCollaboration", path: "/campus-collaboration", icon: <FaUsers /> },
    { name: "Credits &\n Usage", path: "/credit-usage", icon: <FaCreditCard /> },
    { name: "Billing", path: "/billing", icon: <FaMoneyBillAlt /> },
    { name: "Contacts", path: "/contacts", icon: <FaAddressBook /> },
    { name: "Buy\nCredits", path: "/buy-credits", icon: <FaCartPlus /> },
  ];

  // Mobile menu trigger
  const MobileMenuTrigger = () => (
    <div className="lg:hidden  left-4 top-20 z-50">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-[#ff6d34] text-white p-2 rounded-full shadow-lg hover:bg-[#ff6d34] transition-colors"
      >
        <FaBars className="h-5 w-5" />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
              onClick={() => {
                setIsDropdownOpen(false);
                onClose?.();
              }}
            >
              <span className="text-[#ff743a]">{item.icon}</span>
              <span className="text-sm">{item.name.replace('\n', ' ')}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Menu Trigger with Dropdown */}
      <MobileMenuTrigger />

      {/* Mobile Overlay */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40 lg:hidden"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div className={`
        hidden lg:block
        bg-white w-8 xl:w-28 transition-all duration-300 ease-in-out 
        border-r shadow-lg overflow-y-auto
      `}>
        <ul className="flex flex-col items-center space-y-2 mt-7 pb-5">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <Link
                to={item.path}
                className="flex flex-col items-center px-1 py-2 text-gray-600 hover:text-[#ff743a] hover:bg-gray-50"
              >
                <div className="flex flex-col items-center">
                  <div className="text-lg mb-1">{item.icon}</div>
                  <span className="text-[10px] whitespace-pre-line hidden xl:block text-center">
                    {item.name}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;