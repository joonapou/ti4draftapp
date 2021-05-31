import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import PickOrder from '../components/PickOrder.jsx'

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
   function FormMidRow({users}) {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Pick screen</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Galaxy</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><PickOrder users={users} /> </Paper>
        </Grid>
      </React.Fragment>
    );
  }
   function FormBottomRow({users}) {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Picks</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Item 3</Paper>
        </Grid>
      </React.Fragment>
    );
  }
export default function LayoutGrid({users}) {
const classes = useStyles();
return (


    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormTopRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormMidRow users={users} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormBottomRow users={users}/>
        </Grid>
      </Grid>
    </div>

)
}