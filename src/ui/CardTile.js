import React, { useState } from "react";
import "date-fns";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize
} from "@material-ui/core";

import ModalForm from "./ModalForm";
import CardAccordion from "./CardAccordion";

import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';


const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    marginLeft: "5%",
    backgroundColor: "#fce4ec",
  },
  rootColor: {
    maxWidth: '90%',
    backgroundColor: 'lightgreen',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
//  title: {
//    fontSize: 14,
//    display: 'flex',
//    justifyContent: 'space-between',
//    alignItems: 'center',
//  },
  pos: {
    marginBottom: 12,
  },
  background: {},
});

const CardTile = (props) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles();
  const { card } = props;
  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
    const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
    const handleDelete = () => {
    props.removeCard(card.id, props.columnId)
    handleClose()
  }
  
  return (
    <Draggable draggableId={card.title} index={props.index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card
            className={snapshot.isDragging ? classes.rootColor : classes.root}
          >
            <CardContent>
              <Typography className={classes.title} gutterBottom variant="h6">
                {card.title}

              <IconButton
                size='small'
                onClick={handleClickOpen}
              >
                <CloseTwoToneIcon/>
              </IconButton>
              </Typography>
            </CardContent>
            <CardAccordion
              description={card.description}
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            />
          </Card>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
           >
            <DialogTitle id="alert-dialog-title">{"Delete this card?"}</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                No
              </Button>
              <Button onClick={handleDelete} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </Draggable>
  );
};

export default CardTile;
