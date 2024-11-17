// import React from 'react';
import "./Navbar.css";
import Fliesenlegerhaus from "../../assets/Fliesenlegerhaus.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Navbar = () => {
   const [click, setClick] = useState(false);
   const toggleMenu = () => {
      setClick(!click);
   };

   const closeMenu = () => setClick(true);

   /*======= navbar change color ========= */
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
       window.addEventListener("scroll", () => {
          window.scrollY > 50 ? setSticky(true) : setSticky(false);
       });
   }, []);


   return (
         <nav className={`navbar ${sticky? 'dark-nav' : ''}`}>

            <Link to="hero" smooth={true}><img src={Fliesenlegerhaus} className="logo" alt=""/></Link>
            <ul className={click ? 'nav-menu active': 'navbar'}>
               <li className="nav-item"><Link to="hero" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>startseite</Link></li>
               <li className="nav-item"><Link to="arbeiten" spy={true} smooth={true} offset={-250} duration={500} onClick={closeMenu}>Arbeiten</Link></li>
               <li className="nav-item"><Link to="leistungen" spy={true} smooth={true} offset={-260} duration={500} onClick={closeMenu}>Leistungen</Link></li>
               <li className="nav-item"><Link to="kontakt"  spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu}>kontakt</Link></li>
            </ul>
            <Link to="hero" smooth={true} ><button className="btn">Oben{" "}{<FaArrowUp size={15} style={{color:'black'}} />}</button></Link>
            <div className="hamburger" onClick={toggleMenu}>{click ?(<FaBars size={25} style={{color:'#fff'}}/>):(<FaTimes size={25} style={{color:'#fff'}} />)}</div>

         </nav>
   );
};

export default Navbar;
