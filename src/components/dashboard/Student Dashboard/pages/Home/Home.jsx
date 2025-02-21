import React, { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import styles from "./Home.module.css";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";
import github from "../../images/github.png";
import twitter from "../../images/twitter.png";
import reddit from "../../images/reddit.png";
import figma from "../../images/figma.png";
import about from "../../images/aboutsec.jpeg";
import avatar from "../../images/man-avatar.png";
import about1 from "../../images/home-about.png";
import resume from "../../images/home-resume.png";
import work from "../../images/home-work.png";
import education from "../../images/home-education.png";
import responsible from "../../images/home-responsible.png";
import certificate from "../../images/home-certificate.png";
import project from "../../images/home-project.png";
import achievements from "../../images/home-achievements.png";

const Home = () => {
  const [editingSection, setEditingSection] = useState(null);
  const [textInputs, setTextInputs] = useState({});
  const [labels, setLabels] = useState({});

  const handleTextClick = (sectionId) => {
    setEditingSection(sectionId);
  };

  const handleInputChange = (event, sectionId) => {
    setTextInputs({
      ...textInputs,
      [sectionId]: event.target.value,
    });
  };

  const handleKeyDown = (event, sectionId) => {
    if (event.key === "Enter") {
      const newLabel = textInputs[sectionId]?.trim();
      if (newLabel) {
        const updatedLabels = {
          ...labels,
          [sectionId]: [...(labels[sectionId] || []), newLabel],
        };
        setLabels(updatedLabels);
        localStorage.setItem("labels", JSON.stringify(updatedLabels));
        setTextInputs({ ...textInputs, [sectionId]: "" });
        setEditingSection(null);
      }
    }
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.upperContainer}>
        <div className={styles.photo}>
          <img src={avatar} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            <h2>Ramdas Sakpal</h2>
            <h5>Profile Last Update - 31 jan 2025</h5>
          </div>
          <div className={styles.location}>
            <div className={styles.part1}>
              <li>Maharastra , India</li>
              <li>Fresher</li>
              <li>Add Avalibilty to join</li>
            </div>
            <div className={styles.part2}>
              <li>123456789</li>
              <li>ramdas@gmail.com</li>
            </div>
          </div>
        </div>
        <div className={styles.verify}>
          <div className={styles.question}>
            <h1>Complete Your Profile</h1>
            <h2>What is your current skills??</h2>
            <p>Add your current skills here</p>
            <div className={styles.dropdownContainer}>
              <Dropdown />
            </div>
            <button className={styles.add}>ADD</button>
            <button className={styles.next}>NEXT</button>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <div className={styles.content}>
            <div className={styles.textInputs}>
              <h3>About</h3>
              <p>
                Craft an engaging story in your bio and make meaningful
                connections with peers and recruiters alike!
              </p>
              <h5 onClick={() => handleTextClick("about")}>Add About</h5>
              {editingSection === "about" && (
                <input
                  type="text"
                  value={textInputs["about"] || ""}
                  onChange={(e) => handleInputChange(e, "about")}
                  onKeyDown={(e) => handleKeyDown(e, "about")}
                  autoFocus
                />
              )}
              {labels["about"]?.map((label, index) => (
                <p key={index} className={styles.label}>
                  {label}
                </p>
              ))}
            </div>
            <div className={styles.image}>
              <img src={about1} alt="" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textInputs}>
              <h3>Resume</h3>
              <p>
                Craft an engaging story in your bio and make meaningful
                connections with peers and recruiters alike!
              </p>
              <h5 onClick={() => handleTextClick("Resume")}>Add Resume</h5>
              {editingSection === "Resume" && (
                <input
                  type="text"
                  value={textInputs["Resume"] || ""}
                  onChange={(e) => handleInputChange(e, "Resume")}
                  onKeyDown={(e) => handleKeyDown(e, "Resume")}
                  autoFocus
                />
              )}
              {labels["about"]?.map((label, index) => (
                <p key={index} className={styles.label}>
                  {label}
                </p>
              ))}
            </div>
            <div className={styles.image}>
              <img src={resume} alt="" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textInputs}>
              <h3>Skills</h3>
              <p>
                Craft an engaging story in your bio and make meaningful
                connections with peers and recruiters alike!
              </p>
              <h5 onClick={() => handleTextClick("Skills")}>Add Skills</h5>
              {editingSection === "Skills" && (
                <input
                  type="text"
                  value={textInputs["Skills"] || ""}
                  onChange={(e) => handleInputChange(e, "Skills")}
                  onKeyDown={(e) => handleKeyDown(e, "Skills")}
                  autoFocus
                />
              )}
              {labels["Skills"]?.map((label, index) => (
                <p key={index} className={styles.label}>
                  {label}
                </p>
              ))}
            </div>
            <div className={styles.image}>
              <img src={about1} alt="" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textInputs}>
              <h3>Work Experience</h3>
              <p>
                Craft an engaging story in your bio and make meaningful
                connections with peers and recruiters alike!
              </p>
              <h5 onClick={() => handleTextClick("Work Experience")}>
                Add Work Experience
              </h5>
              {editingSection === "Work Experience" && (
                <input
                  type="text"
                  value={textInputs["Work Experience"] || ""}
                  onChange={(e) => handleInputChange(e, "Work Experience")}
                  onKeyDown={(e) => handleKeyDown(e, "Work Experience")}
                  autoFocus
                />
              )}
              {labels["Work Experience"]?.map((label, index) => (
                <p key={index} className={styles.label}>
                  {label}
                </p>
              ))}
            </div>
            <div className={styles.image}>
              <img src={work} alt="" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textInputs}>
              <h3>Education</h3>
              <p>
                Craft an engaging story in your bio and make meaningful
                connections with peers and recruiters alike!
              </p>
              <h5 onClick={() => handleTextClick("Education")}>
                Add Education
              </h5>
              {editingSection === "Education" && (
                <input
                  type="text"
                  value={textInputs["Education"] || ""}
                  onChange={(e) => handleInputChange(e, "Education")}
                  onKeyDown={(e) => handleKeyDown(e, "Education")}
                  autoFocus
                />
              )}
              {labels["Education"]?.map((label, index) => (
                <p key={index} className={styles.label}>
                  {label}
                </p>
              ))}
            </div>
            <div className={styles.image}>
              <img src={education} alt="" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textInputs}>
              <h3>Responsibilities</h3>
              <p>
                Craft an engaging story in your bio and make meaningful
                connections with peers and recruiters alike!
              </p>
              <h5 onClick={() => handleTextClick("about")}>
                Add Responsibilities
              </h5>
              {editingSection === "Responsibilities" && (
                <input
                  type="text"
                  value={textInputs["Responsibilities"] || ""}
                  onChange={(e) => handleInputChange(e, "Responsibilities")}
                  onKeyDown={(e) => handleKeyDown(e, "Responsibilities")}
                  autoFocus
                />
              )}
              {labels["Responsibilities"]?.map((label, index) => (
                <p key={index} className={styles.label}>
                  {label}
                </p>
              ))}
            </div>
            <div className={styles.image}>
              <img src={responsible} alt="" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textInputs}>
              <h3>Certificates</h3>
              <p>
                Craft an engaging story in your bio and make meaningful
                connections with peers and recruiters alike!
              </p>
              <h5 onClick={() => handleTextClick("Certificates")}>
                Add Certificates
              </h5>
              {editingSection === "Certificates" && (
                <input
                  type="text"
                  value={textInputs["Certificates"] || ""}
                  onChange={(e) => handleInputChange(e, "Certificates")}
                  onKeyDown={(e) => handleKeyDown(e, "Certificates")}
                  autoFocus
                />
              )}
              {labels["Certificates"]?.map((label, index) => (
                <p key={index} className={styles.label}>
                  {label}
                </p>
              ))}
            </div>
            <div className={styles.image}>
              <img src={certificate} alt="" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textInputs}>
              <h3>Projects</h3>
              <p>
                Craft an engaging story in your bio and make meaningful
                connections with peers and recruiters alike!
              </p>
              <h5 onClick={() => handleTextClick("Projects")}>Add Projects</h5>
              {editingSection === "Projects" && (
                <input
                  type="text"
                  value={textInputs["Projects"] || ""}
                  onChange={(e) => handleInputChange(e, "Projects")}
                  onKeyDown={(e) => handleKeyDown(e, "Projects")}
                  autoFocus
                />
              )}
              {labels["Projects"]?.map((label, index) => (
                <p key={index} className={styles.label}>
                  {label}
                </p>
              ))}
            </div>
            <div className={styles.image}>
              <img src={project} alt="" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textInputs}>
              <h3>Achivements</h3>
              <p>
                Craft an engaging story in your bio and make meaningful
                connections with peers and recruiters alike!
              </p>
              <h5 onClick={() => handleTextClick("Achivements")}>
                Add Achivements
              </h5>
              {editingSection === "Achivements" && (
                <input
                  type="Achivements"
                  value={textInputs["Achivements"] || ""}
                  onChange={(e) => handleInputChange(e, "Achivements")}
                  onKeyDown={(e) => handleKeyDown(e, "Achivements")}
                  autoFocus
                />
              )}
              {labels["Achivements"]?.map((label, index) => (
                <p key={index} className={styles.label}>
                  {label}
                </p>
              ))}
            </div>
            <div className={styles.image}>
              <img src={achievements} alt="" />
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.text}>
              <h3>Social Media</h3>
              <div className={styles.links}>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={github} alt="" />
                <img src={linkedin} alt="" />
                <img src={figma} alt="" />
                <img src={reddit} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
          <button className={styles.btn}>Upload Resume</button>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.card2}>
            <h3>Profile Language</h3>
            <p>English</p>
            <br />
            <h3>Public profile and URL</h3>
            <h5>www.linkedin.com</h5>
          </div>
          <div className={styles.card3}>
            <p>Ramdas , Restart your free Permium trial today!</p>
            <img src={avatar} alt="" />
            <p>Uncover new opportunities with premium</p>
            <button>Restart Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
