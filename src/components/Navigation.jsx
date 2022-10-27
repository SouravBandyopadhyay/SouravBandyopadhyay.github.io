import React from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "../comp_styles/nav2.css";
const Navigation = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <FaBars id="checkbtn" />
        </label>
        <label className="logo"> PORTFOLIO </label>
        <ul>
          <li>
            <Link activeClass="active" className="active" smooth spy to="intro" >
            Portfolio
            </Link>
          </li>
          <li>
            <Link activeClass="active"  className="active"  smooth spy to="about_me" >
              About Me
            </Link>
          </li>
          <li>
            <Link  activeClass="active" className="active"  smooth spy to="skills" >
              Skills
            </Link>
          </li>
          <li>
            <Link activeClass="active" className="active"  smooth spy to="project" >
              Project
            </Link>
          </li>
          <li>
            <Link activeClass="active" className="active"  smooth spy to="contact&resume" >
              Contact & Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
