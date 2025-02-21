import MenuCard from "../MenuCard";
import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
//import OverviewCards from "../OverviewCards";
import Home from "../../pages/Home/Home";

const Render = () => {
  const [selectedComponent, setSelectedcomponent] = useState(<Home></Home>);

  const handleSelect = (option) => {
    setSelectedcomponent(option);
  };
  return (
    <>
      {/*<div>
        {/*<MenuCard onSelect={handleSidebarSelect} />
        <MenuCard></MenuCard>
        <div>
          <Navbar />
          {/*
          <div className="Overview">
            {/*<OverviewCards selectedOption={selectedOption} />
            <OverviewCards></OverviewCards>
          </div>
          
            <OverviewCards></OverviewCards>
        </div>
      </div>*/}
      <div className='menu' style={{ display: "flex", height: "100vh" }}>
      <div className="menucard" style={{ width: "250px", borderRight: "1px solid #ddd" ,marginTop:0}}>
        <MenuCard onSelect={handleSelect} />
      </div>

      <div className="nav" style={{ flex: 1,margin:0,padding:0}}>
        <Navbar />
        <div className="component" style={{ marginTop: "20px" }}>{selectedComponent}</div>
      </div>
    </div>
    </>
  );
};

export default Render;
