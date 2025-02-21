//component for displaying a single FAQ question and its answer.

import React, { useState } from "react";
import styles from "../../styles/homepage/FAQPage.module.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["faq-item"]}>
      <div
        className={styles["faq-question"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={styles["faq-icon"]}>{isOpen ? "↑" : "↓"}</span>
      </div>
      {isOpen && <div className={styles["faq-answer"]}>{answer}</div>}
    </div>
  );
};

export default FAQItem;
