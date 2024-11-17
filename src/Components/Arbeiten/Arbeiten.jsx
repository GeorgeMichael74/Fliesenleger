import { useState } from "react";
import "./Arbeiten.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Arbeiten = () => {
   const [currentActive, setCurrentActive] = useState("all");
   const [arr, setArr] = useState(myProjects);
   const handleClick = (buttonCategory) => {
      setCurrentActive(buttonCategory);
      const newArr = myProjects.filter((item) => {
         const newFilter = item.category.find((myItem) => {
            return myItem === buttonCategory;
         });
         return newFilter === buttonCategory;
      });
      setArr(newArr);
   };

   return (
      <main className="flex" id="arbeiten">
         {/* ==== left ======= */}
         <section className="left-section flex">
            <button
               onClick={() => {
                  setCurrentActive("all");
                  setArr(myProjects);
               }}
               className={currentActive === "all" ? "active" : null}
            >
               All Projects
            </button>

            <button
               onClick={() => {
                  handleClick("Badezimmer");
               }}
               className={currentActive === "Badezimmer" ? "active" : null}
            >
               Badezimmer
            </button>

            <button
               onClick={() => {
                  handleClick("Küchen");
               }}
               className={currentActive === "Küchen" ? "active" : null}
            >
               Küchen
            </button>

            <button
               onClick={() => {
                  handleClick("Duschräume");
               }}
               className={currentActive === "Duschräume" ? "active" : null}
            >
               Duschräume
            </button>

            <button
               onClick={() => {
                  handleClick("Böden");
               }}
               className={currentActive === "Böden" ? "active" : null}
            >
               Böden
            </button>
            <button
               onClick={() => {
                  handleClick("Fußbodenheizung");
               }}
               className={currentActive === "Fußbodenheizung" ? "active" : null}
            >
               Fußbodenheizung
            </button>
         </section>

         <section className="right-section">
            {/* ===========================
            ============== right ==========
            =============================== */}
            <AnimatePresence>
               {arr.map((item) => {
                  return (
                     <motion.article
                        layout
                        initial={{ transform: "scale(0.4)" }}
                        animate={{ transform: "scale(1)" }}
                        transition={{type: "spring", damping: 8, stiffness:50}}


                        key={item.imgPath}
                        className="card"
                     >
                        <img
                           width={260}
                           height={200}
                           src={item.imgPath}
                           alt="Bild"
                        />

                        <div
                           style={{ width: "260px" }}
                           className="box"
                        >
                           <h2 className="heading">{item.projectTitle}</h2>
                           <p className="sub-heading">
                              Wir sind spezialisiert auf alle Arten von Fliesen,
                              verschiedene Materialien, von Keramik, Metall,
                              Glas, Porzellan und Naturstein Schiefer,
                              Kalkstein, Travertin, Granit und Marmor
                           </p>

                           <div className="box-icons flex">
                              <div className="icon-link"></div>
                              <a href="">
                                 mehr
                                 <span className="icon-arrow-right"></span>
                              </a>
                           </div>
                        </div>
                     </motion.article>
                  );
               })}
            </AnimatePresence>
         </section>
      </main>
   );
};

export default Arbeiten;
