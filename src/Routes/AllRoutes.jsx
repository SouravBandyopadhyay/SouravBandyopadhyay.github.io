import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Milestones from "../Component/Journey";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/journey" element={<Milestones/>}/>
    </Routes>
  );
};

export default AllRoutes;
