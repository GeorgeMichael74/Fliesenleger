// import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Arbeiten from './Components/Arbeiten/Arbeiten.jsx';
import Leistungen from './Components/Leistungen/Leistungen.jsx';
import Title from './Components/Title/Title.jsx';
import Kontakt from './Components/Kontakt/Kontakt.jsx';
import Footer from './Components/Footer/Footer.jsx';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx';
import { useState } from 'react';


const App = () => {
   const [playState, setPlayState]= useState(false);

  return (
     <div>
        <Navbar />
        <Hero setPlayState={setPlayState} />
        <div className="container">
         <Title subTitle = "Unsere Arbeiten" title = 'Was haben wir gemacht?'/>
         <Arbeiten />
         <Title subTitle = "Unsere Leistungen" title = 'Was wir bieten?'/>
         <Leistungen />
         <Title subTitle = "Kontaktieren Sie uns" title = 'Nehmen Sie Kontakt auf'/>
         <Kontakt/>
         <Footer/>
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
     </div>
  );
}

export default App
