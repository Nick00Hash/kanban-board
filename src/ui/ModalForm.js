import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
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
    id: Date.now().toString(),
  });
  const [error, setError] = useState(null)

  const handleFieldChange = (event) => {
    setNewCard({
      ...newCard,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newCard.title === "") {
      setError("Title cannot be empty")
      return
    }
    props.addNewCard(newCard, props.id);
    handleClose();
  };


  const classes = useStyles();

  let errorMsg = <></>
  if (error) {
    errorMsg = <Typography color='error' >{error}</Typography>
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={classes.spacing}
        id="title"
        label="Title"
        variant="outlined"
        fullWidth
        value={newCard.title}
        onChange={handleFieldChange}
      />
      <div />
      <TextField
        className={classes.spacing}
        id="description"
        label="Description"
        variant="outlined"
        multiline
        fullWidth
        value={newCard.description}
        onChange={handleFieldChange}
      />
      <div />
      {errorMsg}
      <Button type="submit" variant="contained" color="primary">
        New Card
      </Button>
    </form>
  );
};

export default ModalForm;
