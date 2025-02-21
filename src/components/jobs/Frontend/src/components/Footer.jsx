import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
  };

  return (
    <footer className="bg-teal-900 text-white w-full py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 px-4">
        {/* Logo and Contact Info */}
        <div className="space-y-4">
          <div className="w-[240px] h-[58px] mt-4">
            <img className="w-[226px]" src="/logo.png" alt="logo" />
          </div>

          <div className="space-y-2 text-lg">
            <div>
              <span className="text-orange-500">Address:</span> Palam, New
              Delhi,
              <div>Delhi 110077</div>
            </div>
            <div>
              <span className="text-orange-500">Email:</span>{" "}
              <a href="mailto:info@uptoskills.com" className="hover:underline">
                info@uptoskills.com
              </a>
            </div>
            <div>
              <span className="text-orange-500">Phone:</span>{" "}
              <a href="tel:+919319772294" className="hover:underline">
                +91-9319772294
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 relative">
            Links
            <span className="absolute top-8 left-0 w-[50px] h-[4.83px] bg-orange-500 rounded-[5px]"></span>
          </h3>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 relative">
            Services
            <span className="absolute top-8 left-0 w-[50px] h-[4.83px] bg-orange-500 rounded-[5px]"></span>
          </h3>
          <ul className="space-y-2 text-lg">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>

        {/* Courses */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 relative">
            Courses
            <span className="absolute top-8 left-0 w-[50px] h-[4.83px] bg-orange-500 rounded-[5px]"></span>
          </h3>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#" className="hover:underline">
                Data Science Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AI & Machine Learning Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Digital Marketing Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cloud Computing Courses
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media and Email Subscription */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 ">
        <div className="flex space-x-5 flex-wrap justify-center md:justify-start">
          <a
            href="#"
            className="bg-white px-3 py-2 rounded-md hover:bg-orange-500 transition-colors text-orange-500 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="#"
            className="bg-white px-3 py-2 rounded-md hover:bg-orange-500 transition-colors text-orange-500 hover:text-white"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            className="bg-white px-3 py-2 rounded-md hover:bg-orange-500 transition-colors text-orange-500 hover:text-white"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="#"
            className="bg-white px-3 py-2 rounded-md hover:bg-orange-500 transition-colors text-orange-500 hover:text-white"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-5 mt-6 md:mt-0"
        >
          <input
            type="email"
            placeholder="Email"
            className="px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
