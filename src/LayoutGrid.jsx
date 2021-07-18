import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import PickOrder from './PickOrder.jsx'
import Picks from './Picks.jsx'
import PickButton from './PickButton.jsx'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Galaxy from './Galaxy.js'

import Button from '@material-ui/core/Button';
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
    height: '100%',
    width: '100%'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

   function FormMidRow() {
    const classes = useStyles();
    //const { data: gameInfo, error: gameInfoError }  = getGameData();
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><PickButton/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Galaxy/></Paper>
        </Grid>
        <Grid item xs={4} >
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
          <Paper className={classes.paper}>User Info</Paper>
        </Grid>
      </React.Fragment>
    );
  }
// export class LayoutGrid extends Component {
//  render(){
//   const { classes } = this.props;
// return (
//     <div className={classes.root}>
//         <Grid container  spacing={3}>
//           <FormMidRow/>
//         </Grid>
//         <Grid container spacing={3}>
//           <FormBottomRow/>
//         </Grid>
//     </div>

// )
// }
// }
// LayoutGrid.propTypes = {
//   classes: PropTypes.object.isRequired
// }
// export default withStyles(styles)(LayoutGrid);


export default function LayoutGrid() {
 const classes = useStyles();
return (
    <div className={classes.root}>
        <Grid container spacing={3}>
          <FormMidRow/>
        </Grid>
        <Grid container spacing={3}>
          <FormBottomRow/>
        </Grid>
    </div>

)
}