import Header from "./Header";
import "./App.css";
import { Component } from "react";

import albon from "./driverPhotos/albon.png";
import alonso from "./driverPhotos/alonso.png";
import bottas from "./driverPhotos/bottas.png";
import checo from "./driverPhotos/checo.png";
import daniel from "./driverPhotos/daniel.png";
import gasly from "./driverPhotos/gasly.png";
import george from "./driverPhotos/george.png";
import hamilton from "./driverPhotos/hamilton.png";
import lance from "./driverPhotos/lance.png";
import latifi from "./driverPhotos/latifi.png";
import leclerc from "./driverPhotos/leclerc.png";
import magnussen from "./driverPhotos/magnussen.png";
import max from "./driverPhotos/max.png";
import mick from "./driverPhotos/mick.png";
import ocon from "./driverPhotos/ocon.png";
import sainz from "./driverPhotos/sainz.png";
import tsunoda from "./driverPhotos/tsunoda.png";
import vettel from "./driverPhotos/vettel.png";
import zhou from "./driverPhotos/zhou.png";

const App = () => {
  const drivers = [
    { name: "Pierre Gasly", image: gasly },
    { name: "George Russel", image: george },
    { name: "Mick Schumacher", image: mick },
    { name: "Max Verstappen", image: max },
    { name: "Charles Leclerc", image: leclerc },
    { name: "Kevin Magnussen", image: magnussen },
    { name: "Esteban Ocon", image: ocon },
    { name: "Carlos Sainz", image: sainz },
    { name: "Yuki Tsunoda", image: tsunoda },
    { name: "Sebastian Vettel", image: vettel },
    { name: "Zhou Ghuanyu", image: zhou },
    { name: "Nicholas Latifi", image: latifi },
    { name: "Lance Stroll", image: lance },
    { name: "Lewis Hamilton", image: hamilton },
    { name: "Daniel Riccardo", image: daniel },
    { name: "Sergio Perez", image: checo },
    { name: "Valteri Bottas", image: bottas },
    { name: "Fernando Alonso", image: alonso },
    { name: "Alexander Albon", image: albon },
  ];
  return (
    <div className="App">
      <Header />
      <div className="cardContainer"></div>
    </div>
  );
};
export default App;
