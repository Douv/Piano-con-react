import React, { useState } from "react";
import "./App.css";

function App() {
  const [playing, setPlaying] = useState("");

  const sounds = [
    {
      name: "Do",
      link: require("./notes/do.wav"),
      aigu: true,
    },
    {
      name: "Re",
      link: require("./notes/re.wav"),
      aigu: true,
    },
    {
      name: "Mi",
      link: require("./notes/mi.wav"),
    },
    {
      name: "Fa",
      link: require("./notes/fa.wav"),
      aigu: true,
    },
    {
      name: "Sol",
      link: require("./notes/sol.wav"),
      aigu: true,
    },
    {
      name: "La",
      link: require("./notes/la.wav"),
      aigu: true,
    },
    {
      name: "Si",
      link: require("./notes/si.wav"),
    },
  ];

  const noteSound = (sounds) => {
    setPlaying(sounds.name);
    const sonido = new Audio(sounds.link);
    sonido.play();

    setTimeout(() => {
      setPlaying("");
    }, 150);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Piano con React</h1>
        <h2>Hecho por WD</h2>
        {playing && <h3>It's playing {playing}</h3>}
      </div>

      <div className="container">
        {sounds.map((sounds) => {
          return (
            <div
              className={`keyboards ${playing === sounds.name && "playing"}`}
              onClick={() => noteSound(sounds)}
            >
              {sounds.aigu && <div className="black"></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
