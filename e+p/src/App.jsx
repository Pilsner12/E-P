import React from "react";
import etneteraIcon from "./assets/etnetera-core.svg";
import esterImg from "./assets/esterImg.jpeg";
import "./styles/main.scss";

function App() {
  return (
    <>
      <header className="header bg-slate-300 text-slate-700">
        <div className="container_app">
          <img src={etneteraIcon} alt="etnetera-logo" className="w-48 h-auto" />
          <div className="header__introduction">
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-center">
              Děkujeme za příležitost!
            </h1>
            <p className="header__text text-center text-lg md:text-xl lg:text-2xl">
              S vděčností děkujeme za pozvání na pracovní pohovor "nanečisto" u
              Vás v Etnetera Core. Vážíme se této příležitosti a chceme Vám
              ukázat naše dovednosti, které jsme se během kurzu v CodersLab
              naučili. Těšíme se na setkání a věříme, že si ho společně užijeme
              😎
            </p>
            <p className="header__signature text-center text-xl md:text-2xl lg:text-3xl">
              Ester & Petr
            </p>
          </div>
        </div>
      </header>

      {/* <main className="h-screen bg-gradient-to-b from-purple-950 to-black flex justify-center items-center"> */}
      <main className="main h-screen bg-gradient-to-b from-purple-950 to-black flex justify-center items-center" id="main">
        <div className="container_app w-full flex flex-col lg:flex-row justify-around items-center">
          <div className="flex flex-col justify-around items-center">
            <img
              src={esterImg}
              alt="ester-img"
              className="main__image w-[200px] h-[200px] rounded-full sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"
            />
            <p className="main__text text-2xl md:text-4xl lg:text-5xl">Ester Andrews</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="main__image w-[200px] h-[200px] rounded-full bg-amber-50 block sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"></span>
            <p className="main__text text-2xl md:text-4xl lg:text-5xl">Petr Smolka</p>
          </div>
        </div>
      </main>

      <section className="contact bg-slate-300 text-slate-700">
        <div className="container_app"></div>
      </section>
    </>
  );
}

export default App;
