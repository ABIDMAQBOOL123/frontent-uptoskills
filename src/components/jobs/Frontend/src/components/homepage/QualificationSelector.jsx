import React, { useMemo } from "react";
import styles from "../../styles/homepage/QualificationSelector.module.css";

const QualificationSelector = ({
  qualification,
  stream,
  qualifications,
  onQualificationChange,
  onStreamChange,
}) => {
  // Memoized streams based on the selected qualification
  const streams = useMemo(
    () => ({
      ITI: ["Electrician", "Fitter", "Welder"],
      Diploma: ["Mechanical", "Civil", "Electrical"],
      Graduate: ["B.Tech", "B.Sc", "B.Com", "B.A"],
    }),
    []
  );

  return (
    <div className={styles.qualificationSelector}>
      <h3>Select Qualification</h3>
      <div className={styles.sliderContainer}>
        {/* Slider input for selecting qualification */}
        <input
          type="range"
          min="0"
          max={qualifications.length - 1}
          value={qualifications.indexOf(qualification)}
          onChange={onQualificationChange}
          className={styles.slider}
          aria-label="Select qualification level"
        />
        {/* Labels for the slider */}
        <div className={styles.sliderLabels}>
          {qualifications.map((q, index) => (
            <span
              key={index}
              className={`${styles.sliderLabel} ${
                qualification === q ? styles.sliderLabelActive : ""
              }`}
              style={{
                left: `calc(${
                  (index / (qualifications.length - 1)) * 95
                }% + 12px)`, // Adjust for thumb's center
              }}
            >
              {q}
            </span>
          ))}
        </div>
      </div>
      {/* Dropdown for selecting stream if applicable */}
      {["ITI", "Diploma", "Graduate"].includes(qualification) && (
        <div className={styles.dropdown}>
          <label htmlFor="stream-select" className={styles.label}>
            Select Stream:
          </label>
          <select
            id="stream-select"
            value={stream}
            onChange={(e) => onStreamChange(e.target.value)}
            aria-label="Select stream"
            className={styles.select}
          >
            <option value="">--Select Stream--</option>
            {streams[qualification].map((s, index) => (
              <option key={index} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default QualificationSelector;
