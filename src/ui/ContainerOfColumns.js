import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { DragDropContext } from 'react-beautiful-dnd'

import Column from "./Column";

const ContainerOfColumns = () => {
  const [columnOrder, setColumnOrder] = useState(["1", "2", "3"])
  const [board, setBoard] = useState([
    {
      columnId: "1",
      title: "To-Do",
      cards: [
        {
          belongsToColumn: "1",
          title: "Make a trello board",
          description: "We need to make a Camden, NJ board",
          due_date: Date.now(),
        },
        {
          belongsToColumn: "1",
          title: "Make a trello board2222",
          description: "We need to make a Camden, NJ board2222",
          due_date: Date.now(),
        },
      ],
    },
    {
      columnId: "2",
      title: "In Progress",
      cards: [
        {
          belongsToColumn: "2",
          title: "Make a trello board inprogress",
          description: "We need to make a Camden, NJ board inprogress",
          due_date: Date.now(),
        },
        {
          belongsToColumn: "2",
          title: "Make a trello board inprogress33333",
          description: "We need to make a Camden, NJ board inprogress3333",
          due_date: Date.now(),
        },
      ],
    },
    {
      columnId: "3",
      title: "Done",
      cards: [
        // {
        //   belongsToColumn: "3",
        //   title: "Make a trello board done",
        //   description: "We need to make a Camden, NJ board done",
        //   due_date: Date.now(),
        // },
      ],
    },
  ]); // Complex state containing user data of columns/cards/etc

  const dynamicColumnDesktop = 4; // Math.floor(board.length) This will be 12 divided by the number of columns rounded down.
  const dynamicColumnMobile = 6; // Math.floor(board.length) This will be 12 divided by the number of columns rounded down.

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (
      result.destination.droppableId === result.source.droppableId &&
      result.destination.index === result.source.index
    ) {
      return;
    }

    const sourceColumn = board.find((column) => column.columnId === result.source.droppableId)
    const destinationColumn = board.find((column) => column.columnId === result.destination.droppableId)
    const draggedCard = sourceColumn.cards.find(card => card.title === result.draggableId)
    
    if (sourceColumn === destinationColumn) {
      const cards = Array.from(sourceColumn.cards)
      cards.splice(result.source.index, 1)
      cards.splice(result.destination.index, 0, draggedCard)
  
      const updatedColumn = {
        ...sourceColumn,
        cards: cards
      }
  
      const updatedState = () => {
        const columns = Array.from(board)
        const columnIndex = columns.findIndex((column) => column.columnId === updatedColumn.columnId )
        columns[columnIndex] = updatedColumn
        return columns
      }
  
      setBoard(updatedState())
      return;
    }
    
    const sourceCards = Array.from(sourceColumn.cards)
    sourceCards.splice(result.source.index, 1)
    const newSourceColumn = {
      ...sourceColumn,
      cards: sourceCards
    }

    const destinationCards = Array.from(destinationColumn.cards)
    destinationCards.splice(result.destination.index, 0, draggedCard)
    const newDestinationColumn = {
      ...destinationColumn,
      cards: destinationCards
    }

    const updatedState = () => {
      const columns = Array.from(board)
      const newDestinationIndex = columns.findIndex((column) => column.columnId === newDestinationColumn.columnId)
      const newSourceIndex = columns.findIndex((column) => column.columnId === newSourceColumn.columnId)
      columns[newDestinationIndex] = newDestinationColumn
      columns[newSourceIndex] = newSourceColumn
      return columns
    }

    setBoard(updatedState())
  }

  const mappedColumns = columnOrder.map((columnId) => {
    const column = board.find((column) => column.columnId === columnId)

    return (
      <Grid
        item
        key={column.columnId}
        xs={dynamicColumnMobile}
        md={dynamicColumnDesktop}
      >
        <Column column={column} />
      </Grid>
    );
  });

  return (
    <Grid container>
      <DragDropContext onDragEnd={onDragEnd}>
        {mappedColumns}
      </DragDropContext>
    </Grid>
  );
};

export default ContainerOfColumns;
