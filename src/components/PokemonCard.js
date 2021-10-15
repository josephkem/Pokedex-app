import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

const PokemonCard = ({ pokemon, image }) => {
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2}>
      <Card>
        <CardMedia image={image} />
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
