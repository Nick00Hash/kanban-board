import React, { useState } from "react";
import "date-fns";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

import ModalForm from "./ModalForm";
import CardAccordion from "./CardAccordion";

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    marginLeft: "5%",
    backgroundColor: "#fce4ec",
  },
  rootColor: {
    maxWidth: "90%",
    backgroundColor: "lightgreen",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  background: {},
});

const CardTile = (props) => {
  const classes = useStyles();
  const { card } = props;
  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  console.log(selectedDate);
  return (
    <Draggable draggableId={card.title} index={props.index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card
            className={snapshot.isDragging ? classes.rootColor : classes.root}
          >
            <CardContent>
              <Typography className={classes.title} gutterBottom variant="h6">
                {card.title}
              </Typography>
            </CardContent>
            <CardAccordion
              description={card.description}
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            />
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default CardTile;
