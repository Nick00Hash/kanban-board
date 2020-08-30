import React, { useState } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import DATA from "./DATA";
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
    background: {
      paper: "#fff8e1",
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
  const [globalCount, setGlobalCount] = useState(4);
  const [board, setBoard] = useState(DATA);

  const globalIncrement = () => {
    setGlobalCount(globalCount + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appContainer}>
        <RaisedAppBar />
        <ContainerOfColumns
          DATA={DATA}
          globalCount={globalCount}
          globalIncrement={globalIncrement}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
