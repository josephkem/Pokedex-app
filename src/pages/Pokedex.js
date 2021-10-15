import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Grid } from "@material-ui/core";
import axios from "axios";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config/index";
import PokemonCard from "../components/PokemonCard";

function Pokedex() {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=800").then((res) => {
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
          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
      }
    });
  }, []);
  return (
    <Box>
      {pokemonData ? (
        <Grid container spacing={2}>
          {pokemonData.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} image={pokemon.url} />;
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
}

export default Pokedex;
