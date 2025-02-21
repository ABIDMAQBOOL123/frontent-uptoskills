import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import JobFlowPage from "./Pages/JobFlowPage";
import JobDetailPage from "./Pages/JobDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobflow" element={<JobFlowPage />} />
        <Route path="/:id" element={<JobDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
