import React, { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Bio from "./Bio";
import Skills from "./Skills";
import Education from "./Education";
import SpaceExcursion from "./SpaceExcursion";
import Footer from "./Footer";
import EsterContactForm from "./EsterContactForm";

export function Ester() {
  const [language, setLanguage] = useState("cz");

  return (
    <>
      <div>
        <Navbar language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <Bio language={language} />
        <Skills language={language} />
        <Education language={language} />
        <SpaceExcursion language={language} />
        <EsterContactForm language={language} />
        <Footer language={language} />
      </div>
    </>
  );
}

export default Ester;
