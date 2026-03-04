import { useState, useEffect } from "react";
import Character from "./Character";
import customFetch from "./customHooks/customFetch";

export default function Characters() {
  const items = customFetch("characters");

  if (!items) return <h2>Loading...</h2>;

  return (
    <div id="character-list">
      <div>
        <h1>Characters</h1>
        {items.map((character) => {
          return <Character character={character} key={character.id} />;
        })}
      </div>
    </div>
  );
}
