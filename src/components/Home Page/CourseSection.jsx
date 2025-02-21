import React, { useEffect, useRef } from "react";
import styles from "./CourseSection.module.css"; // Import CSS Module
import mainImage from "../../assets/Image/img1.png";
import imagelogo2 from "../../assets/Image/img2.png";
import imagelogo3 from "../../assets/Image/img3.png";
import imagelogo4 from "../../assets/Image/img4.png";

const CourseSection = () => {
  // Create refs for the elements to animate
  const courseSectionContentRef = useRef(null);
  const courseSectionImageRef = useRef(null);

  useEffect(() => {
    // Function to handle intersection observer logic
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate); // Add the animate class
        }
      });
    };

    // Set up the Intersection Observer
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe the refs if they exist
    if (courseSectionContentRef.current) {
      observer.observe(courseSectionContentRef.current);
    }
    if (courseSectionImageRef.current) {
      observer.observe(courseSectionImageRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (courseSectionContentRef.current) {
        observer.unobserve(courseSectionContentRef.current);
      }
      if (courseSectionImageRef.current) {
        observer.unobserve(courseSectionImageRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.courseSection}>
      {/* Add ref to the content div */}
      <div
        ref={courseSectionContentRef}
        className={styles.courseSectionContent}
      >
        <p className={styles.courseSectionTag}>Never stop learning</p>
        <h1 className={styles.courseSectionTitle}>
          Grow up your skills by online courses with Onlearning
        </h1>
        <button className={styles.courseSectionButton}>VIEW COURSES</button>
        <div className={styles.courseSectionReview}>
          <div className={styles.courseSectionReviewImages}>
            <img
              src={imagelogo2}
              alt="Profile 1"
              className={styles.profileImage}
            />
            <img
              src={imagelogo3}
              alt="Profile 2"
              className={styles.profileImage}
            />
            <img
              src={imagelogo4}
              alt="Profile 3"
              className={styles.profileImage}
            />
          </div>
          <p className={styles.courseSectionReviewText}>(10k+ Reviews)</p>
        </div>
      </div>

      {/* Add ref to the image div */}
      <div ref={courseSectionImageRef} className={styles.courseSectionImage}>
        <img src={mainImage} alt="Hero Image" />
      </div>
    </section>
  );
};

export default CourseSection;

// import React, { useEffect, useRef } from "react";
// import mainImage from "../../assets/Image/img1.png";
// import imagelogo2 from "../../assets/Image/img2.png";
// import imagelogo3 from "../../assets/Image/img3.png";
// import imagelogo4 from "../../assets/Image/img4.png";

// const CourseSection = () => {
//   const courseSectionContentRef = useRef(null);
//   const courseSectionImageRef = useRef(null);

//   useEffect(() => {
//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate-fadeInLeft");
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5,
//     });

//     if (courseSectionContentRef.current) {
//       observer.observe(courseSectionContentRef.current);
//     }
//     if (courseSectionImageRef.current) {
//       observer.observe(courseSectionImageRef.current);
//     }

//     return () => {
//       if (courseSectionContentRef.current) {
//         observer.unobserve(courseSectionContentRef.current);
//       }
//       if (courseSectionImageRef.current) {
//         observer.unobserve(courseSectionImageRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section className="flex flex-row items-center justify-between p-12 bg-teal-100 rounded-lg shadow-lg gap-5 overflow-hidden lg:flex-row md:flex-col md:p-8 sm:p-6">
//       {/* Left Content Section */}
//       <div
//         ref={courseSectionContentRef}
//         className="w-1/2 md:w-full text-left md:text-center"
//       >
//         <p className="text-gray-700 text-sm uppercase tracking-wider font-semibold mb-2">
//           Never stop learning
//         </p>
//         <h1 className="text-gray-900 text-4xl font-bold leading-snug mb-6 md:text-3xl sm:text-2xl">
//           Grow up your skills by online courses with Onlearning
//         </h1>
//         <button className="px-6 py-3 bg-orange-500 text-white font-bold uppercase tracking-wider rounded-md shadow-md hover:bg-orange-600 transform transition-all hover:translate-y-[-2px]">
//           VIEW COURSES
//         </button>
//         <div className="flex items-center mt-6 justify-start md:justify-center">
//           <div className="flex gap-3 mr-4">
//             <img
//               src={imagelogo2}
//               alt="Profile 1"
//               className="w-12 h-12 rounded-full border-2 border-white shadow-md hover:scale-105 transition-all"
//             />
//             <img
//               src={imagelogo3}
//               alt="Profile 2"
//               className="w-12 h-12 rounded-full border-2 border-white shadow-md hover:scale-105 transition-all"
//             />
//             <img
//               src={imagelogo4}
//               alt="Profile 3"
//               className="w-12 h-12 rounded-full border-2 border-white shadow-md hover:scale-105 transition-all"
//             />
//           </div>
//           <p className="text-gray-800 text-base font-medium">(10k+ Reviews)</p>
//         </div>
//       </div>

//       {/* Right Image Section */}
//       <div ref={courseSectionImageRef} className="w-1/2 md:w-4/5 sm:w-full">
//         <img
//           src={mainImage}
//           alt="Hero Image"
//           className="w-full h-auto rounded-lg shadow-lg animate-fadeInRight"
//         />
//       </div>
//     </section>
//   );
// };

// export default CourseSection;
