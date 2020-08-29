import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ContainerOfColumns from "./ui/ContainerOfColumns";
import RaisedAppBar from "./ui/AppBar";

const useStyles = makeStyles({
  appContainer: {
    marginLeft: "2rem",
    marginRight: "2rem",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <RaisedAppBar />
      <ContainerOfColumns />
    </div>
  );
};

export default App;
