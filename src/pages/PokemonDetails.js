import React, { Component } from "react";
import axios from "axios";
import { POKEMON_API_URL } from "../config";
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  Button,
  withStyles,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = (theme) => ({
  pokemonContainer: {
    height: "84vh",
    backgroundColor: "black",
    color: "white",
    marginTop: 75,
    textAlign: "center",
    borderRadius: 5,
    paddingTop: 30,
  },
  title: {
    textTransform: "uppercase",
    fontFamily: "Fantasy",
  },
  pokemonImage: {
    width: "170px",
    height: "170px",
  },
  pokemonInfo: {
    bottom: 60,
    position: "absolute",
    width: "100%",
  },
  separator: {
    height: "0.1mm",
    width: "95%",
  },
  favButton: {
    height: 50,
    widht: 50,
    marginTop: 15,
  },
  text: {
    fontSize: 30,
  },
});

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match?.params;
    axios.get(`${POKEMON_API_URL}/${id}`).then((res) => {
      console.log(res.data);
      if (res.status >= 200 && res.status < 300) {
        this.setState({ pokemon: res.data });
      }
    });
  }
  render() {
    const { classes } = this.props;
    const { pokemon } = this.state;
    if (pokemon) {
      const { name, sprites, height, weight, types } = pokemon;
      return (
        <Box>
          <Box className={classes.pokemonContainer}>
            <Typography variant="h1" className={classes.title}>
              {name}
            </Typography>
            <img className={classes.pokemonImage} src={sprites.front_default} />
            <Box className={classes.pokemonInfo}>
              <hr className={classes.separator} />
              <Grid container>
                <Grid item md={1}>
                  <Button className={classes.favButton}>
                    <FavoriteIcon style={{ color: "white", fontSize: "45" }} />
                  </Button>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Name
                    <br />
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Height
                    <br />
                    {height}m
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.text}>
                    Weight
                    <br />
                    {weight}kg
                  </Typography>
                </Grid>

                {types.map((pokemonType) => {
                  const { name } = pokemonType.type;
                  return (
                    <Grid item md={2}>
                      <Typography className={classes.text}>
                        Type
                        <br />
                        {name}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      );
    } else {
      return <CircularProgress />;
    }
  }
}

export default withStyles(styles)(PokemonDetails);
