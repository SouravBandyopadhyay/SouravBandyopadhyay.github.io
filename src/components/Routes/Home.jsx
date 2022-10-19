import React from "react";
import "../comp_styles/Home.css";
// import { useRef } from "react";
// import { useEffect } from "react";

// import lottie from "lottie-web"
const Home = () => {
  // const homePage_illustration1 = useRef(null);
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: homePage_illustration1.current, // the dom element that will contain the animation
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData:"./developer.json"// the path to the animation json
  //   });
  // }, []);
  return (
    <div>
      <div className="homepage-intro-box">
        Hi
        <span>
          <img
            className="myHello"
            src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
            alt=""
            srcset=""
            style={{ height: "1em", width: "1em", margin: "0 0.05em 0 0.1em" }}
          />
        </span>
        I'm
        <span>
          <p className="my-name-animation"> Sourav Bandyopadhyay</p>
        </span>
        <p>
          A passionate Full Stack Web Developer 🚀 having an exposure of
          building Websites with JavaScript / Reactjs / Nodejs / MongoDB and
          some other cool libraries and frameworks.
        </p>
        <div className="homepage-resume">
          <button className="homepage-resume-btn">Resume</button>
        </div>
        {/* <div className="container" >
          ref={homePage_illustration1}
        </div> */}
      </div>
    </div>
  );
};
export default Home;
