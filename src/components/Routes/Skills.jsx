import React from 'react'
import {
  SiNpm,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostman,
  SiMongodb,
} from "react-icons/si";
const Skills = () => {
  return (
    <div><h3>Skills</h3>
    <div className="what-i-do-parent">
        <div className="what-i-do-box">
          <h2
            style={{
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "normal",
              letterSpacing: "1.1",
              fontSize: "2rem",
            }}
          >
            What I do
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              letterSpacing: "1.1",
              padding: "0.5rem",
            }}
          >
            FULL STACK WEB DEVELOPER WHO WANTS TO BUILD REAL ROBUST APPLICATION
          </p>
          {/* ul for what i do */}
          <div
            style={{
              border: "1px solid white",
              padding: "0.5rem",
              textAlign: "left",
              fontSize: "1.3rem",
            }}
          >
            <ul>
              <li>
                <img
                  className="bullets-current"
                  src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
                  alt=""
                  srcset=""
                />
                Develop highly interactive Front end / User Interfaces for your
                web and mobile applications
              </li>
              <li>
                <img
                  className="bullets-current"
                  src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
                  alt=""
                  srcset=""
                />
                Intrested in designing and development of software Testing and
                debugging software to keep it optimized.
              </li>
              <li>
                <img
                  className="bullets-current"
                  src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
                  alt=""
                  srcset=""
                />
                Writing clean code for the front and back end by developing APIs
                and RESTful services
              </li>
              <li>
                <img
                  className="bullets-current"
                  src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
                  alt=""
                  srcset=""
                />
                Keeping up with technological advances to optimize software
                Communication and effectiveness as per emerging technologies.
              </li>
            </ul>
            {/* Packages icon div Start from here */}
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
            </div>
             {/* Packages icon div End from here */}
          </div>
        </div>
        <div className="what-i-do-illustration">
          Illustration will be added here when found
        </div>
      </div>
    </div>
  )
}

export default Skills