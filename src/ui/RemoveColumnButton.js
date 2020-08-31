import React, { useState } from "react";
import { 
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  IconButton
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  remove: {
    backgroundColor: "#ff1744",
  },
});

const RemoveColumnButton = (props) => {
  const { board, setBoard, columnId, removeId } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const removeColumn = () => {
    removeId(columnId)
    let remainingColumns = board.filter((column) => {
      return column.columnId !== columnId;
    });
    setBoard(remainingColumns);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="add"
        onClick={handleOpen}
      >
        <DeleteForeverIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete this column?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={removeColumn} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RemoveColumnButton;
