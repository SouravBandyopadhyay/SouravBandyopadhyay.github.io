import React from "react";
import Lottie from "lottie-web";
import { useRef, useEffect } from "react";
const Contact_illust = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../illustration/contact.json"),
    });
  }, []);
  return (
    <div>
      <div
        className="contact-illust-container"
        ref={container}
        style={{ padding: "1rem" }}
      ></div>
    </div>
  );
};

export default Contact_illust;
