import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd'
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
  DialogTitle,
} from "@material-ui/core";
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';

const useStyles = makeStyles({
  root: {
    maxWidth: '90%',
    marginLeft: '5%',
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
  title: {
    fontSize: 14,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  background: {},
});

const CardTile = (props) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    props.removeCard(props.card.id, props.columnId)
    handleClose()
  }

  const handleMoveRight = () => {
    if (props.lastColumn) {
      return
    }
    props.moveCard(props.card.id, props.columnIndex, props.columnIndex + 1)
  }

  const handleMoveLeft = () => {
    if (props.columnIndex === 0) {
      return
    }
    props.moveCard(props.card.id, props.columnIndex, props.columnIndex - 1)
  }

  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card className={ (snapshot.isDragging ? classes.rootColor : classes.root) }>
            <CardContent>
              <Typography 
                className={classes.title} 
                color="textSecondary" 
                gutterBottom
              >
                {props.card.title}
              <IconButton
                size='small'
                onClick={handleClickOpen}
              >
                <CloseTwoToneIcon/>
              </IconButton>
              <Button onClick={handleMoveRight}>
                right
              </Button>
              <Button onClick={handleMoveLeft}>
                left
              </Button>
              </Typography>
            </CardContent>
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
