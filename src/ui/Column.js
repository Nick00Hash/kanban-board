import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CardTile from "./CardTile";

const useStyles = makeStyles({
  card: {
    marginBottom: "10px",
  },
});

const Column = (props) => {
  const classes = useStyles();
  const mappedCards = props.column.cards.map((card) => {
    return (
      <Grid className={classes.card}>
        <CardTile key={card.title} card={card} />
      </Grid>
    );
  });
  return (
    <Grid container spacing={3} justify="center">
      <div>{mappedCards}</div>
    </Grid>
  );
};

export default Column;
