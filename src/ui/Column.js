import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd'
import { Grid, Typography } from "@material-ui/core";

import CardTile from "./CardTile";

const useStyles = makeStyles({
  card: {
    marginBottom: "10px",
  },
  column: {
    minHeight: '200px',
    paddingBottom: '1rem'
  },
  columnColored: {
    minHeight: '200px',
    transition: 'background-color 0.3s ease',
    backgroundColor: 'yellow',
    paddingBottom: '1rem'
  }
});

const Column = (props) => {
  const classes = useStyles();

  const mappedCards = props.column.cards.map((card, index) => {
    return (
      <Grid className={classes.card} key={card.title}>
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
            {mappedCards}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column