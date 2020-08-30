import React, { useState } from "react";
// import "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import DatePicker from "./DatePicker";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#fce4ec",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  // secondaryHeading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   color: theme.palette.text.secondary,
  // },
}));

const CardAccordion = (props) => {
  const classes = useStyles();
  const { description, selectedDate } = props;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded}
        onChange={handleChange("panel1")}
        className={classes.root}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="details"
          id="accordion-details"
        >
          <Typography className={classes.secondaryHeading}>
            Due: {JSON.stringify(selectedDate).substring(1, 11)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Typography>{description}</Typography>
            <Grid item xs={12}>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CardAccordion;
