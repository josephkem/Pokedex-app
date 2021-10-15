import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Navigator from "./components/Navigator";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <Router>
      <Navigator />
      <Route exact path="/" component={Pokedex} />
      <Route exact path="/pokemon/:id" component={PokemonDetails} />
    </Router>
  );
}

export default App;
