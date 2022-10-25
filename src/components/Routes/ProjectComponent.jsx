import React from "react";
import "../comp_styles/projectcomponent.css";
import {
  SiGithub,
  SiNetlify,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNpm,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
const ProjectComponent = ({
  name,
  github_link,
  deployed_link,
  img_link,
  desc,
  funct,
}) => {
  return (
    <div>
      <div className="project-card-component">
        <div className="project-card-component-box">
          <h2>{name}</h2>
          <div
            style={{
              // border: "1px solid red",
              textDecoration: "none",
              display: "flex",
              gap: "1rem",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <a
              href={github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-github"
              style={{ textDecoration: "none", color: "white", backgroundColor: "transparent", }}
            >
              <FaGithub size="3rem" />
            </a>
            <a
              href={deployed_link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-github"
              style={{ textDecoration: "none", color: "white" }}
            >
              <SiNetlify size="3rem" />
            </a>
          </div>
          <img
            src={img_link}
            alt={name}
            className="project-cover-pic"
            style={{
              objectFit: "fill",
              width: "450px",
              height: "250px",
              marginTop: "0.5rem",
              marginBottom: "0.25rem",
              padding: "0.5rem",
            }}
          />
          <div className="tech-stacks-project-component">
            <SiJavascript size="3rem" /> <SiReact size="3rem" />{" "}
            <SiHtml5 size="3rem" /> <SiCss3 size="3rem" /> <SiNpm size="3rem" />
          </div>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: "400",
              letterSpacing: "1.1px",
              textAlign:"left"
            }}
          >
            {desc}
          </p>
          <div style={{margin:"auto",marginTop:"2rem",padding:"0.5rem"}} >
            <h2 style={{justifyContent:"center",textAlign:"center"}} >Features included</h2>
            <ul>
            {funct.map((el) => (
              <li style={{fontSize:"1.2rem",textDecoration:"none",letterSpacing:"1.1px",fontWeight:"500",textAlign:"left"}} ><FcApproval/> {el}</li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
