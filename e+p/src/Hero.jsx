import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./styles/main.scss";

import astronautImage from "./assets/astronaut.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <img src={astronautImage} alt="Astronaut" className="astronaut" />
        {/* Text */}
        <div className="introduction">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Ahoj, jmenuji se Ester a jsem{" "}
            <span className="highlight">
              <Typewriter
                words={[
                  "front-end developer.",
                  "tvůrce webů.",
                  "nadšenec do Reactu.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="welcome-text"
          >
            Vítejte na mém profilu! Tato stránka je mým vesmírným prostorem, kde
            prezentuji projekty, které tvořím při učení a zdokonalování se v
            psaní kódu. Připravte se na vesmírné cestování po mé galaxii. Přeji
            příjemný let! 🚀
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
