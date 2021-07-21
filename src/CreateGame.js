




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import {Suspense} from 'react';
import type {Environment} from 'react-relay'

import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  commitMutation

  } from 'react-relay/hooks';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));
const CreateGameMutation = graphql`
mutation CreateGameMutation($hsLabels: String, $mapString: String, $bansLower: Int, $bansUpper: Int, $groupId: Int) {
  insert_Game_one(object: {hsLabels: $hsLabels, mapString: $mapString, bansLower: $bansLower, bansUpper: $bansUpper, groupId: $groupId}) {
    game_id
    gameAdmin
    availableSeats
    bansDone
    bansLower
    bansUpper
    draftStarted
    groupId
    hsLabels
    mapString
    picksDone
    userPicking
  }
}`;
const CreateGameUserMutation = graphql`
mutation CreateGameUserMutation($gameId: Int, $userId: Int) {
  insert_GameUser_one(object: {gameId: $gameId, userId: $userId}) {
    gameId
    userId
    gameuser_id
  }
}`;
const CreateGameGameAdminMutation = graphql`
mutation CreateGameGameAdminMutation($gameUserId: Int, $gameId: Int) {
  update_Game(where: {game_id: {_eq: $gameId}}, _set: {gameAdmin: $gameUserId}) {
    affected_rows
  }
}`;

function RunMutation(environment: Environment,
  object, mutation, callback) {
  console.log(object)
  return commitMutation(environment, {
    mutation: mutation,
    variables: object,
    onCompleted: response => {callback(response)} /* Mutation completed */,
    onError: error => {console.log(error.source)} /* Mutation errored */,
  });
}

function handleSubmit(e, data, refresh){
	e.preventDefault();
  console.log(data)
	var bans_upper = parseInt(e.target[0].value)
	var bans_lower = parseInt(e.target[1].value)
	var mapstring = e.target[2].value
	var hslabels = e.target[3].value
	var mutation_object = {
		hsLabels: hslabels,
		mapString: mapstring,
		bansLower: bans_lower,
		bansUpper: bans_upper,
		groupId: data.User[0].groupId
	}
  const updateGameAdmin = (response) => {
    var gameUserId = response.insert_GameUser_one.gameuser_id
    var gameId = response.insert_GameUser_one.gameId
    var object = {
      gameUserId: gameUserId,
      gameId: gameId
    }
    RunMutation(RelayEnvironment, object, CreateGameGameAdminMutation, refresh)
    console.log(response)
    console.log(gameId, gameUserId)
  }
  const addGameGroupUser = (response) => {
    var gameId = response.insert_Game_one.game_id
    var object = {
      userId: data.User[0].user_id,
      gameId: gameId
    }
    RunMutation(RelayEnvironment, object, CreateGameUserMutation, updateGameAdmin)
  }

	console.log(mutation_object)
	RunMutation(RelayEnvironment, mutation_object, CreateGameMutation, addGameGroupUser)
}
export default function CreateGame({data}) {
  const classes = useStyles();
	const refresh = () => {window.location.reload()}
  return (
    <div className={classes.root} text-align='center'>
    <Grid container justify-content="space-around" alignContent='center' alignItems="center" direction="column">
    <form onSubmit={(e)=> {handleSubmit(e, data, refresh)}}>
   	 <Grid item>
    <Typography variant="h5" className={classes.title}>Create a game for your group</Typography>
    </Grid>
   <Grid item>
    <TextField
      label="Bans upper"
      id="bans-upper"
      className={classes.textField}
      helperText="Amount of factions that player gets to ban from"
    />
    </Grid>
    <Grid item>
    <TextField
      label="Bans lower"
      id="bans-lower"
      className={classes.textField}
      helperText="Amount of bans that the player makes"
    />
    </Grid>
    <Grid item>
    <TextField
      label="Map string"
      id="mapstring"
      className={classes.textField}
      helperText="Map string, comma separated"
    />
    </Grid>
    <Grid item>
    <TextField
      label="HsLabels"
      id="hslabels"
      className={classes.textField}
      helperText="Labels for the home system tiles"
    />
    </Grid>
    <Grid item>
    <Button id="factionsubmit" color="secondary" fullWidth type="submit" variant="contained">Submit</Button>
    </Grid>
    </form>
      </Grid>
    </div>
    
  );
}


