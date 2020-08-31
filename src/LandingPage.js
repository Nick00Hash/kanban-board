import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import AlexPhoto from './images/Alex.png'
import NickPhoto from './images/Nick.jpeg'
import AndrewPhoto from './images/Andrew.jpeg'
import Button from '@material-ui/core/Button';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    left: "10%",
    width: "80%",
    height: "620px",
    position: "absolute",
    textAlign: "center",
    backgroundColor: "#ffecb3",
    },
    paper: {
      cursor: "pointer",
      marginLeft: "80px",
      positon: "absolute",
      left: "30%",
      
    },
    center: {
      textAlign: "center",
      fontSize: "20px"
    },
    spacer: {
      margin: "10px",
      fontFamily: "'Merriweather', 'serif'"
    },
    rowSpacer: {
      margin: "8px",
      fontSize: "25px",
      fontFamily: "'Merriweather', 'serif'"
    },
    blueButton: {
      backgroundColor: "#81D4FA",
      color: "white",
      width: "90%"
    },
    alexPhotoStyle: {
      backgroundRepeat: "no-repeat",
      position: "relative",
      width: "115px",
      borderRadius: "50px",
      left: "25%"
    },
    adjust: {
      marginLeft: 50
    }
}));

const LandingPage = props => {
  const classes = useStyles(props);
  return(
    <Paper  className={classes.root}>
    <div className={classes.page}>
      <div className={classes.center}>
          <div className={classes.rowSpacer}>
            Welcome to your personal Kan-ban Board!
          </div> 
          <div>
            Each column on the board represents a different stage of your workflow.<br/>The cards go through the workflow until their full completion.<br/>
          The card inside the columns are a visual representation of tasks. Each card contains information about the task and its status, such as Todo, In Progress, Done, etc.
          </div>
         <Button variant="contained" href="/kanban" className={classes.blueButton} >Create A Board!</Button>
        <div className={classes.spacer}>Instructions: </div>
          <div className={classes.rowSpacer}>
          <DeleteForeverSharpIcon /> - Deletes column from the page
        </div>
        <div className={classes.rowSpacer}>
          <strong>+</strong> - Adds new card to your List
        </div>
        <div className={classes.rowSpacer}>
          <Button variant="contained"><AddBoxRoundedIcon/> ADD COLUMN</Button> - Adds new column to the page
        </div>
        <div className={classes.rowSpacer}>
          <CreateSharpIcon /> - Allows you to edit the title of your column
        </div>
      </div>
        <Grid container spacing={3} className={classes.adjust}>
          <Grid item xs={3}>
              <img src={AlexPhoto} className={classes.alexPhotoStyle} alt=""/>
              <p className={classes.paper}> Alex- Launch Academy BootCamp Grad</p>
            <a href="https://github.com/LegioTitanicus"><GitHubIcon className={classes.paper} /></a>
            <a href="https://www.linkedin.com/in/alex-bernstein/"><LinkedInIcon className={classes.paper} /></a>
          </Grid>
          <Grid item xs={3}>
            <img src={NickPhoto} className={classes.alexPhotoStyle} alt=""/>
            <p className={classes.paper}>Nick- Launch Academy BootCamp Grad</p>
            <a href="https://github.com/NickDev00"><GitHubIcon className={classes.paper} /></a>
            <a href="https://www.linkedin.com/in/nic-ashley/"><LinkedInIcon className={classes.paper} /></a>
          </Grid>
          <Grid item xs={3}>
            <img src={AndrewPhoto} className={classes.alexPhotoStyle} alt=""/>
            <p className={classes.paper}>Andrew- Launch Academy BootCamp Grad</p>
            <a href="https://github.com/andrewhiggins27"> <GitHubIcon className={classes.paper} ></GitHubIcon></a> 
            <a href="https://www.linkedin.com/in/andrewhiggins27/"><LinkedInIcon className={classes.paper} /></a>
          </Grid>
      </Grid>
    </div>
    </Paper>
  )
}

export default LandingPage