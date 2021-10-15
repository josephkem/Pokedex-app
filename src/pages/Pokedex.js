import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config/index";

function Pokedex() {
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=8").then((res) => {
      console.log(res.data.results);
      if (res.status >= 200 && res.status < 300) {
        const { results } = res.data;

        let newPokemonData = [];

        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          };
          console.log("pokemonObject", pokemonObject);
          console.log("pokemon", pokemon);
        });
      }
    });
  }, []);
  return (
    <Box>
      <h1>Pokemon</h1>
    </Box>
  );
}

export default Pokedex;
