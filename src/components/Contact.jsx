import React from "react";
import "../comp_styles/contact.css";
import Contactillust from "./Contactillust";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHandshake, FaPhoneAlt, FaHome } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "right",
          margin: "auto",
          // border: "3px solid red",
          width: "30%"
        }}
      >
        <h1>Contact Me</h1>
      </div>
      <div className="contact-resume-parent-box">
        <div style={{ width: "100%" }}>
          <Contactillust />
        </div>
        <div>
          <div
            className="p-queries"
            style={{
              width: "50%",
              fontSize: "1.5rem",
              // border: "2px solid green",
              margin: "auto",
              padding: "0.5rem"
            }}
          >
            <p>
              Do you have any queries ? Reach me out and let's work together on
              something exciting.
            </p>
            <span>
              <FaHandshake size="3rem" />
            </span>
          </div>
          <div className="connect-resume-div-box">
            <span style={{ fontSize: "1.7rem" }}>Connect with me on</span>
            <span>
              <a
                href="https://www.linkedin.com/in/souravbandyopadhyay/"
                style={{
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  color: "black"
                }}
              >
                <FaLinkedin size="3rem" />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/SouravBandyopadhyay"
                style={{
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  color: "black"
                }}
              >
                <FaGithub size="3rem" />
              </a>
            </span>
            <span>
              <a
                href="mailto:souravb.1998@gmail.com?"
                style={{
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  color: "black"
                }}
              >
                <SiGmail size="3rem" />
              </a>
            </span>
          </div>
          <div className="contact-details-2nd-half">
            <span style={{ display: "flex" }}>
              <FaPhoneAlt size="2.5rem" />
              <p style={{ fontSize: "1.6rem" }}>
                {" "}
                &nbsp;&nbsp; +91 8240411987 / 9062415895
              </p>
            </span>
            <span style={{ display: "flex" }}>
              <FaHome size="2.5rem" />
              <p style={{ fontSize: "1.6rem" }}>
                &nbsp;&nbsp; Gurugram Haryana,India
              </p>
            </span>
          </div>
          <div
            className="resume-btn-drive-link"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <a
              href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-27">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
