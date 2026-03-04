import { useContext } from "react";
import { DetailsContext } from "./context/DetailsContext";

export default function Planet({ planet }) {
  const { setDetails } = useContext(DetailsContext);
  return (
    <>
      <div onClick={() => setDetails(planet)}>
        <div id={planet.id}>
          <h2>{planet.name}</h2>
          <img id="planet-pic" src={planet.image} />
        </div>
      </div>
    </>
  );
}
