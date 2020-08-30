import React from "react";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";

const NewColumnButton = (props) => {
  const { board, setBoard, globalCount, globalIncrement, addNewId } = props;

  const addNewColumn = () => {
    let idString = globalCount.toString();
    addNewId(idString)
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
