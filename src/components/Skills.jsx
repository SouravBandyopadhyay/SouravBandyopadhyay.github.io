import React from "react";
import {
  SiNpm,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostman,
  SiMongodb,
  SiRedux,
  SiTypescript
} from "react-icons/si";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import "../comp_styles/skills.css";
const Skills = () => {
  return (
    <div>
      {/* <h2>Skills</h2> */}
      <div className="what-i-do-parent">
        <div className="what-i-do-pacakages">
          <div>
            <SiNpm size="3rem" />
            <p>npm</p>
          </div>
          <div>
            <SiHtml5 size="3rem" />
            <p>html-5</p>
          </div>
          <div>
            <SiCss3 size="3rem" />
            <p>css3</p>
          </div>
          <div>
            <SiJavascript size="3rem" />
            <p>JavaScript</p>
          </div>
          <div>
            <SiReact size="3rem" />
            <p>React JS</p>
          </div>
          <div>
            <SiNodedotjs size="3rem" />
            <p>NodeJS</p>
          </div>
          <div>
            <SiPostman size="3rem" />
            <p>Postman</p>
          </div>
          <div>
            <SiMongodb size="3rem" />
            <p>Mongodb</p>
          </div>
          <div>
            <SiRedux size="3rem" />
            <p>Redux</p>
          </div>
          <div>
            <SiTypescript size="3rem" />
            <p>Typescript</p>
          </div>
        </div>
        <div className="what-i-do-box">
          <h2
            style={{
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "normal",
              letterSpacing: "1.1",
              fontSize: "2rem"
            }}
          >
            What I do
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              letterSpacing: "1.1",
              padding: "0.5rem"
            }}
          >
            <strong>
              FULL STACK WEB DEVELOPER WHO WANTS TO BUILD REAL ROBUST
              APPLICATION
            </strong>
          </p>
          {/* ul for what i do */}
          <div
            style={{
              // border: "2px solid cyan",
              padding: "0.5rem"
            }}
          >
            <ul
              style={{ textAlign: "left", fontSize: "1.2rem", display: "grid" }}
            >
              <li
                style={{
                  // border: "2px solid red",
                  justifyContent: "center",
                  margin: "auto"
                }}
              >
                <IoIosCheckmarkCircleOutline size="1.5rem" />
                &nbsp;Develop highly interactive Front end / User Interfaces for
                your web and mobile applications
              </li>
              <li>
                <IoIosCheckmarkCircleOutline size="1.5rem" />
                &nbsp;Intrested in designing and development of software Testing
                and debugging software to keep it optimized.
              </li>
              <li>
                <IoIosCheckmarkCircleOutline size="1.5rem" />
                &nbsp;Writing clean code for the front and back end by
                developing APIs and RESTful services
              </li>
              <li>
                <IoIosCheckmarkCircleOutline size="1.5rem" />
                &nbsp;Keeping up with technological advances to optimize
                software Communication and effectiveness as per emerging
                technologies.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
