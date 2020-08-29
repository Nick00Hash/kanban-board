import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

const RemoveColumnButton = (props) => {
  const { board, setBoard, columnId } = props;

  const removeColumn = () => {
    let remainingColumns = board.filter((column) => {
      return column.columnId != columnId;
    });
    setBoard(remainingColumns);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<IndeterminateCheckBoxIcon />}
      onClick={removeColumn}
    >
      Delete Column
    </Button>
  );
};

export default RemoveColumnButton;
