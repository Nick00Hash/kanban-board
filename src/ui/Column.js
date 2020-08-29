import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd'
import { Grid, Typography } from "@material-ui/core";

import CardTile from "./CardTile";

const useStyles = makeStyles({
  card: {
    marginBottom: "10px",
  },
});

const useStyles = makeStyles({
  column: {
    minHeight: '200px'
  },
  columnColored: {
    minHeight: '200px',
    transition: 'background-color 0.3s ease',
    backgroundColor: 'yellow'
  }
});

const Column = (props) => {
  const classes = useStyles();

  const mappedCards = props.column.cards.map((card, index) => {
    return (
      <Grid className={classes.card}>
        <CardTile key={card.title} card={card} index={index}/>
      </Grid>
    );
  });
  
  return (
    <div>
      <Droppable droppableId={props.column.columnId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={(snapshot.isDraggingOver ? classes.columnColored : classes.column)}
          >
          <Grid container spacing={3} justify="center">
            {mappedCards}
            {provided.placeholder}
          </Grid>
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column