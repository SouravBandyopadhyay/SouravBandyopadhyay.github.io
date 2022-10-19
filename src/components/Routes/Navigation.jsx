import React from "react";
import { Link } from "react-router-dom";
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
        <label class="logo"> PORTFOLIO </label>
        <ul>
          <li>
            <Link to="/" className="active">
            Portfolio
            </Link>
          </li>
          <li>
            <Link className="active" to="/about">
              About Me
            </Link>
          </li>
          <li>
            <Link className="active" to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="active" to="/project">
              Project
            </Link>
          </li>
          <li>
            <Link className="active" to="/contact">
              Contact & Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
