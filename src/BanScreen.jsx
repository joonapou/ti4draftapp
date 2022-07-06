import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import {Suspense} from 'react';
import type {Environment} from 'react-relay'
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
  commitMutation
} from 'react-relay/hooks';

const BanScreenUserMutation = graphql`
mutation BanScreenUserMutation($auth0id: String, $banningDone: Boolean) {
    update_GameUser(where: {User: {auth0_id: {_eq: $auth0id}}}, _set: {banningDone: $banningDone}) {
        returning {
            banningDone
            gameuser_id
            Game {
                game_id
              }
          }
    }
  }
`;
const BanScreenInfoQuery = graphql`
  query BanScreenInfoQuery ($auth0Id: String) {
  Game(where: {GameUser: {User: {auth0_id: {_eq: $auth0Id}}}}) {
    bansLower
    bansUpper
  }
}`;
const BanScreenQuery = graphql`
  query BanScreenQuery($auth0Id: String) {
  Ban(where: {GameUser: {User: {auth0_id: {_eq: $auth0Id}}}}) {
    banned
    ban_id
    Faction {
      faction_id
      name
      url
    }
  }
  GameUser(where: {User: {auth0_id: {_eq: $auth0Id}}}) {
    banningDone
    gameuser_id
    User {
      name
    }
  }
}
`;
const BanScreenMutation = graphql`
  mutation BanScreenMutation($objects: [Ban_insert_input!]!) {
    insert_Ban(objects: $objects, on_conflict: {constraint: Ban_pkey, update_columns: banned}) {
      affected_rows
    }
  }`;

const BanScreenGameMutation = graphql`
  mutation BanScreenGameMutation($gameId: Int, $bansDone: Boolean) {
    update_Game(where: {game_id: {_eq: $gameId}}, _set: {bansDone: $bansDone}) {
      affected_rows
    }
  }
`;
function RunMutation(environment: Environment,
  objects, mutation, callback) {
  return commitMutation(environment, {
    mutation: mutation,
    variables: objects,
    onCompleted: response => {callback(response)} /* Mutation completed */,
    onError: error => {console.log(error)} /* Mutation errored */,
  });
}

const preloadedQuery = loadQuery(RelayEnvironment, BanScreenQuery, {
  auth0id: localStorage.getItem('auth0:id_token:sub')
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  grid: {
    direction: 'column',
    alignContent: 'stretch'
  }
}));
const updateUser = (response) => {
  var auth0id = localStorage.getItem('auth0:id_token:sub');
  RunMutation(RelayEnvironment, {auth0id: auth0id, banningDone: true}, BanScreenUserMutation, refresh)
}
const refresh = (response) => {console.log("refresh")}
function handleSubmit(e, props, row) {
    e.preventDefault();
    var bans_data = []
    var bans = props.data.data.User[0].GameUsers[0].Bans
    console.log(bans)
    for (var a = 0; a < bans.length; ++a){
      var element = document.getElementById(bans[a].ban_id)
      bans_data.push({ban_id: element.id, banned: element.checked, factionId: bans[a].Faction[0].faction_id, gameId: props.data.data.User[0].GameUsers[0].Game.game_id, gameuserId:props.data.data.User[0].GameUsers[0].gameuser_id})
      
    }
    RunMutation(RelayEnvironment, {objects: bans_data}, BanScreenMutation, updateUser)
    var gameId = props.data.data.User[0].GameUsers[0].Game.gameId
    window.sessionStorage.setItem("gameId", gameId)
    
    console.log(props.data.data.User[0].GameUsers[0].Game.GameUsers)
    //refresh()
}
function handleClick(e, row){
  e.preventDefault();
  console.log(row.Faction[0])
  window.open(row.Faction[0].url)
}

function BanScreenChild(props) {
  var data = props.data.data
  const classes = useStyles();
  console.log("data", data)
  
  if (data.User[0].GameUsers[0].banningDone === false){
return (
       // Ban Faction
      <Container className={classes.container} maxWidth="xs">
      <Grid container>

       <form classes={classes.root} noValidate autoComplete="off" onSubmit={(e) => {handleSubmit(e, props)}}>
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup id="banform">
            <Typography variant="h6" className={classes.title}>
                Ban 2 factions
              </Typography>
              <Typography variant="h6" className={classes.title}>
              </Typography>
              {data.User[0].GameUsers[0].Bans.map((row) => (
                <span>
           <FormControlLabel
            control={<Checkbox id={row.ban_id} value={row.Faction[0].name}/>}
            label={row.Faction[0].name}/>
            <Link target="_blank" component="button" onClick={(e) => handleClick(e,row)}> Faction info </Link>
          </span>
          ))}
            </FormGroup>
            <Button color="secondary" fullWidth type="submit" variant="contained">
                  Submit
                </Button>
          </FormControl>
          </Grid>
          </form>
          </Grid>
        </Container>
      )
  } else {
    return(
    <Paper>Waiting for others to finish bans</Paper>
    )
  }
}
export default function BanScreen(props){
  return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <BanScreenChild preloadedQuery={preloadedQuery} data={props.data}  />
    </Suspense>
  </RelayEnvironmentProvider>
  );
}
