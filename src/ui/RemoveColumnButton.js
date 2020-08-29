import React from "react";
import { Fab } from "@material-ui/core";
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

  const removeColumn = () => {
    removeId(columnId)
    let remainingColumns = board.filter((column) => {
      return column.columnId != columnId;
    });
    setBoard(remainingColumns);
  };

  return (
    <Fab
      size="small"
      aria-label="add"
      className={classes.remove}
      onClick={removeColumn}
    >
      <DeleteForeverIcon />
    </Fab>
  );
};

export default RemoveColumnButton;
