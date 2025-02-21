import React, { useEffect, useState, useRef } from "react";
import styles from "./CourseCard.module.css"; // Import CSS Module

const CourseData = () => {
  const [courses, setCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [visibleCards, setVisibleCards] = useState(1); // Default to 1 card for mobile
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const sliderRef = useRef(null);

  // Fetch courses from API
  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "https://upto-skills.onrender.com/api/courses"
      );
      const data = await response.json();
      setCourses(data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Update the number of visible cards based on screen width
  const updateVisibleCards = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCards(5); // Show 5 cards on desktop
    } else if (window.innerWidth >= 768) {
      setVisibleCards(3); // Show 2 cards on tablet
    } else {
      setVisibleCards(1); // Show 1 card on mobile
    }
  };

  // Handle next and previous buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, courses.length - visibleCards)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Swipe functionality for mobile
  const handleTouchStart = (e) => {
    if (window.innerWidth < 768) {
      setTouchStart(e.targetTouches[0].clientX);
      setTouchEnd(null); // Reset touchEnd
    }
  };

  const handleTouchMove = (e) => {
    if (window.innerWidth < 768 && touchStart !== null) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (window.innerWidth < 768 && touchStart !== null && touchEnd !== null) {
      const swipeDistance = touchStart - touchEnd;
      if (swipeDistance > 50) {
        handleNext(); // Swipe left
      } else if (swipeDistance < -50) {
        handlePrev(); // Swipe right
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Drag functionality for desktop
  const handleMouseDown = (e) => {
    if (window.innerWidth >= 768) {
      setIsDragging(true);
      setDragStartX(e.clientX);
      sliderRef.current.style.cursor = "grabbing"; // Change cursor to grabbing
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && window.innerWidth >= 768) {
      const distance = e.clientX - dragStartX;
      setDragDistance(distance);
    }
  };

  const handleMouseUp = () => {
    if (isDragging && window.innerWidth >= 768) {
      setIsDragging(false);
      if (dragDistance > 50) {
        handlePrev(); // Drag left
      } else if (dragDistance < -50) {
        handleNext(); // Drag right
      }
      setDragDistance(0);
      sliderRef.current.style.cursor = "grab"; // Reset cursor to grab
    }
  };

  return (
    <div className={styles.courseContainer}>
      <div className={styles.containerTitle}>
        <h3>Top Courses</h3>
        <h4>Top Most Rated Web Development Courses</h4>
      </div>
      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.arrow} ${styles.leftArrow}`}
          aria-label="Previous Card"
          onClick={handlePrev}
        >
          &#8249;
        </button>
        <div
          className={styles.sliderContainer}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the slider
          style={{ cursor: "grab" }} // Default cursor style
        >
          <div
            className={styles.sliderTrack}
            style={{
              transform: `translateX(${
                (-currentIndex * 100) / visibleCards + dragDistance / 10 // Add drag distance for smooth dragging
              }%)`,
              transition: isDragging ? "none" : "transform 0.5s ease", // Disable transition while dragging
            }}
          >
            {courses.map((course, index) => (
              <div
                className={styles.courseCard}
                key={`${course.id}-${index}`}
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
              >
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${course.image})` }}
                >
                  <div className={styles.studentsBadge}>
                    <img src="/StudentBadge.png" alt="students" />+{" "}
                    {course.students} students
                  </div>
                </div>
                <div className={styles.cardDetails}>
                  <p className={styles.date}>{course.date}</p>
                  <h3 className={styles.title}>{course.title}</h3>
                  <p className={styles.description}>{course.description}</p>
                  <div className={styles.enrollBtnContainer}>
                    <div className={styles.pricing}>
                      <span className={styles.price}>{course.price}</span>
                      <span className={styles.originalPrice}>
                        {course.originalPrice}
                      </span>
                    </div>
                    <button className={styles.enrollBtn}>Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
          aria-label="Next Card"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CourseData;

// import React, { useEffect, useState, useRef } from "react";
// import styles from "./CourseCard.module.css"; // Import CSS Module

// const CourseData = () => {
//   const [courses, setCourses] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(1);
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStartX, setDragStartX] = useState(0);
//   const [dragDistance, setDragDistance] = useState(0);
//   const sliderRef = useRef(null);

//   // Fetch courses from API
//   const fetchCourses = async () => {
//     try {
//       const response = await fetch(
//         "https://upto-skills.onrender.com/api/courses"
//       );
//       const data = await response.json();
//       setCourses(data);
//     } catch (err) {
//       console.error("Failed to fetch courses:", err);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//     updateVisibleCards();
//     window.addEventListener("resize", updateVisibleCards);
//     return () => window.removeEventListener("resize", updateVisibleCards);
//   }, []);

//   const updateVisibleCards = () => {
//     if (window.innerWidth >= 1024) {
//       setVisibleCards(5);
//     } else if (window.innerWidth >= 768) {
//       setVisibleCards(3);
//     } else {
//       setVisibleCards(1);
//     }
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       Math.min(prevIndex + 1, courses.length - visibleCards)
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleMouseDown = (e) => {
//     if (window.innerWidth >= 768) {
//       setIsDragging(true);
//       setDragStartX(e.clientX);
//       sliderRef.current.style.cursor = "grabbing";
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging && window.innerWidth >= 768) {
//       const distance = e.clientX - dragStartX;
//       setDragDistance(distance);
//     }
//   };

//   const handleMouseUp = () => {
//     if (isDragging && window.innerWidth >= 768) {
//       setIsDragging(false);
//       if (dragDistance > 50) {
//         handlePrev();
//       } else if (dragDistance < -50) {
//         handleNext();
//       }
//       setDragDistance(0);
//       sliderRef.current.style.cursor = "grab";
//     }
//   };

//   return (
//     <div className={styles.courseContainer}>
//       <div className={styles.containerTitle}>
//         <h3>Top Courses</h3>
//         <h4>Top Most Rated Web Development Courses</h4>
//       </div>
//       <div className={styles.sliderWrapper}>
//         <button
//           className={`${styles.arrow} ${styles.leftArrow}`}
//           aria-label="Previous Card"
//           onClick={handlePrev}
//         >
//           &#8249;
//         </button>
//         <div
//           className={styles.sliderContainer}
//           ref={sliderRef}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp}
//           style={{ cursor: "grab" }}
//         >
//           <div
//             className={styles.sliderTrack}
//             style={{
//               transform: `translateX(${
//                 (-currentIndex * 100) / visibleCards + dragDistance / 10
//               }%)`,
//               transition: isDragging ? "none" : "transform 0.5s ease",
//             }}
//           >
//             {courses.map((course, index) => (
//               <div
//                 className={styles.courseCard}
//                 key={`${course.id}-${index}`}
//                 style={{ flex: `0 0 ${100 / visibleCards}%` }}
//               >
//                 <div
//                   className={styles.cardImage}
//                   style={{ backgroundImage: `url(${course.image})` }}
//                 >
//                   <div className={styles.studentsBadge}>
//                     <img src="/StudentBadge.png" alt="students" />+{" "}
//                     {course.students} students
//                   </div>
//                 </div>
//                 <div className={styles.cardDetails}>
//                   <p className={styles.date}>{course.date}</p>
//                   <h3 className={styles.title}>{course.title}</h3>
//                   <p className={styles.description}>{course.description}</p>
//                   <div className={styles.enrollBtnContainer}>
//                     <div className={styles.pricing}>
//                       <span className={styles.price}>{course.price}</span>
//                       <span className={styles.originalPrice}>
//                         {course.originalPrice}
//                       </span>
//                     </div>
//                     <button className={styles.enrollBtn}>Enroll Now</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button
//           className={`${styles.arrow} ${styles.rightArrow}`}
//           aria-label="Next Card"
//           onClick={handleNext}
//         >
//           &#8250;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseData;
