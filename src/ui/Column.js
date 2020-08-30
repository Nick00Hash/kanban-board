import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Grid, Typography, Paper, Button, Modal } from "@material-ui/core";

import ModalForm from "./ModalForm";
import CardTile from "./CardTile";
import RemoveColumnButton from "./RemoveColumnButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  card: {
    marginBottom: "10px",
  },
  column: {
    minHeight: "200px",
    paddingBottom: "1rem",
  },
  columnColored: {
    minHeight: "200px",
    transition: "background-color 0.3s ease",
    backgroundColor: "yellow",
    paddingBottom: "1rem",
  },
  columnTitle: {
    textAlign: "center",
    margin: "1rem",
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const SimpleModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} color="primary">
        +
      </Button>
      <Modal
        id
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <p id="simple-modal-title">
            <ModalForm
              id={props.column.columnId}
              addNewCard={props.addNewCard}
              handleClose={handleClose}
            />
          </p>
        </div>
      </Modal>
    </div>
  );
};

const Column = (props) => {
  const classes = useStyles();
  const { column } = props;
  const mappedCards = column.cards.map((card, index) => {
    return (
      <Grid className={classes.card} key={card.id}>
        <CardTile
          card={card}
          index={index}
          removeCard={props.removeCard}
          columnId={props.column.columnId}
          moveCard={props.moveCard}
          columnIndex={props.index}
          lastColumn={props.lastColumn}
        />
      </Grid>
    );
  });

  return (
    <Draggable draggableId={props.column.columnId} index={props.index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper>
            <span className={classes.inline}>
              <Typography
                className={classes.columnTitle}
                variant="h4"
                {...provided.dragHandleProps}
              >
                {props.column.title}{" "}
                <RemoveColumnButton
                  board={props.board}
                  setBoard={props.setBoard}
                  removeId={props.removeId}
                  columnId={props.column.columnId}
                />
              </Typography>
            </span>
            <Droppable droppableId={props.column.columnId} type="card">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={
                    snapshot.isDraggingOver
                      ? classes.columnColored
                      : classes.column
                  }
                >
                  {mappedCards}
                  {provided.placeholder}
                  <SimpleModal
                    column={props.column}
                    addNewCard={props.addNewCard}
                  >
                    <Button variant="contained"></Button>
                  </SimpleModal>
                </div>
              )}
            </Droppable>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
