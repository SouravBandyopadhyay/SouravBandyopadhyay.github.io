import { Spinner } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../components/Home"));
const Contact = lazy(() => import("../components/Contact"));
const Milestones = lazy(() => import("../Component/Journey"));
const Project = lazy(() => import("../Component/Project"));
const Skills = lazy(() => import("../components/Skills"));
const Extras = lazy(() => import("../Component/Extra"));

const AllRoutes = () => {
  return (
    <Suspense
      fallback={
        <Spinner
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="2xl"
        />
      }
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journey" element={<Milestones />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/extra" element={<Extras />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
