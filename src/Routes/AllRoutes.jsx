import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Milestones from "../Component/Journey";
import Project from "../Component/Project";
import Skills from "../components/Skills";
import Extras from "../Component/Extra";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/journey" element={<Milestones />} />
      <Route path="/project" element={<Project />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/extra" element={<Extras />} />
    </Routes>
  );
};

export default AllRoutes;
