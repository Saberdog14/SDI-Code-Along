import { useState } from "react";
import Planets from "./Planets";
// import Planet from "./Planet";
import Characters from "./Characters";
// import Character from "./Character";
import "./App.css";
import Details from "./Details";
import { DetailsContext } from "./context/DetailsContext";

function App() {
  const [details, setDetails] = useState(null);
  const value = { details, setDetails };

  if (details) return <Details setDetails={setDetails} />;

  return (
    <DetailsContext.Provider value={value}>
      <h2>Doin a code along!</h2>
      <Planets />
      <Characters />
    </DetailsContext.Provider>
  );
}

export default App;
