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

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    backgroundColor: "#fce4ec",
  },
  rootColor: {
    minWidth: 275,
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
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default CardTile;
