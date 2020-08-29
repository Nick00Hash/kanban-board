import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import Column from "./Column";

const ContainerOfColumns = () => {
  const [board] = useState([
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
        <Column column={column} />
      </Grid>
    );
  });

  return <Grid container>{mappedColumns}</Grid>;
};

export default ContainerOfColumns;
