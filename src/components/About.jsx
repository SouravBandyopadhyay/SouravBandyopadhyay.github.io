import React from "react";
import "../comp_styles/about.css";
import Illust from "./Illust";
const About = () => {
  return (
    <div className="about-me-parent-box">
      <div>
        <h1>About Sourav</h1>
        <p className="about-me-desc-p">
          <p>
            I'm a
            <strong>
              <i> Web Developer </i>
            </strong>
            from Gurugram, Haryana.
          </p>
          <p>
            Gone through rigirous and competetive coding cirrculam and learned
            MERN Stack at Masai School. I have done various group as well as
            individual projects in my coding journey.Check out some of my work
            in the
            <strong>
              <i> Projects</i>{" "}
            </strong>{" "}
            section.
          </p>
          <p>
            I did my Bachelors in Mechanical Engineering . After college I was
            working with Globsyn AI Workspace as a Technical Apprentice from
            there I develop a keen inclination towards coding. My interests are
            reading articles and manga comics.
          </p>

          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to
            <strong>
              <i> Contact </i>
            </strong>
            me.
          </p>
        </p>
      </div>
      <div className="illust-box-about" style={{ zIndex: "-1" }}>
        <Illust />
      </div>
    </div>
  );
};
export default About;
