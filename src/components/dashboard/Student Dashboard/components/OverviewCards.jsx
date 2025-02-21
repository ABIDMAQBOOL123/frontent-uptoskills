import React from "react";
import Home from "../pages/Home/Home";
import Refer from "../pages/Refer/Refer";
import Award from "../pages/Awards/Award";
import Registation from "../pages/Registation/Registation";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Vote from "../pages/Vote/Vote";
import Navbar from "./Navbar/Navbar";
import MenuCard from "./MenuCard";

/*const OverviewCards = ({ selectedOption }) => {
  const renderComponent = () => {
    switch (selectedOption) {
      case "/":
        return <Home />;
      case "refer":
        return <Refer />;
      case "award":
        return <Award />;
      case "registation":
        return <Registation />;
      default:
        return null;
    }
  };
  return <>{renderComponent()}</>;
};*/

const OverviewCards = () => {
  return (
    <Routes>
      <Route exact={true} path="dashboard/" element={<Home />} />
      <Route path="refer" element={<Refer />} />
      <Route path="dashboard/award" element={<Award />} />
      <Route path="dashboard/register" element={<Registation />} />
      <Route path="dashboard/vote" element={<Vote></Vote>}></Route>
    </Routes>
  );
};

export default OverviewCards;
