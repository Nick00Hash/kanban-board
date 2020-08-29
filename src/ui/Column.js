import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { Grid, Typography, Paper } from "@material-ui/core";

import CardTile from "./CardTile";
import RemoveColumnButton from "./RemoveColumnButton";

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
  },
  columnTitle: {
    textAlign: "center",
    margin: "1rem",
  },
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
    <Draggable draggableId={props.column.columnId} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Paper>
            <span className={classes.inline}>
              <Typography className={classes.columnTitle} variant="h4" {...provided.dragHandleProps}>
                {props.column.title}{" "}
                <RemoveColumnButton
                  board={props.board}
                  setBoard={props.setBoard}
                  removeId={props.removeId}
                  columnId={props.column.columnId}
                />
              </Typography>
            </span>
            <Droppable droppableId={props.column.columnId} type='card'>
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
          </Paper>
        </div>
      )}
    </Draggable>
  )
}

export default Column