// import {
// Award,
// BadgeIndianRupee,
// CalendarClock,
// ClockArrowDown,
// Gem,
// GraduationCapIcon,
// LucideBriefcaseBusiness,
// Medal,
// MonitorPlay,
// Trophy,
// UserCircle2,
// UserPlus,
// Vote,
//   ListCheck,
//   Radio,
//   CopyX,
//   SlidersHorizontal,
// } from "lucide-react";
import React from "react";
// import { Link } from "react-router-dom";
import './Registation.css'

const Registation = () => {
  console.log('registration')
  return (
    <div className="peregraph">
      <p >registation</p>
      </div>
    // <div className="flex bg-gray-100">
    //   {/* Sidebar */}
    //   {/* <aside className="w-64 bg-blue-900 text-white">
    //     <div className="p-4 flex gap-3 items-center border-b">
    //       <img
    //         className=" h-12 w-12 ml-2 rounded-full ring-2 ring-white"
    //         src="./images/registation-page.png"
    //         alt="profile-image"
    //       />
    //       <span className="text-lg font-semibold">Kundan Kumar</span>
    //     </div>
    //     <nav className="space-y-2 p-4">
    //       <Link
    //         to="registration"
    //         className=" block hover:bg-blue-600 p-2 rounded"
    //       >
    //         <UserPlus className="inline mr-4" />
    //         Registration
    //       </Link>
    //       <Link to={"/refer"} className="block hover:bg-blue-600 p-2 rounded">
    //         <BadgeIndianRupee className="inline mr-4" />
    //         Refer And Earn
    //       </Link>
    //       <Link to={"/usaward"} className="block hover:bg-blue-600 p-2 rounded">
    //         <Medal className="inline mr-4" />
    //         US Awards
    //       </Link>
    //       <Link to={"/voting"} className="block hover:bg-blue-600 p-2 rounded">
    //         <Vote className="inline mr-4" />
    //         Voting For Award
    //       </Link>
    //       <Link
    //         to={"/compititions"}
    //         className="block hover:bg-blue-600 p-2 rounded"
    //       >
    //         <Trophy className="inline mr-4" />
    //         Compititions
    //       </Link>
    //       <Link to={"/badge"} className="block hover:bg-blue-600 p-2 rounded">
    //         <Gem className="inline mr-4" />
    //         My Badge
    //       </Link>
    //       <Link to={"/jobs"} className="block hover:bg-blue-600 p-2 rounded">
    //         <LucideBriefcaseBusiness className="inline mr-4" />
    //         My Jobs
    //       </Link>
    //       <Link
    //         to={"/internship"}
    //         className="block hover:bg-blue-600 p-2 rounded"
    //       >
    //         <GraduationCapIcon className="inline mr-4" />
    //         My Internships
    //       </Link>
    //       <Link to={"/courses"} className="block hover:bg-blue-600 p-2 rounded">
    //         <MonitorPlay className="inline mr-4" />
    //         Enrolled Courses
    //       </Link>
    //       <Link to={"/events"} className="block hover:bg-blue-600 p-2 rounded">
    //         <CalendarClock className="inline mr-4" />
    //         Upcoming Events
    //       </Link>
    //       <Link
    //         to={"/recently"}
    //         className="block hover:bg-blue-600 p-2 rounded"
    //       >
    //         <ClockArrowDown className="inline mr-4" />
    //         Recently Viewed
    //       </Link>
    //       <Link
    //         to={"/certificates"}
    //         className="block hover:bg-blue-600 p-2 rounded"
    //       >
    //         <Award className="inline mr-4" />
    //         Certificates
    //       </Link>
    //       <Link
    //         to={"/setting"}
    //         className=" block hover:bg-blue-600 p-2 rounded"
    //       >
    //         <UserCircle2 className="inline mr-4" />
    //         Account Setting
    //       </Link>
    //     </nav>
    //   </aside> */}

    //   {/* Main Content */}
    //   <div className="flex-1 flex flex-col ">
    //     <header className="bg-white shadow p-4">
    //       <div className="flex justify-between items-center">
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //           All
    //         </button>
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //           Assessment
    //         </button>
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //           Compititions
    //         </button>
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //           Internship
    //         </button>
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //           Jobs
    //         </button>
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //           Scholarship
    //         </button>
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //           Creative events
    //         </button>
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //           College fest
    //         </button>
    //       </div>
    //       <div className="mt-4 flex justify-between items-center">
    //         <div class="relative flex items-center sm:w-[50%] rounded-full">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
    //               clip-rule="evenodd"
    //             />
    //           </svg>
    //           <input
    //             class="w-full bg-gray-200  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-gray-400 shadow-sm focus:shadow"
    //             placeholder="Search your registration..."
    //           />
    //         </div>
    //         <div class="sm:w-aut flex items-center justify-center bg-gray-200 rounded-full gap-4 ">
    //           <div className="flex items-center pl-2 hover:text-blue-500">
    //             <ListCheck />
    //             <button class="px-4 py-2 rounded-md ">All</button>
    //           </div>
    //           <div className="flex items-center pl-2 hover:text-blue-500">
    //             <Radio />
    //             <button class="px-4 py-2 rounded-md">Live</button>
    //           </div>
    //           <div className="flex items-center pl-2 hover:text-blue-500">
    //             <CopyX />
    //             <button class="px-4 py-2 rounded-md">Closed</button>
    //           </div>
    //         </div>
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //           View
    //           <SlidersHorizontal className="inline ml-2" />
    //         </button>
    //       </div>
    //     </header>

    //     {/* Content Area */}
    //     <main className="flex-1 p-4 overflow-y-auto">
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //         {/* Cards */}
    //         {Array.from({ length: 6 }).map((_, i) => (
    //           <div
    //             key={i}
    //             className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow"
    //           >
    //             <h2 className="text-lg font-semibold">Card {i + 1}</h2>
    //             <p className="text-gray-600">
    //               This is a description for card {i + 1}.
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </main>
    //   </div>
    // </div>
  );
};

export default Registation;
