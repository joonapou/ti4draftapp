import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import PickOrder from '../components/PickOrder.jsx'
import Picks from '../components/Picks.jsx'
import PickButton from '../components/PickButton.jsx'

import useSWR from "swr";



const fetcher = (url) => fetch(url).then((r) => r.json())
const getData = (endpoint) => {
  const { data, error } = useSWR(endpoint, fetcher, {revalidateOnFocus : false, revalidateOnMount: false})
  return { data: data, error: error }

}
const getGameData = () => getData('api/game');
const getBanData = () => getData('api/ban');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function FormTopRow() {
  const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Item 1</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Item 2</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Login Info</Paper>
        </Grid>
      </React.Fragment>
    )
  }
   function FormMidRow() {
    const classes = useStyles();
    const { data: gameInfo, error: gameInfoError }  = getGameData();
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><PickButton gameinfo = {gameInfo} gameInfoError= {gameInfoError}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Galaxy</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><PickOrder/> </Paper>
        </Grid>
      </React.Fragment>
    );
  }
   function FormBottomRow() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={8}>
          <Paper className={classes.paper}><Picks/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Item 3</Paper>
        </Grid>
      </React.Fragment>
    );
  }
export default function LayoutGrid() {
const classes = useStyles();
 
return (


    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormTopRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormMidRow/>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormBottomRow/>
        </Grid>
      </Grid>
    </div>

)
}