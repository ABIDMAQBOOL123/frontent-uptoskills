import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./MenuCard.module.css";
import application from "../images/application.png"
import referandearn from '../images/referandearn.png'
import awards from '../images/award.png'
import vote from  '../images/vote.png'
import competition from  '../images/competition.png'
import journey from  '../images/journey.png'
import internship from  '../images/internship.png'
import course from '../images/course.png'
import job from '../images/job.png'
import event from '../images/events.png'
import recentlyviewed from '../images/recentlyviewed.png'
import setting from '../images/settings.png'
import certificate from '../images/certificate.png'
import Refer from "../pages/Refer/Refer";
import Award from "../pages/Awards/Award";
import Registation from "../pages/Registation/Registation";
import Vote from "../pages/Vote/Vote";
import Competition from "../pages/competiotion/Compition.jsx/Competition";
import Journey from "../pages/Journey/Journey";
import Job from "../pages/Job/Job";
import Internship from "../pages/Internship/Internship";
import Courses from "../pages/Courses/Courses";
import Events from "../pages/Events/Events";
import Recentlyviewed from "../pages/Recentlyviewed/Recentlyviewed";
import Certificate from "../pages/Cerificate/Certificate";
import Setting from "../pages/Setting/Setting";

const MenuCard = ({onSelect}) => {

  return (
    <div className={styles.content}>
      <div className={styles.menuCard}>
        <div className={styles.item}>
          <div onClick={()=>onSelect(<Registation></Registation>)} className={styles.divclass}>
            <img src={application} alt="" />
            <p>My Applications</p>
          </div>
          <div onClick={()=>onSelect(<Refer></Refer>)} className={styles.divclass} >
            <img src={referandearn} alt="" />
            <p>Refer And Earn</p>
          </div>

          <div onClick={()=>onSelect(<Award></Award>)} className={styles.divclass} element={<Award></Award>}>
            <img src={awards} alt="" />
            <p>My Awards</p>
          </div>

          <div onClick={()=>onSelect(<Vote></Vote>)} className={styles.divclass}>
            <img src={vote} alt="" />
            <p>Vote And Nominate</p>
          </div>

          <div onClick={()=>onSelect(<Competition></Competition>)} className={styles.divclass}>
            <img src={competition} alt="" />
            <p>Competitions</p>
          </div>

          <div onClick={()=>onSelect(<Journey></Journey>)} className={styles.divclass}>
            <img src={journey} alt="" />
            <p>My Journey</p>
          </div>

          <div onClick={()=>onSelect(<Job></Job>)} to="/jobs" className={styles.divclass}>
            <img src={job} alt="" />
            <p>My Jobs</p>
          </div>

          <div onClick={()=>onSelect(<Internship></Internship>)} className={styles.divclass}>
            <img src={internship} alt="" />
            <p>My Internships</p>
          </div>

          <div onClick={()=>onSelect(<Courses></Courses>)} className={styles.divclass}>
            <img src={course} alt="" />
            <p>Enrolled Courses</p>
          </div>

          <div onClick={()=>onSelect(<Events></Events>)} className={styles.divclass}>
            <img src={event} alt="" />
            <p>Upcoming Events</p>
          </div>

          <div onClick={()=>onSelect(<Recentlyviewed></Recentlyviewed>)} className={styles.divclass}>
            <img src={recentlyviewed} alt="" />
            <p>Recently Viewed</p>
          </div>

          <div onClick={()=>onSelect(<Certificate></Certificate>)}
            style={{ borderBottom: "2px solid rgb(216, 214, 214)" }}
            className={styles.divclass}
          >
            <img src={certificate} alt="" />
            <p>Certificates </p> ,
          </div>

          <div onClick={()=>onSelect(<Setting></Setting>)} className={styles.divclass}>
            <img src={setting} alt="" />
            <p>Account Setting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
