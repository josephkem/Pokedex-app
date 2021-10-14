import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Navigator from "./components/Navigator";

function App() {
  return (
    <Router>
      <Navigator />
      <Route exact path="/" component={Pokedex} />
    </Router>
  );
}

export default App;
