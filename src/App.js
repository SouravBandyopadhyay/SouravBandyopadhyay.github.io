import "./App.css";
import { Link } from "react-scroll";
import About from "./components/About.jsx";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <header className="nav">
        <div>
          <Link activeClass="active" smooth spy to="home">
            Sourav Bandyopadhyay
          </Link>
        </div>
        <div>
          <nav className="nav__container__actions">
            <ul>
              <li>
                <Link activeClass="active" smooth spy to="about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="skills">
                  SKILLS
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="projects">
                  PROJECTS
                </Link>
              </li>

              <li>
                <Link activeClass="active" smooth spy to="contact">
                  CONTACT ME
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="home">
        <Home />
      </section>
      <hr />
      <section id="about">
        <About />
      </section>
      <hr />
      <section id="skills">
        <Skills />
      </section>
      <hr />
      <section id="projects">
        <Project />
      </section>
      <hr />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
