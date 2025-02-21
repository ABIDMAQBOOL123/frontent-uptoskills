import React from "react";
import { useNavigate } from "react-router-dom";

function Discove_Conent() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="learn-section">
      <h3 className="section-title">
        Discover
        <hr />
      </h3>
      <ul className="section-list">
        <li>
          <a
            href="#"
            className="section-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/about-us");
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="section-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/degree-programs");
            }}
          >
            Degree Programs
          </a>
        </li>
        <li>
          <a
            href="#"
            className="section-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/courses");
            }}
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="#"
            className="section-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/become-a-trainer");
            }}
          >
            Become a Trainer
          </a>
        </li>
        <li>
          <a
            href="/blogs"
            className="section-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/blogs");
            }}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="section-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/faqs");
            }}
          >
            FAQ`s
          </a>
        </li>
        <li>
          <a
            href="#"
            className="section-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/contacts");
            }}
          >
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Discove_Conent;
