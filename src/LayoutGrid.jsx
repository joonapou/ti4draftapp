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
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import {Suspense} from 'react';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import {useParams, useHistory, useLocation} from 'react-router-dom';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery
} from 'react-relay/hooks';
var jwt = require('jsonwebtoken');
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
  query LayoutGridBasicQuery($gameId: Int, $auth0Id: String) {
  User(where: {auth0_id: {_eq: $auth0Id}}) {
    auth0_id
    groupId
    name
    user_id
    GameUsers(where: {Game: {game_id: {_eq: $gameId}}}) {
      banningDone
      gameId
      gameuser_id
      pickId
      pickOrder
      seatNumber
      Bans {
        ban_id
        banned
        Faction {
          name
          url
          faction_id
        }
      }
      Pick {
        factionId
        pick_id
        picked
        Faction {
          name
          faction_id
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
        gameCreated
        game_id
        groupId
        hsLabels
        mapString
        name
        picksDone
        userPicking
        GameUsers {
          userId
          gameuser_id
          banningDone
          pickOrder
          seatNumber
        }
        Bans {
          banned
          ban_id
          factionId
        }
      }
    }
  }
}`;

   function FormMidRow(data) {
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
          <Paper className={classes.paper}><PickOrder data={data}/> </Paper>
        </Grid>
      </React.Fragment>
    );
  }
   function FormBottomRow(data) {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={8}>
          <Paper className={classes.paper}><Picks data={data}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>User Info</Paper>
        </Grid>
      </React.Fragment>
    );
  }

function LayoutGridChild(props) {
 const classes = useStyles();
 const {user} = useAuth0();
 var history = useHistory();
 console.log("history", history)
 const gameId = history.location.state ? history.location.state.gameId : window.sessionStorage.getItem("gameId")
 var id = 1
 const data = useLazyLoadQuery(LayoutGridBasicQuery, {
  auth0Id: user.sub,
  gameId: gameId})
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
      <LayoutGridChild/>
    </Suspense>
  </RelayEnvironmentProvider>
  );
}

