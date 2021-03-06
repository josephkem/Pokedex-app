import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config/index";
import PokemonCard from "../components/PokemonCard";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    textAlign: "center",
    padding: "80px 10px 0px 10px",
    backgroundColor: "rgb(68, 68, 68)",
  },
}));

function Pokedex() {
  const classes = useStyles();
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

  console.log(pokemonData);

  return (
    <Box>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                image={pokemon.url}
                key={pokemon.id}
              />
            );
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
}

export default Pokedex;
