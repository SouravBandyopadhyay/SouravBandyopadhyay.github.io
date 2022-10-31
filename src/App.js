import { Divider } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Nav from "./Nav";
export default function App() {
  return (
    <div className="App">
      <div className="nav">
        <Nav />
      </div>
      <Home />
      <Divider my={7} />
      <section id="about">
        <About />
      </section>
      <Divider my={7} />
      <section id="tech">
        <Skills />
      </section>
      <Divider my={7} />
      <section id="projects">
        <Project />
      </section>
      <Divider my={7} />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
