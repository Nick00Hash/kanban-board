import React from "react";
import { Grid, Typography } from "@material-ui/core";

import CardTile from "./CardTile";

const Column = (props) => {
  const mappedCards = props.column.cards.map((card) => {
    return <CardTile key={card.title} card={card} />;
  });
  return (
    <Grid container spacing={3}>
      <div>{mappedCards}</div>
    </Grid>
  );
};

export default Column;
