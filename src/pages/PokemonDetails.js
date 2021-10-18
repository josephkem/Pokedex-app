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
  Card,
  CardContent,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { pokeType } from "../config/helper";
import { connect } from "react-redux";
import { toggleFavorite } from "../redux/actions";
import ProgressBar from "@ramonak/react-progress-bar";

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
    fontFamily: "Fantasy",
  },
  statsContainer: {
    padding: 5,
    margin: "auto",
  },
  statsName: {
    fontSize: 20,
    fontFamily: "fantasy",
    color: "red",
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
      if (res.status >= 200 && res.status < 300) {
        this.setState({ pokemon: res.data });
      }
    });
  }

  favoriteChecker = (pokemon) => {
    let found = false;
    this.props.favorites?.map((p) => {
      if (p.id === pokemon.id) {
        found = true;
      }
    });
    return found;
  };
  render() {
    const { classes } = this.props;
    const { pokemon } = this.state;
    if (pokemon) {
      const { name, sprites, height, weight, types, stats } = pokemon;

      return (
        <Box>
          <Box className={classes.pokemonContainer}>
            <Typography variant="h1" className={classes.title}>
              {name}
            </Typography>
            <img className={classes.pokemonImage} src={sprites.front_default} />
            <Box>
              {stats.map((pokemonStats) => {
                const { name } = pokemonStats.stat;
                return (
                  <Grid item xs={12} sm={4} className={classes.statsContainer}>
                    <Typography className={classes.statsName}>
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Typography>

                    <ProgressBar
                      completed={pokemonStats.base_stat}
                      customLabel={pokemonStats.base_stat}
                      maxCompleted={200}
                      baseBgColor="white"
                      labelColor="black"
                      bgColor="red"
                      labelAlignment="center"
                      labelSize="20px"
                      transitionTimingFunction="ease"
                      transitionDuration="1s"
                      width="100%"
                      height="18px"
                    />
                  </Grid>
                );
              })}
            </Box>

            <Box className={classes.pokemonInfo}>
              <hr className={classes.separator} />
              <Grid container>
                <Grid item md={1}>
                  <Button
                    className={classes.favButton}
                    onClick={() => this.props.toggleFavorite(pokemon)}
                  >
                    <FavoriteIcon
                      style={{
                        color: this.favoriteChecker(pokemon) ? "red" : "white",
                        fontSize: "45",
                      }}
                    />
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
                  let color = pokeType(name);
                  return (
                    <Grid item md={2}>
                      <Typography className={classes.text}>
                        Type
                        <br />
                        <span style={{ color: `${color}` }}>
                          {name.toUpperCase()}
                        </span>
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

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (pokemon) => dispatch(toggleFavorite(pokemon)),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)
);
