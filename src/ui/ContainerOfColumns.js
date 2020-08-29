import React, { useState } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Column from "./Column";
import NewColumnButton from "./NewColumnButton";
import RemoveColumnButton from "./RemoveColumnButton";

const useStyles = makeStyles({
  columnTitle: {
    textAlign: "center",
    margin: "1rem",
  },
  columnContainer: {
    marginTop: "30px",
    // marginLeft: "10%",
    // marginRight: "20px",
  },
});

const ContainerOfColumns = () => {
  const classes = useStyles();
  const [board, setBoard] = useState([
    {
      columnId: 1,
      title: "To-Do",
      cards: [
        {
          belongsToColumn: 1,
          title: "Make a trello board",
          description: "We need to make a Camden, NJ board",
          due_date: Date.now(),
        },
      ],
    },
    {
      columnId: 2,
      title: "In Progress",
      cards: [
        {
          belongsToColumn: 2,
          title: "Make a trello board inprogress",
          description: "We need to make a Camden, NJ board inprogress",
          due_date: Date.now(),
        },
      ],
    },
    {
      columnId: 3,
      title: "Done",
      cards: [
        {
          belongsToColumn: 3,
          title: "Make a trello board done",
          description: "We need to make a Camden, NJ board done",
          due_date: Date.now(),
        },
        {
          belongsToColumn: 3,
          title: "Make a trello board done2",
          description: "We need to make a Camden, NJ board done",
          due_date: Date.now(),
        },
      ],
    },
  ]); // Complex state containing user data of columns/cards/etc

  const dynamicColumnDesktop = 4; // Math.floor(board.length) This will be 12 divided by the number of columns rounded down.
  const dynamicColumnMobile = 6; // Math.floor(board.length) This will be 12 divided by the number of columns rounded down.

  const mappedColumns = board.map((column) => {
    return (
      <Grid
        item
        key={column.title}
        xs={dynamicColumnMobile}
        md={dynamicColumnDesktop}
      >
        <Paper>
          <Typography className={classes.columnTitle} variant="h5">
            {column.title}
          </Typography>
          <RemoveColumnButton
            board={board}
            setBoard={setBoard}
            columnId={column.columnId}
          />
          <Column column={column} columnId={column.columnId} />
        </Paper>
      </Grid>
    );
  });

  return (
    <>
      <Grid
        container
        spacing={5}
        justify="space-around"
        className={classes.columnContainer}
      >
        {mappedColumns}
      </Grid>
      <NewColumnButton board={board} setBoard={setBoard} />
    </>
  );
};

export default ContainerOfColumns;
