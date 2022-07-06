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
import {Redirect} from 'react-router-dom'
import { useState, useEffect } from 'react';
import {Suspense} from 'react';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
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
  const SetupBasicQuery = graphql `
  query SetupBasicQuery($auth0Id: String, $gameUserId: Int ) {
   User(where: {auth0_id: {_eq: $auth0Id}}) {
    auth0_id
    groupId
    name
    user_id
    GameUsers(where: {gameuser_id: {_eq: $gameUserId}}) {
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



function SetupChild(props) {
 const classes = useStyles();
 const {user} = useAuth0();
 if (localStorage.getItem('gameuserId') === null){
  localStorage.setItem('gameuserId', -1)
 }
 const data = useLazyLoadQuery(SetupBasicQuery,  {
  auth0Id: user.sub,
  gameUserId: localStorage.getItem('gameuserId')
});
 console.log("setupdata", data)
 if(data.User[0].groupId !== null){
    return(
      // join or create a game
    <CreateGame data={data} history={props.history} />
    )
  } else {
    return(
    <Group data={data} />
      )
}
}
export default function Setup(props){
  return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <SetupChild history={props.history}/>
    </Suspense>
  </RelayEnvironmentProvider>
  );
}

