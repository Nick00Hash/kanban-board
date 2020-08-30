import React, { useState } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import ContainerOfColumns from "./ui/ContainerOfColumns";

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

  const globalIncrement = () => {
    setGlobalCount(globalCount + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appContainer}>
        <ContainerOfColumns
          globalCount={globalCount}
          globalIncrement={globalIncrement}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
