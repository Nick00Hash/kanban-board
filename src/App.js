import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import ContainerOfColumns from "./ui/ContainerOfColumns";
import RaisedAppBar from "./ui/AppBar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#81d4fa",
    },
    secondary: {
      main: "#ffecb3",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  appContainer: {
    marginLeft: "2rem",
    marginRight: "2rem",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appContainer}>
        <RaisedAppBar />
        <ContainerOfColumns />
      </div>
    </ThemeProvider>
  );
};

export default App;
