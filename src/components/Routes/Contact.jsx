import React from "react";
import "../comp_styles/contact.css";
import Contact_illust from "./contact_illust";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHandshake, FaPhoneAlt, FaHome } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="contact-resume-parent-box">
        <div style={{ width: "100%" }}>
          <Contact_illust />
        </div>
        <div>
          <div className="p-queries" style={{ width: "70%", fontSize: "2rem" }}>
            <p>
              Do you have any queries ? Reach out and let's work together on
              something exciting.
            </p>
            <span>
              <FaHandshake size="3rem" />
            </span>
          </div>
          <div className="connect-resume-div-box" >
            <span style={{ fontSize: "2rem" }}>Connect with me on</span>
            <span>
              <a
                href="https://www.linkedin.com/in/souravbandyopadhyay/"
                style={{
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  color: "white",
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
                  color: "white",
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
                  color: "white",
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
          <div className="resume-btn-drive-link" style={{marginTop:"2rem"}} >
            <a
              href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="button-27" role="button">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
