import React, { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { FiLock } from "react-icons/fi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import "./CourseContent.css";

const CourseContent = () => {
    const sections = [
        {
            title: "Introduction to ML",
            description:
                "In this module you will get to know about the introduction to ML, mechanism of ML and the real world applications of machine learning.",
            lessonsCount: 9,
            lessons: [
                { name: "Introductory Video", type: "video", preview: true },
                { name: "1.1 What is ML?", type: "video", preview: true },
                { name: "1.2 Steps in ML", type: "video", preview: false },
                { name: "1.3 Its applications - Autonomous Driving", type: "video", preview: false },
                { name: "1.4 Its applications - Image Recognition", type: "video", preview: false },
                { name: "1.5 Its applications - Alpha-go", type: "video", preview: false },
                { name: "1.6 Its applications - Hyperlocal Food Delivery", type: "video", preview: false },
                { name: "1.7 Its applications - Advertising", type: "video", preview: false },
            ],
        },
        {
            title: "Advance python libraries",
            description:
                "In this module we will learn about the most useful libraries of python which to learn for ML and AI which are numpy, pandas, seaborn, and matplotlib.",
            lessonsCount: 14,
            lessons: [
                { name: "2.0 Datasets + Files (For below Topics)", type: "file", preview: false },
                { name: "2.1 Intro to lists", type: "video", preview: false },
                { name: "2.2 Intro to lists Part 2", type: "video", preview: false },
                { name: "2.3 Solution to previous problem + importing Libraries", type: "video", preview: false },
                { name: "2.4 Intro to Numpy", type: "video", preview: false },
                { name: "2.5 Intro to Numpy Part 2", type: "video", preview: false },
                { name: "2.6 Intro to Numpy Part 3", type: "video", preview: false },
                { name: "2.7 Intro to Pandas", type: "video", preview: false },
                { name: "2.8 Intro to Pandas Part 2", type: "video", preview: false },
                { name: "2.9 Intro to Pandas Part 3", type: "video", preview: false },
                { name: "2.10 Intro to Pandas Part 4", type: "video", preview: false },
                { name: "2.11 Plotting Graphs via MatplotLib Part 1", type: "video", preview: false },
                { name: "2.12 Plotting Graphs via MatplotLib 2", type: "video", preview: false },
                { name: "2.13 Plotting Graphs via MatplotLib 3", type: "video", preview: false },
            ],
        },
        {
            title: "Data Pre-processing",
            description:
                "In this module we will learn about dealing with numerical and categorical data, handling missing values and working with the data.",
            lessonsCount: 8,
            lessons: [
                { name: "2.14 Data Preprocessing - Intro", type: "video", preview: false },
                { name: "2.15 Data PreProcessing - Importing Libraries", type: "video", preview: false },
                { name: "2.16 Data PreProcessing - importing dataset", type: "video", preview: false },
                { name: "2.17 Data PreProcessing - Handling Missing Data", type: "video", preview: false },
                { name: "2.18 Data Preprocessing - Encoding Categorical Data", type: "video", preview: false },
                { name: "2.19 Data Preprocessing - Encoding Categorical Data Part - 2", type: "video", preview: false },
                { name: "2.20 Data Preprocessing - Splitting into test set and training set", type: "video", preview: false },
                { name: "2.21 Data Preprocessing Feature Scaling", type: "video", preview: false },
            ],
        },
        {
            title: "Regression",
            description:
                "In this module we will learn about the different types of regression techniques in machine learning with their hands-on experience.",
            lessonsCount: 27,
            lessons: [
                { name: "3.0 Datasets + Files (For below Topics)", type: "file", preview: false },
                { name: "3.1 Intro to Simple Linear Regression part - 1", type: "video", preview: false },
                { name: "3.3 Simple Linear Regression Implementation Part 1", type: "video", preview: false },
                { name: "3.4 Simple Linear Regression Implementation Part 2", type: "video", preview: false },
                { name: "3.5 Multiple Linear Regression Introduction Part 1", type: "video", preview: false },
                { name: "3.6 Multiple Linear Regression Introduction Part 2", type: "video", preview: false },
                { name: "3.7 Multiple Linear Regression Introduction Part 3 (Dummy Variable Trap)", type: "video", preview: false },
                { name: "3.8 Multiple Linear Regression Implementation Part 1", type: "video", preview: false },
                { name: "3.9 Multiple Linear Regression Implementation Part 2", type: "video", preview: false },
                { name: "3.10 Polynomial Regression Intro", type: "video", preview: false },
                { name: "3.11 Polynomial Regression Implementation Part 1", type: "video", preview: false },
                { name: "3.12 Polynomial Regression Implementation Part 2", type: "video", preview: false },
                { name: "3.13 Polynomial Regression Implementation part 3", type: "video", preview: false },
                { name: "3.14 Support Vector Regression Intro", type: "video", preview: false },
                { name: "3.15 Non Linear Support Vector Regression", type: "video", preview: false },
                { name: "3.16 Support Vector regression Implementation Part 1", type: "video", preview: false },
                { name: "3.17 Support Vector regression Implementation Part 2", type: "video", preview: false },
                { name: "3.17.1 Support Vector Implementation part 2.1", type: "video", preview: false },
                { name: "3.18 Decision tree Regression intro part 1", type: "video", preview: false },
                { name: "3.19 Decision tree regression intro part 2", type: "video", preview: false },
                { name: "3.20 Decision Tree Regression Implementation", type: "video", preview: false },
                { name: "3.21 R Squared Introduction", type: "video", preview: false },
                { name: "3.22 Random forest Regression intro", type: "video", preview: false },
                { name: "3.23 Random forest regression implementation part 1", type: "video", preview: false },
                { name: "3.24 Model Selection for Regression Implementation", type: "video", preview: false },
                { name: "3.25 Regression Model Selection Master Project", type: "video", preview: false },
            ],
        },
        // Additional sections here...
    ];

    const [expandedSections, setExpandedSections] = useState([1]); // Default expanded section is "Advance python libraries"
    const [showMore, setShowMore] = useState(false); // Manage "Show More" state

    const toggleSection = (index) => {
        if (expandedSections.includes(index)) {
            setExpandedSections(expandedSections.filter((i) => i !== index));
        } else {
            setExpandedSections([...expandedSections, index]);
        }
    };

    const visibleSections = showMore ? sections : sections.slice(0, 4); // Show first 4 sections by default

    return (
        <div className="course-content">
            <h1 className="title">Course Content</h1>
            <p className="subtitle">13 Sections</p>
            {visibleSections.map((section, index) => (
                <div key={index} className="section">
                    <div
                        className="section-header"
                        onClick={() => toggleSection(index)}
                    >
                        <div className="header-left">
                            <span
                                className="arrow"
                                style={{
                                    transform: expandedSections.includes(index)
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                <CgChevronDown />
                            </span>
                            <h3 className="section-title">{section.title}</h3>
                        </div>
                        <div className="header-right">
                            <p className="lesson-count">{section.lessonsCount} Lessons</p>
                        </div>
                    </div>
                    <p className="section-description">{section.description}</p>
                    {expandedSections.includes(index) && section.lessons && (
                        <div className="lessons">
                            {section.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="lesson">
                                    <span className="lesson-icon">
                                        {lesson.type === "video" ? (
                                            <AiOutlinePlayCircle />
                                        ) : (
                                            <CiViewList />
                                        )}
                                    </span>
                                    <span className="lesson-title">{lesson.name}</span>
                                    <span className="lesson-status">
                                        {lesson.preview ? (
                                            <a href="#" className="lesson-preview">
                                                Preview
                                            </a>
                                        ) : (
                                            <FiLock className="lesson-locked" />
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div className="show-more" onClick={() => setShowMore(!showMore)}>
                <span>
                    {showMore ? "Show less sections" : "9 more sections"}
                </span>
                <CgChevronDown
                    style={{
                        transform: showMore ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                    }}
                />
            </div>
        </div>
    );
};

export default CourseContent;
