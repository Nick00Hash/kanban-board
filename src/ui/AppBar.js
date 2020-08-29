import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

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
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const RaisedAppBar = (props) => {
  const { board, setBoard } = props;

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography className={classes.title} variant="h6">
              Welcome to your Kanban Board!
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <Toolbar />
      <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container> */}
    </React.Fragment>
  );
};

export default RaisedAppBar;
