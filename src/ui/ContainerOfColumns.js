import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Column from "./Column";
import RaisedAppBar from "./AppBar";

const useStyles = makeStyles({
  columnContainer: {
    paddingTop: "4rem",
    // marginTop: "80px",
  },
});

const ContainerOfColumns = (props) => {
  const classes = useStyles();
  const { globalCount, globalIncrement } = props;

  const [columnOrder, setColumnOrder] = useState(["1", "2", "3"]);
  const [board, setBoard] = useState([
    {
      columnId: "1",
      title: "To-Do",
      cards: [
        {
          id: "44",
          title: "Make a trello board",
          description: "We need to make a Camden, NJ board",
          due_date: Date.now(),
        },
        {
          id: "33",
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
          id: "22",
          title: "Make a trello board inprogress",
          description: "We need to make a Camden, NJ board inprogress",
          due_date: Date.now(),
        },
        {
          id: "11",
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

  const addNewCard = (newCard, columnId) => {
    let newBoard = Array.from(board);
    let columnIndex = newBoard.findIndex(
      (column) => column.columnId === columnId
    );
    newBoard[columnIndex].cards.push(newCard);
    setBoard(newBoard);
  };

  const dynamicColumnDesktop = 4; // Math.floor(board.length) This will be 12 divided by the number of columns rounded down.
  const dynamicColumnMobile = 12; // Math.floor(board.length) This will be 12 divided by the number of columns rounded down.

  const addNewId = (Id) => {
    setColumnOrder([...columnOrder, Id]);
  };

  const removeId = (Id) => {
    setColumnOrder(columnOrder.filter((columnId) => columnId !== Id));
  };

  const removeCard = (id, columnId) => {
    let newBoard = Array.from(board);
    let columnIndex = newBoard.findIndex(
      (column) => column.columnId === columnId
    );
    newBoard[columnIndex].cards = newBoard[columnIndex].cards.filter(
      (card) => card.id !== id
    );
    setBoard(newBoard);
  };

  const moveCard = (
    cardId,
    sourceColumnOrderIndex,
    destinationColumnOrderIndex
  ) => {
    const newBoard = Array.from(board);
    const sourceColumnIndex = newBoard.findIndex(
      (column) => column.columnId === columnOrder[sourceColumnOrderIndex]
    );
    const destinationColumnIndex = newBoard.findIndex(
      (column) => column.columnId === columnOrder[destinationColumnOrderIndex]
    );
    const movedCard = newBoard[sourceColumnIndex].cards.find(
      (card) => card.id === cardId
    );
    newBoard[sourceColumnIndex].cards = newBoard[
      sourceColumnIndex
    ].cards.filter((card) => card.id !== cardId);
    newBoard[destinationColumnIndex].cards.push(movedCard);
    setBoard(newBoard);
  };

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

    if (result.type === "column") {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(result.source.index, 1);
      newColumnOrder.splice(result.destination.index, 0, result.draggableId);
      setColumnOrder(newColumnOrder);
      return;
    }

    const sourceColumn = board.find(
      (column) => column.columnId === result.source.droppableId
    );
    const destinationColumn = board.find(
      (column) => column.columnId === result.destination.droppableId
    );
    const draggedCard = sourceColumn.cards.find(
      (card) => card.id === result.draggableId
    );
    
    if (sourceColumn === destinationColumn) {
      const cards = Array.from(sourceColumn.cards);
      cards.splice(result.source.index, 1);
      cards.splice(result.destination.index, 0, draggedCard);

      const updatedColumn = {
        ...sourceColumn,
        cards: cards,
      };

      const updatedState = () => {
        const columns = Array.from(board);
        const columnIndex = columns.findIndex(
          (column) => column.columnId === updatedColumn.columnId
        );
        columns[columnIndex] = updatedColumn;
        return columns;
      };

      setBoard(updatedState());
      return;
    }

    const sourceCards = Array.from(sourceColumn.cards);
    sourceCards.splice(result.source.index, 1);
    const newSourceColumn = {
      ...sourceColumn,
      cards: sourceCards,
    };

    const destinationCards = Array.from(destinationColumn.cards);
    destinationCards.splice(result.destination.index, 0, draggedCard);
    const newDestinationColumn = {
      ...destinationColumn,
      cards: destinationCards,
    };

    const updatedState = () => {
      const columns = Array.from(board);
      const newDestinationIndex = columns.findIndex(
        (column) => column.columnId === newDestinationColumn.columnId
      );
      const newSourceIndex = columns.findIndex(
        (column) => column.columnId === newSourceColumn.columnId
      );
      columns[newDestinationIndex] = newDestinationColumn;
      columns[newSourceIndex] = newSourceColumn;
      return columns;
    };

    setBoard(updatedState());
  };

  const mappedColumns = columnOrder.map((columnId, index) => {
    const column = board.find((column) => column.columnId === columnId);
    let lastColumn = false;
    if (index + 1 === columnOrder.length) {
      lastColumn = true;
    }

    return (
      <Grid
        item
        key={column.columnId}
        xs={dynamicColumnMobile}
        md={dynamicColumnDesktop}
      >
        <Column
          column={column}
          columnId={column.columnId}
          index={index}
          setBoard={setBoard}
          removeId={removeId}
          board={board}
          addNewCard={addNewCard}
          removeCard={removeCard}
          moveCard={moveCard}
          lastColumn={lastColumn}
        />
      </Grid>
    );
  });

  return (
    <>
      <RaisedAppBar
        board={board}
        setBoard={setBoard}
        addNewId={addNewId}
        globalCount={globalCount}
        globalIncrement={globalIncrement}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="columns-board"
          direction="horizontal"
          type="column"
          className={classes.droppable}
        >
          {(provided) => (
            <Grid
              container
              spacing={5}
              justify="space-around"
              className={classes.columnContainer}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {mappedColumns}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ContainerOfColumns;
