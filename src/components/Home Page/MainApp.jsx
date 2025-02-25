// import React, { Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import Footer from "../common/Footer";
// import ExploreJobs from "./Explore-Jobs";
// import StatisticsSection from "./StatisticsSection";
// import CourseCard from "./CourseCard";
// import CourseSection from "./CourseSection";
// import FreeTraining from "./FreeTraining";
// import Hero from "./Hero";
// import NavigationBar from "../common/NavigationBar";
// import Partners from "./Partners";
// import Explore from "./Explore";
// import ForgotPassword from "./ForgetPassword";

// // Lazy-loaded components
// const Login = lazy(() => import("./Login"));
// const Register = lazy(() => import("./Register"));

// function MainApp() {
//   return (
//     <>
//       <NavigationBar />
//       <Suspense
//         fallback={
//           <div>
//             <img src="/Animation - 1736152825520" alt="loading animation" />
//           </div>
//         }
//       >
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//         </Routes>
//       </Suspense>

//       <Partners />
//       <FreeTraining />
//       <Explore />
//       <CourseCard />
//       <CourseSection />
//       <StatisticsSection />
//       <ExploreJobs />
//       <Footer />
//     </>
//   );
// }

// export default MainApp;

import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../common/Footer";
import ExploreJobs from "./Explore-Jobs";
import StatisticsSection from "./StatisticsSection";
import CourseCard from "./CourseCard";
import CourseSection from "./CourseSection";
import FreeTraining from "./FreeTraining";
import Hero from "./Hero";
import NavigationBar from "../common/NavigationBar";
import Partners from "./Partners";
import Explore from "./Explore";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgetPassword"; // Make sure the file name matches!
// import LinkedInCallback from "./LinkedInCallback";

// Lazy-loaded components
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));

function MainApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password/" element={<ForgotPassword />} />
        {/* <Route path="/reset-password/:resetToken" element={<ResetPassword />} /> */}
        {/* <Route path="/auth/linkedin/callback" element={<LinkedInCallback />} /> */}
      </Routes>
      <Partners />
      <FreeTraining />
      <Explore />
      <CourseCard />
      <CourseSection />
      <StatisticsSection />
      <ExploreJobs />
      <Footer />
    </Suspense>
  );
}

export default MainApp;
