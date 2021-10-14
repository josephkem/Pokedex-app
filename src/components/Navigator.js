import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "black",
  },

  link: {
    textDecoration: "none",
  },
  title: {
    cursor: "pointer",
    color: "red",
  },
}));

const Navigator = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.AppBar}>
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title} variant="h6">
            Pokedex
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navigator;
