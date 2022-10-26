import React from "react";
import "../comp_styles/Home.css";
import Pdf from "../assets/Sourav-Bandyopadhyay-Resume.pdf";
import image from "../assets/img.jpeg";
const Home = () => {
  return (
    <div className="homepage-parent-container">
      <div className="homepage-intro-box">
        <span style={{ fontSize: "3rem" }}>Hi&nbsp;</span>
        <span>
          <img
            className="myHello"
            src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
            alt=""
            srcset=""
            style={{ height: "1.6em", width: "1.6em", margin: "0 0.05em 0 0.1em" }}
          />
        </span>
        <span>
          <p className="my-name-animation" style={{ fontSize: "3rem" }}>
            I am &nbsp;
            <span className="animate-charcter"> Sourav Bandyopadhyay</span>{" "}
          </p>
        </span>
        <div
          style={{ margin: "0.5rem", padding: "0.25rem", textAlign: "center",fontSize:"2rem",marginTop:"1rem" }}
        >
          <p>
            A passionate Full Stack Web Developer 🚀 having an exposure of
            building Websites with JavaScript / Reactjs / Nodejs / MongoDB and
            some other cool libraries and frameworks.
          </p>
        </div>
        <div className="homepage-resume" style={{marginTop:"2.5rem"}} >
          <a
            href={Pdf}
            className="homepage-resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Resume
          </a>
        </div>
      </div>
      <div className="homePage-main-picture" style={{ overflow: "hidden"}}>
        <img className="my-image-portfolio"
          src={image}
          alt="Sourav Bandyopadhyay"
          srcset=""
          // style={{
          //   width: "100%",
          //   height: "auto",
          //   padding: "1.2rem",
          //   margin: "auto",
          //   objectFit: "contain",
          // }}
        />
      </div>
    </div>
  );
};
export default Home;

