import React, { useState, useEffect } from "react";
import "./App.css";
import Landing from "./Landing";

function App() {
  const [loading, setLoading] = useState(true);
  const [randomFact, setRandomFact] = useState(null);

  // const arr = [
  //   "My favorite sport is basketball!",
  //   "I started indoor bouldering this summer, and I love it!",
  //   "I cook a mean vegetable omelette :P",
  //   "I love 2D pixel art games (Sea of Stars is on my list 🌊✨)",
  //   "I am looking for spring and summer software internship roles (pls)",
  //   "I love all cuisines (Indian and Italian are among my favorites 😋)",
  //   "I am a first-generation Tibetan-American",
  //   "I interned at the NYTimes last summer (it was fun!)",
  //   "Check my github (link in my portfolio) for more projects!",
  //   "My favorite university courses are machine learning, discrete math, and linear algebra.",
  //   "I am trying to launch my own startup company!",
  // ];

  // const chooseRandomFact = () => {
  //   setRandomFact(arr[Math.floor(Math.random() * arr.length)]);
  // };

  useEffect(() => {
    // chooseRandomFact();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-div">
          <h1 className="loading-header">Loading chunks...</h1>
          {/* randomFact && <h3 className="loading-fact">{randomFact}</h3> */}
          <p className="loading-p">Tashi Sherpa's website portfolio.</p>
        </div>
      ) : (
        <Landing />
      )}
    </div>
  );
}

export default App;
