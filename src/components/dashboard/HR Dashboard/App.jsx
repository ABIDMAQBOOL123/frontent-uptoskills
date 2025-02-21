import React from "react";
import { Routes, Route } from "react-router-dom";
import HrDashboard from "./components/HrDashboard";
import JobPosts from "./components/JobPosts";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-full">
      <Routes>
        <Route path="/" element={<HrDashboard />} />
        <Route path="/job-posts" element={<JobPosts />} />
        <Route path="/internship-posts" element={<HrDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
