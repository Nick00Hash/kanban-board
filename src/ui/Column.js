import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import ModalForm from "./ModalForm"
import CardTile from './CardTile'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height:400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function SimpleModal(props) {
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
      <Button variant="contained" onClick={handleOpen} color="primary">+</Button>
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
          />
        </p>
      </div>
        </Modal>
    </div>
  );
}

const Column = (props) => {
  const mappedCards = props.column.cards.map(card=> {
    return (
      <div key={card.id}>
        <CardTile key={card.title} card={card} />
      </div>
    )
  })

  return (
    <div>
      {mappedCards}
      <SimpleModal
        column={props.column}
        addNewCard={props.addNewCard}
      >
        <Button variant="contained" >
        </Button>
      </SimpleModal>
    </div>
  )
}

export default Column
