import React from "react";
import styles from "./Explore.module.css"; // Import CSS Module
import img1 from "../../assets/Image/exp2.png";
import img2 from "../../assets/Image/exp3.png";
import img3 from "../../assets/Image/exp4.png";
import img4 from "../../assets/Image/exp5.png";

const Explore = () => {
  const freetrainingData = [
    {
      icon: img1,
      title: "Free Training",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",
      float: "left",
    },
    {},
    {},
    {
      icon: img2,
      title: "Team Formation",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",
      float: "right",
    },
    {
      icon: img3,
      title: "Idea Submissions",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",
      float: "left",
    },
    {},
    {},
    {
      icon: img4,
      title: "Idea Submissions",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",
      float: "right",
    },
    {
      icon: img3,
      title: "Idea Submissions",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",
      float: "left",
    },
    {},
  ];

  return (
    <>
      <div className={styles.boxContainer}>
        <div className={`${styles.blurredSpot} ${styles.spot1}`}></div>
        <div className={`${styles.blurredSpot} ${styles.spot2}`}></div>
        <div className={styles.imageContainer}>
          <h1>Explore Our Ecosystem</h1>
          <p>
            A one-stop destination for all your learning to placement needs.
          </p>
          <img src="SVG.png" alt="" />
        </div>

        <div className={styles.gridContainer1}>
          {freetrainingData.map((item, index) => {
            if (!item.icon) {
              return <div key={index} className={styles.emptyCell}></div>;
            }
            return (
              <div
                className={`${styles.item2} ${
                  index % 2 === 0 ? styles.right : styles.left
                }`}
                key={index}
              >
                <div className={styles.subitem2_1}>
                  <img src={item.icon} width={"40px"} alt="icon" />
                </div>
                <div className={styles.subitem2_2}>
                  <h2>{item.headings}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Explore;
