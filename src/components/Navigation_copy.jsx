// import React from "react";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import "../comp_styles/nav2.css";
// const Navigation = () => {
//   return (
//     <div>
//       <nav>
//         <input type="checkbox" id="check" />
//         <label for="check" class="checkbtn">
//           <FaBars id="checkbtn" />
//         </label>
//         <label class="logo"> PORTFOLIO </label>
//         <ul>
//           <li>
//             <Link to="/" className="active">
//             Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link className="active" to="/about">
//               About Me
//             </Link>
//           </li>
//           <li>
//             <Link className="active" to="/skills">
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link className="active" to="/project">
//               Project
//             </Link>
//           </li>
//           <li>
//             <Link className="active" to="/contact">
//               Contact & Resume
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navigation;

// above is original copy

import React from "react";
import { Link } from "react-scroll";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";
import "../comp_styles/nav3.css"
const Navigationcopy = () => {
  return (
    <div>
      <header className="nav">
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
      </header>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact"><Contact/></section>
    </div>
  );
};

export default Navigationcopy;
