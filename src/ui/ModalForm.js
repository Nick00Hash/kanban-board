import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  spacing: {
    margin: "5px",
  },
});

const ModalForm = (props) => {
  const { handleClose } = props;
  const [newCard, setNewCard] = useState({
    title: "",
    description: "",
    id: Date.now(),
  });

  const handleFieldChange = (event) => {
    setNewCard({
      ...newCard,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addNewCard(newCard, props.id);
    handleClose();
  };

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={classes.spacing}
        id="title"
        label="Title"
        variant="outlined"
        value={newCard.title}
        onChange={handleFieldChange}
      />
      <div />
      <TextField
        className={classes.spacing}
        id="description"
        label="Description"
        variant="outlined"
        value={newCard.description}
        onChange={handleFieldChange}
      />
      <div />
      <Button type="submit" variant="contained" color="primary">
        New Card
      </Button>
    </form>
  );
};

export default ModalForm;
