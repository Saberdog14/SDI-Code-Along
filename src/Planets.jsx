import { useState, useEffect } from "react";
import Planet from "./Planet";
import customFetch from "./customHooks/customFetch";

export default function Planets() {
  const items = customFetch("planets");

  if (!items) return <h2>Loading...</h2>;

  return (
    <div id="planet-list">
      <h1>Planets</h1>
      <div>
        {items.map((planet) => {
          return <Planet planet={planet} key={planet.id} />;
        })}
      </div>
    </div>
  );
}
