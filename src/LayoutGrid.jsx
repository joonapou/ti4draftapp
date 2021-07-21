import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import PickOrder from './PickOrder.jsx'
import Picks from './Picks.jsx'
import PickButton from './PickButton.jsx'
import Galaxy from './Galaxy.js'
import Group from './Group.js'
import CreateGame from './CreateGame.js'
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import Typography from '@material-ui/core/Typography';
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
   User(where: {auth0_id: {_eq: $auth0Id}}) {
    auth0_id
    groupId
    name
    user_id
    GameUsers {
      banningDone
      gameId
      gameuser_id
      pickId
      pickOrder
      seatNumber
      userId
      Bans {
        ban_id
        banned
      }
      Pick {
        pick_id
        picked
        Faction {
          faction_id
          name
          url
        }
      }
      Game {
        availableSeats
        bansDone
        bansLower
        bansUpper
        draftStarted
        gameAdmin
        game_id
        groupId
        hsLabels
        mapString
        picksDone
        userPicking
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
 localStorage.setItem('gameuserId', 1)
 console.log(data)
 if(data.User[0].groupId !== null){
  if(data.User[0].GameUsers.length === 1){
    console.log("1")
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
  } else if (data.User[0].GameUsers.length >1){
    console.log("2")
    return(
      <Typography variant="h6" className={classes.title}>
                handle multiple games
              </Typography>
      )
    
  } else {
    console.log("3")
    return(
      // join or create a game
    <CreateGame data={data}/>
    )
  }
  } else {
    console.log("4")
    return(
    <Group data={data}/>
      )
  }
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