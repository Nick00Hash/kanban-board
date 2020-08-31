import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import NewColumnButton from "./NewColumnButton";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  addColumnButton: {
    alignSelf: "flex-end",
  },
  title: {
    flexGrow: 1,
  },
});

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const RaisedAppBar = (props) => {
  const { board, setBoard, addNewId, globalCount, globalIncrement } = props;

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color='secondary'>
          <Toolbar>
            <Typography className={classes.title} variant="h6">
              Welcome to your Kanban Board!
            </Typography>
            <NewColumnButton
              board={board}
              setBoard={setBoard}
              addNewId={addNewId}
              globalCount={globalCount}
              globalIncrement={globalIncrement}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default RaisedAppBar;
