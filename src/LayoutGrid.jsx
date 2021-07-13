import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import PickOrder from './PickOrder.jsx'
import Picks from './Picks.jsx'
import PickButton from './PickButton.jsx'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import useSWR from "swr";



const fetcher = (url) => fetch(url).then((r) => r.json())
// const GetData = (endpoint) => {
//   const { data, error } = useSWR(endpoint, fetcher, {revalidateOnFocus : false, revalidateOnMount: false})
//   return { data: data, error: error }

// }
// const getGameData = () => GetData('api/game');
// const getBanData = () => GetData('api/ban');

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
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

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
    //const { data: gameInfo, error: gameInfoError }  = getGameData();
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><PickButton/></Paper>
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
    console.log("FormBottomRow")
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
export class LayoutGrid extends Component {
 render(){
  console.log("LayoutGrid")
  const { classes } = this.props;
return (
    <div className='{classes.root}'>
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
}
LayoutGrid.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(LayoutGrid);