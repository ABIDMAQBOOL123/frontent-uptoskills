import React from "react";
import FAQItem from "./FAQItem";
import styles from "../../styles/homepage/FAQPage.module.css";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is UX design?",
      answer:
        "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
    },
    {
      question: "What are the key principles of UX design?",
      answer:
        "The key principles include user-centered design, consistency, accessibility, and usability.",
    },
    {
      question: "What is the difference between UX and UI design?",
      answer:
        "UX focuses on the overall experience, while UI deals with the visual design and interface of a product.",
    },
    {
      question: "What is a wireframe?",
      answer:
        "A wireframe is a simple visual guide that represents the skeletal framework of a website or app.",
    },
    {
      question: "What is user testing?",
      answer:
        "User testing involves evaluating a product by testing it with real users to ensure its usability and satisfaction.",
    },
  ];

  return (
    <div className={styles["faq-container"]}>
      <h1 className={styles["faq-title"]}>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQPage;
