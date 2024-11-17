// import React from 'react';
import './Leistungen.css';
import next_button from '../../assets/arrow-right.png';
import previous from '../../assets/arrow-left.png';
import estrich from '../../assets/estrich.jpg';
import boden from '../../assets/Boden-10.jpg';
import { useRef } from 'react';

const Leistungen = () => {

   const slider = useRef();
   let translatx = 0;

   const slideForward = () => {
     if(translatx > -50) {
      translatx -=25;
     }
     slider.current.style.transform = `translateX(${translatx}%)`;
   }

   const slideBackward = () => {
     if (translatx < 0) {
      translatx += 25;
     }
     slider.current.style.transform = `translateX(${translatx}%)`;
   }
   
   
  return (
     <div
        className="our-service"
        id="leistungen"
     >
        <img
           src={next_button}
           alt=""
           className="next-btn"
           onClick={slideForward}
        />
        <img
           src={previous}
           alt=""
           className="back-btn"
           onClick={slideBackward}
        />

        <div className="slider">

           <ul ref={slider}>

              <li>
                 <div className="slide">
                    <img src= {estrich} alt="Bild-estrich"/>
                    <h3>ESTRICH </h3>
                    <p> Es kann auf einem vorgefertigten Betonboden aufgestellt
                       werden. </p>
                 </div>
              </li>

              <li>
                 <div className="slide">
                    <img src={boden} alt="Bild-estrich" />
                    <h3>Boden </h3>
                    <p> Es können alle Arten von Bodenbelägen verlegt werden. </p>
                 </div>
              </li>

              <li>
                 <div className="slide">
                  <img src={estrich} alt="Bild-estrich" />
                  <h3>ESTRICH 3</h3>
                  <p> Es kann auf einem vorgefertigten Betonboden
                      aufgestellt werden. </p>
                 </div>
              </li>
              
              <li>
                 <div className="slide">
                  <img src={estrich} alt="Bild-estrich" />
                  <h3>ESTRICH 4</h3>
                  <p> Es kann auf einem vorgefertigten Betonboden
                      aufgestellt werden. </p>
                 </div>
              </li>
              
           </ul>
        </div>
     </div>
  );
}

export default Leistungen
