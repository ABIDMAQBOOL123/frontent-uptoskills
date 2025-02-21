import React from "react";
import styles from "./evaluationParameters.module.css";

const EvaluationParameters = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Evaluation Parameters</h2>
      <p className={styles.subheading}>
        Idea Submissions Evaluation Parameters
      </p>
      <div className={styles.parameters}>
        <div className={styles.parameterBox}>
          <h3 className={styles.parameterTitle}>Ideation</h3>
          <ul className={styles.parameterList}>
            <li>How good is the idea</li>
            <li>Alignment with the problem statement</li>
          </ul>
        </div>
        <div className={styles.parameterBox}>
          <h3 className={styles.parameterTitle}>Novelty & Impact</h3>
          <ul className={styles.parameterList}>
            <li>Is the solution novel?</li>
            <li>Impact of the solution</li>
          </ul>
        </div>
        <div className={styles.parameterBox}>
          <h3 className={styles.parameterTitle}>Feasibility</h3>
          <ul className={styles.parameterList}>
            <li>Technical Feasibility</li>
            <li>Business Feasibility</li>
          </ul>
        </div>
        <div className={styles.parameterBox}>
          <h3 className={styles.parameterTitle}>Market Readiness</h3>
          <ul className={styles.parameterList}>
            <li>Market Readiness</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EvaluationParameters;
