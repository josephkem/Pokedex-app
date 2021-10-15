import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    margin: "auto",
    width: 130,
    height: 130,
  },
  card: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90,90,90)",
    },
  },
  cardContent: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
}));

const PokemonCard = ({ pokemon, image }) => {
  const classes = useStyles();
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2} key={id}>
      <Link to={`/pokemon/${id}`} className={classes.link}>
        <Card className={classes.card}>
          <CardMedia image={image} className={classes.cardMedia} />
          <CardContent className={classes.cardContent}>
            <Typography>{name}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default PokemonCard;
