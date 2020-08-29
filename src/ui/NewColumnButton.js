import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import AddBoxIcon from "@material-ui/icons/AddBox";

const NewColumnButton = (props) => {
  const { board, setBoard } = props;

  const addNewColumn = () => {
    setBoard([
      ...board,
      {
        columnId: 1,
        title: "Click to change Title",
        cards: [],
      },
    ]);
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

export default NewColumnButton;
