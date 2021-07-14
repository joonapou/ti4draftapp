import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import {useState, useReducer} from 'react'
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import {Suspense} from 'react';
import InitGame from './helpers/InitGame';
import type {Environment} from 'react-relay'
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
  commitMutation
} from 'react-relay/hooks';
const BanScreenInfoQuery = graphql`
  query BanScreenInfoQuery {
  Game {
    bansUpper
    bansLower
  }
}`;
const BanScreenQuery = graphql`
  query BanScreenQuery($auth0id: String) {
  Ban(where: {User: {auth0_id: {_eq: $auth0id}}}) {
    User {
      user_id
      name
    }
    Faction {
      name
      faction_id
    }
    banned
    ban_id
  }
}
`;
const BanScreenInitQuery = graphql`
  query BanScreenInitQuery {
  Faction {
    faction_id
    name
    }
}
`;
const BanScreenMutation = graphql`
  mutation BanScreenMutation($banId: Int, $banned: Boolean) {
  update_Ban(_set: {banned: $banned}, where: {ban_id: {_eq: $banId}}) {
    returning {
      ban_id
      banned
    }
  }
}
`
function ModifyBan(environment: Environment,
  objects) {
  console.log("objects", objects)
  return commitMutation(environment, {
    mutation: BanScreenMutation,
    variables: objects,
    onCompleted: response => {} /* Mutation completed */,
    onError: error => {console.log(error)} /* Mutation errored */,
  });
}
var bans2 = [];
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
}));
function HandleBans (props) {
  const data = usePreloadedQuery(BanScreenQuery, props.preloadedQuery)
  return data.Ban;
}
function handleSubmit(e) {
    e.preventDefault();
    for (var a = 0; a < bans2.length; ++a){
      var element = document.getElementById(bans2[a].ban_id)
      console.log("banned", element.checked, "ban_id", element.id )
      ModifyBan(RelayEnvironment, {banId: element.id, banned: element.checked})

    }
    var i = document.getElementById('179')
}
function BanScreenChild(props, gameInfo) {
//   if (!bans ) return <div>loading...</div>
//   const [factionbans, dispatch] = useReducer((state, action) => {
//       switch (action.type) {
//         case 'add':
//           return [
//       ...state,
//         {
//           factionName: action.factionName,
//           banId: action.banId,
//           banned: action.banned
          
//         }
//       ];
//       case "UPDATE_ROW":
//       console.log("updating", action.factionName);
//       return {...state, factionsbans:state.rows.map((row) =>
//         row._id === action.payload._id
//           ? {
//               ...action.payload
//             }
//           : row
//       )};
//       default:
//         return state;
//       }
//     }, bans.bans);
    
  
 
//   const classes = useStyles();

// function handleClick(e, row){
//   dispatch({
//     type: 'add',
//     factionName: row.factionName,
//     banned: e.target.checked,
//     banId: row.banId
//   })
// }
//const data = usePreloadedQuery(BanScreenQuery, props.preloadedQuery)
 const bans = HandleBans(props);
 bans2 = bans;
 const banInfo = useLazyLoadQuery(BanScreenInfoQuery);
const classes = useStyles();
//InitGame();
return (
       // Ban Faction
      <Container className={classes.container} maxWidth="xs">
       <form classes={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid>
            <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup id="banform">
            <Typography variant="h6" className={classes.title}>
                Ban {banInfo.Game[0].bansLower} factions
              </Typography>
              <Typography variant="h6" className={classes.title}>
              </Typography>
              {bans.map((row) => (
           <FormControlLabel
            control={<Checkbox id={row.ban_id} value={row.Faction.name}/>}
            label={row.Faction.faction_id}
          />
          ))}
            </FormGroup>
            <Button color="secondary" fullWidth type="submit" variant="contained">
                  Submit
                </Button>
          </FormControl>
          </Grid>
          </form>
        </Container>
      )

}
export default function BanScreen(gameInfo, props){
  return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <BanScreenChild preloadedQuery={preloadedQuery} gameInfo={gameInfo}  />
    </Suspense>
  </RelayEnvironmentProvider>
  );
}
