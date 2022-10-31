import React from "react";
import Lottie from "lottie-web";
import { useRef, useEffect } from "react";
const Illust = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../illustration/codingboy.json")
    });
  }, []);
  return (
    <div>
      <div
        className="container"
        ref={container}
        style={{ padding: "1rem" }}
      ></div>
    </div>
  );
};

export default Illust;
