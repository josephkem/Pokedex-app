import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Navigator from "./components/Navigator";
import PokemonDetails from "./pages/PokemonDetails";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navigator />
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
