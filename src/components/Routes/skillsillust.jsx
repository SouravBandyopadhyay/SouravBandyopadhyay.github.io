import React, { useRef } from 'react'
import Lottie from 'lottie-web'

const Skillsillust = () => {
    const skillsIllust = useRef(null)
    useEffect(() => {
        Lottie.loadAnimation({
          container: skillsIllust.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require("./illustration/codingboy.json"),
        });
      }, []);
  return (
    <div>

    </div>
  )
}

export default Skillsillust