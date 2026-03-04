import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(null);
  const [planets, setPlanets] = useState(null);

  // https://dragonball-api.com/api/planets

  useEffect(() => {
    fetch("https://dragonball-api.com/api/planets")
      .then((response) => response.json())
      .then((json) => setPlanets(json.items));
  }, []);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data.items));
  }, []);

  function Planet({ planet }) {
    return <h2>{planet.name}</h2>;
  }
  function Character({ character }) {
    return <h3>{character.name}</h3>;
  }

  if (!planets || !characters) return <h2>Loading...</h2>;

  return (
    <>
      <h2>Doin a code along!</h2>
      <div id="planet-list"></div>
      <div>
        <h1>Planets</h1>
        <div>
          {planets.map((planet) => {
            return <Planet planet={planet} />;
          })}
        </div>
      </div>
      <div id="character-list">
        <div>
          <h1>Characters</h1>
          {characters.map((character) => {
            return <Character character={character} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
