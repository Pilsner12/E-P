import React from "react";
import { motion } from "framer-motion";

import "./styles/main.scss";

const Bio = () => {
  return (
    <div className="space-background">
      <section className="bio" id="bio">
          <h2 className="bio-title">Bio</h2>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="about-me"
            >
              Po absolvování intenzivního kurzu JavaScript Frontend Developer se
              zaměřuji na vstup do světa webového vývoje. Mám více než šest let
              zkušeností v logistice a zákaznickém servisu, kde jsem si osvojila
              dovednosti jako řešení problémů, týmová spolupráce a schopnost
              pracovat pod tlakem. Baví mě tvorba uživatelsky přívětivých a
              responzivních webových aplikací a ráda přispěji k úspěchu
              dynamického vývojářského týmu.
            </motion.p>
          </div>
          <div className="shooting-star"></div>
          <div className="stars"></div>
      </section>
    </div>
  );
};

export default Bio;
