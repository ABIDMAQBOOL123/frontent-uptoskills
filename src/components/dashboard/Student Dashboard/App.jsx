import "./App.css";
import "./index.css";
import { Route, Router, Routes ,BrowserRouter} from "react-router-dom";
import React from "react";
import Render from "./components/Render/Render";
import Vote from "./pages/Vote/Vote";
import Refer from "./pages/Refer/Refer";
import Award from "./pages/Awards/Award";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    
    <Render></Render>

   {/* <Routes>
        <Route path="/refer" element={<Refer />} />
        <Route path="/award" element={<Award />} />
        <Route path="/vote" element={<Vote></Vote>}></Route>
        </Routes>*/}
    </>
  )
}

export default App;
