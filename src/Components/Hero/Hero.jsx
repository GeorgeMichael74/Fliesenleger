// import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import { IoPlayCircle } from "react-icons/io5";
import fliesenAnimation from "../../animation/fliesenAnimation.json";
import { useRef } from "react";

const Hero = ({setPlayState}) => {
   const lottieRef = useRef();
   return (
      // ============ left Section ============
      <section className="hero container">
         <div className="hero-text">
            <h1>
               Fliesenleger <span>Haus</span>
            </h1>
            <h3>Wir sind</h3>
            <p>
               ein professioneller Fliesenleger Service von höchster Qualität.
            </p>

            <div className="btn-container">
               <button className="btn" onClick={() => {
                 setPlayState(true);
               }
               }>
                  Über Uns {" "}{<IoPlayCircle  size={30} style={{color:"#c16508"}}/>}
                   
               </button>
            </div>
               </div>

            <div className="animation">
               <Lottie
                  lottieRef={lottieRef}
                  loop={true}
                  onLoadedImages={() => {
                     // @ts-ignore
                     // https://lottiereact.com/
                     lottieRef.current.setSpeed(1);
                  }}
                  style={{ height: 250, width: 250 }}
                  animationData={fliesenAnimation}
               />
            </div>
      </section>
   );
};

export default Hero;
