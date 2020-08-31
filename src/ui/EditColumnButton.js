import React, { useState } from 'react'

import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const EditColumnButton = props => {
  const [open, setOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(props.title)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setNewTitle(event.currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newTitle === "") {
      handleClose()
      return
    }
    props.editColumnTitle(props.columnId, newTitle)
    handleClose()
  }
  
  return(
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change Column Title</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Column Title"
              value={newTitle}
              onChange={handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type='submit' color="primary">
              Change Title
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default EditColumnButton