//React import
import React, { useState, useEffect } from "react";

//CSS import
import "./App.css";

//Components import
import Header from "./Header";
import Card from "./Card";

//Imports of the drivers
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
import lando from "./driverPhotos/lando.png";

//Main APP starts here
const App = () => {
  //States

  const [currentScore, setCurrentScore] = useState(0);
  const [currentHighScore, setCurrentHighScore] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);
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
    { name: "Lando Norris", image: lando },
  ];

  //Functions

  //Function to shuffle an array of drivers(To show them in the different place every time)
  const shuffle = (array) => {
    let j, x, i;

    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  };

  //Function to increment the score in the game. (Or set current score to 0, when driver has already been clicked)
  const incrementScore = (clickedDriver) => {
    // If the driver has already been clicked
    if (clickedArray.includes(clickedDriver)) {
      setClickedArray([]);
      setCurrentScore(0);
    }
    // If the driver hasn't been clicked
    else {
      setClickedArray([...clickedArray, clickedDriver]);
      setCurrentScore(currentScore + 1);
    }
  };

  //Hook for when currentScore and currentHighScore changes, to check whether the score doesn't surpass the previous highScore.
  useEffect(() => {
    if (currentScore > currentHighScore) {
      setCurrentHighScore(currentScore);
    }
  }, [currentScore, currentHighScore]);

  return (
    <div className="App">
      <Header currentScore={currentScore} highestScore={currentHighScore} />
      <div className="cardContainer">
        {shuffle(drivers).map((driver) => {
          return (
            <Card
              source={driver.image}
              name={driver.name}
              incrementScore={(clickedDriver) => {
                incrementScore(clickedDriver);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default App;
