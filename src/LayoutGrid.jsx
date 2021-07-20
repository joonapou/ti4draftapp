import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import PickOrder from './PickOrder.jsx'
import Picks from './Picks.jsx'
import PickButton from './PickButton.jsx'
import Galaxy from './Galaxy.js'

import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import {Suspense} from 'react';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery
} from 'react-relay/hooks';

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
  const LayoutGridBasicQuery = graphql `
  query LayoutGridBasicQuery($auth0Id: String) {
  User(where: {auth0_id: {_eq :$auth0Id}}) {
    auth0_id
    banningDone
    custodian
    name
    pickOrder
    seatNumber
    user_id
    Bans {
      ban_id
      banned
    }
    Faction {
      faction_id
      name
    }
    Group {
      Games {
        bansDone
        bansLower
        bansUpper
        draftStarted
        picksDone
        userPicking
        mapString
        hsLabels
        availableSeats
        User {
          name
        }
      }
    }
  }
}`;

const preloadedQuery = loadQuery(RelayEnvironment, LayoutGridBasicQuery, {
  auth0Id: localStorage.getItem('auth0:id_token:sub')
});
   function FormMidRow({data}) {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><PickButton data={data}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Galaxy data={data}/></Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.paper}><PickOrder/> </Paper>
        </Grid>
      </React.Fragment>
    );
  }
   function FormBottomRow({data}) {
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

function LayoutGridChild(props) {
 const classes = useStyles();
 const data = usePreloadedQuery(LayoutGridBasicQuery, props.preloadedQuery)
 console.log("data:", data)
return (
    <div className={classes.root}>
        <Grid container spacing={3}>
          <FormMidRow data={data}/>
        </Grid>
        <Grid container spacing={3}>
          <FormBottomRow data={data}/>
        </Grid>
    </div>

)
}

export default function LayoutGrid(props){
  return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <LayoutGridChild preloadedQuery={preloadedQuery}/>
    </Suspense>
  </RelayEnvironmentProvider>
  );
}