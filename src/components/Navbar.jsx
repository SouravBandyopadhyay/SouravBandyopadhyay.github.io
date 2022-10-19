import React from "react";
import { Link } from "react-router-dom";
import "./comp_styles/NavStyle.css";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <input type="checkbox"/>
      <label   for="check"> <FaBars id="checkbtn" /> </label>

      <div className="portfolio-container-text">
        <Link to="/" className="portfolio-container-text-link">
          Portfolio
        </Link>
      </div>
      <div className="portfolio-container-link">
        <ul>
          <li>
            <Link className="portfolio-container-link-tag" to="/about">
              About Me
            </Link>
          </li>
          <li>
            <Link className="portfolio-container-link-tag" to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="portfolio-container-link-tag" to="/project">
              Project
            </Link>
          </li>
          <li>
            <Link className="portfolio-container-link-tag" to="/contact">
              Contact & Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
