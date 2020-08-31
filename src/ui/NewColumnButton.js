import React from "react";
import Button from "@material-ui/core/Button";

import AddBoxIcon from "@material-ui/icons/AddBox";

const NewColumnButton = (props) => {
  const { board, setBoard, globalCount, globalIncrement, addNewId } = props;

  const colors = [
    "#1BB0CE",
    "#6A5E72",
    "#9BDAB3",
    "#CDE4B3",
    "#D9CF85",
    "#EFB198",
    "#FF9E9D",
    "#30C4C9",
    "#FFBE40",
    "#ECF081",
    "#B3CC57",
    "#FF9D2E",
    "#FF7474",
    "#F59B71",
    "#C7C77F",
    "#E0E0A8",
    "#6F8B94",
    "#ABBB9F",
    "#E6EBA9",
    "#706482",
    "#86AC97",
    "#AD849A",
    "#FC913A",
    "#F9D423",
    "#EDE574",
    "#E1F5C4",
    "#429398",
    "#B0A18F",
    "#DFCDB4"
  ]

  const addNewColumn = () => {
    let idString = globalCount.toString();
    addNewId(idString)
    setBoard([
      ...board,
      {
        columnId: idString,
        title: "Click Edit to Change Title",
        cards: [],
        color: colors[Math.floor(Math.random() * colors.length)]
      },
    ]);
    globalIncrement();
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
