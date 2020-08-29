import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import AddBoxIcon from "@material-ui/icons/AddBox";

const RemoveColumnButton = () => {
  const { board, setBoard, columnId } = props;

  const removeColumn = () => {
    let remainingColumns = board.filter((column) => {
      column.columnId != columnId;
    });
    setBoard(remainingColumns);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddBoxIcon />}
      onClick={addNewColumn}
    >
      Add Column
    </Button>
  );
};

export default RemoveColumnButton;
