import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import AddBoxIcon from "@material-ui/icons/AddBox";

const NewColumnButton = (props) => {
  const { board, setBoard, globalCount, globalIncrement } = props;

  const addNewColumn = () => {
    let idString = globalCount.toString();
    setBoard([
      ...board,
      {
        columnId: idString,
        title: "Click to change Title",
        cards: [],
      },
    ]);
    globalIncrement();
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<AddBoxIcon />}
      onClick={addNewColumn}
    >
      Add Column
    </Button>
  );
};

export default NewColumnButton;
