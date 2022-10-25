import React from "react";
import "../comp_styles/contact.css";
import Contact_Illust from "./contact_illust";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHandshake, FaPhoneAlt, FaHome } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <div
        style={{
          border: "4px solid red",
          display: "grid",
          gridTemplateColumns: "0.5fr 1.5fr",
        }}
      >
        <div>
          <Contact_Illust />
        </div>
        <div>
          <div>
            <h2>
              Do you have any queries ? Reach out and let's work together on
              something exciting.
            </h2>
            <span>
              <FaHandshake size="3rem" />
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "2rem" }}>Connect with on</span>
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
          <div>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
