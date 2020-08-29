import React, { useState } from 'react'
import { TextField } from "@material-ui/core"
import Button from '@material-ui/core/Button';

const ModalForm = () => {
  const [newCard, setNewCard] = useState({
    title: "",
    description: ""
  })

  const handleFieldChange = (event) => {
    setNewCard({
      ...newCard,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newCard)
    setNewCard(newCard)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        id="title" 
        label="Title" 
        variant="outlined"
        value={newCard.title}
        onChange={handleFieldChange}
      />
      <div/>
      <TextField
        id="description"
        label="Description"
        variant="outlined"
        value={newCard.description}
        onChange={handleFieldChange}
      />
      <div/>
      <Button type="submit" variant="contained" color="primary">
        Submit A New Card
      </Button> 
    </form>
    
  );
}

export default ModalForm