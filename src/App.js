import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Nav from "./Nav";
import Extra from "./components/Extra";

const sectionData = [
  { id: "home", component: <Home /> },
  { id: "about", component: <About /> },
  { id: "tech", component: <Skills /> },
  { id: "projects", component: <Project /> },
  { id: "extra", component: <Extra /> },
  { id: "contact", component: <Contact /> },
];

export default function App() {
  return (
    <div className="App">
      <div className="nav">
        <Nav />
      </div>
      {sectionData.map(({ id, component }) => (
        <React.Fragment key={id}>
          <section id={id}>{component}</section>
        </React.Fragment>
      ))}
    </div>
  );
}
