import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Grid, Typography, Paper, Button, Modal, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import ModalForm from "./ModalForm";
import CardTile from "./CardTile";
import RemoveColumnButton from "./RemoveColumnButton";
import EditColumnButton from "./EditColumnButton";

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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    overflowWrap: "break-word",
    maxWidth: "14rem",
  },
  addCardButton: {
    backgroundColor: "#81d4fa",
    marginLeft: ".2rem",
  },
  columnDiv: {
    width: '23rem'
  }
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
      <Fab onClick={handleOpen} className={classes.addCardButton}>
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h5">Add New Card</Typography>
          <ModalForm
            id={props.column.columnId}
            addNewCard={props.addNewCard}
            handleClose={handleClose}
          />
        </div>
      </Modal>
    </div>
  );
};

const Column = (props) => {
  const classes = useStyles();
  const { column, widthMinus } = props;
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
        <div {...provided.draggableProps} ref={provided.innerRef} className={classes.columnDiv}>
          <Paper>
            <span className={classes.inline}>
              <Typography
                className={classes.columnTitle}
                variant="h4"
                {...provided.dragHandleProps}
                style={{
                  backgroundColor: props.column.color,
                }}
              >
                <SimpleModal
                  column={props.column}
                  addNewCard={props.addNewCard}
                >
                  <Button variant="contained" />
                </SimpleModal>
                <div>
                  <Typography variant="h5" className={classes.titleText}>
                    {props.column.title}{" "}
                  </Typography>
                </div>
                <div>
                  <EditColumnButton
                    editColumnTitle={props.editColumnTitle}
                    title={props.column.title}
                    columnId={props.column.columnId}
                  />
                  <RemoveColumnButton
                    board={props.board}
                    setBoard={props.setBoard}
                    removeId={props.removeId}
                    columnId={props.column.columnId}
                    widthMinus={widthMinus}
                  />
                </div>
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
