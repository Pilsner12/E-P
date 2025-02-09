import React from "react";

import toDoList from "./assets/toDoList.jpg";
import stopWatch from "./assets/stopWatch.webp";
import weatherApp from "./assets/weatherApp.webp";
import recipeApp from "./assets/recipeApp.jpg";

const SpaceExcursion = () => {
  return (
    <section className="SpaceExcursion" id="SpaceExcursion">
      <h1>Planetární Exkurze</h1>
      <div className="card-container">
        <div className="card">
          <h2 className="card-title">Planeta React 🌍✨ - To-Do List  </h2>
          <a href=""> <img
            src={toDoList}
            alt="img"
          /></a>
          <p>
          Tato planeta je domovem mého **To-Do Listu**, kde organizuji úkoly a projekty, které mě drží na správné dráze. 
          Vydejte se na objevnou cestu, jak zjednodušit a zpřehlednit svůj den díky Reactu.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Planeta JavaScript 🌑✨ - Stopwatch  </h2>
          <a href=""><img
            src={stopWatch}
            alt="img"
          /></a>
          <p>
          Na této planetě vládne **JavaScript** a jejím hlavním lákadlem je **Stopwatch** - přesný a rychlý časovač. Prozkoumejte, jak se tento projekt točí kolem 
          čistého JavaScriptu a přetváří jednoduchý koncept na elegantní funkční nástroj.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Planeta React Weather 🌤️</h2>
          <a href=""><img
            src={weatherApp}
            alt="img"
          /></a>
          <p>
          Tato planeta se zaměřuje na předpověď počasí, díky mému **React Weather Appu**. Ponořte se do místní atmosféry a sledujte, jak React využívám pro zobrazení aktuálních meteorologických dat, 
          které vám umožní vědět, co nás čeká v další denní rotaci.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Planeta Recipe App 🍴</h2>
          <a href=""><img
            src={recipeApp}
            alt="img"
          /></a>
          <p>
          Tato planeta je domovem mé <strong>Recipe App</strong> 🌱, která vám pomůže najít nové recepty, ukládat je a organizovat podle ingrediencí nebo typu jídla. 
          Ponořte se do světa chutí a experimentujte s novými pokrmy!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpaceExcursion;
