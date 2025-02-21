import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State for the selected value

  // Array of options
  const options = [
    "Full Stack Devloper",
    "Android Devloper",
    "Machine Learning",
    "Cyber security",
    "Cloud Computing",
  ];

  // Handle the selection change
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && (
        <p className="selected">
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
};

export default Dropdown;
