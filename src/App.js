import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Nav from "./Nav";
export default function App() {
  return (
    <div className="App">
      <div className="nav">
        <Nav />
      </div>
      {/* <Home /> */}
      <Home2 />
      <br />
      <section id="about">
        <About />
      </section>
      <br />
      <section id="tech">
        <Skills />
      </section>
      <br />
      <section id="projects">
        <Project />
      </section>
      <br />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
