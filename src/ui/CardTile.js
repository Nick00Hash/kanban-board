import React from 'react';
import { Draggable } from 'react-beautiful-dnd'
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import ModalForm from './ModalForm'

const useStyles = makeStyles({
  root: {
    maxWidth: '90%',
    marginLeft: '5%',
    backgroundColor: "#fce4ec",
  },
  rootColor: {
    maxWidth: '90%',
    backgroundColor: 'lightgreen'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  background: {},
});

const CardTile = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Draggable draggableId={props.card.title} index={props.index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card className={ (snapshot.isDragging ? classes.rootColor : classes.root) }>
            <CardContent>
              <Typography 
                className={classes.title} 
                color="textSecondary" 
                gutterBottom
              >
                {props.card.title}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default CardTile;
