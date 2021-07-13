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
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery
} from 'react-relay/hooks';
const BanScreenInfoQuery = graphql`
  query BanScreenInfoQuery {
  Game {
    bansUpper
    bansLower
  }
}`;
const BanScreenQuery = graphql`
  query BanScreenQuery {
  Ban {
    ban_id
    banned
    Faction {
      name
    }
    User {
      name
      }
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

const preloadedQuery = loadQuery(RelayEnvironment, BanScreenQuery, {
  /* query variables */
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
  // const factions = useLazyLoadQuery(BanScreenInitQuery);
  // console.log(factions)
  // if (data.Ban.length == 0){
  //   //bans haven't been init yet
  //   for (var i = 0; i < factions.Faction; ++i){

  //   }
    
  // }
  return data.Ban;
}
function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted")
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
 const banInfo = useLazyLoadQuery(BanScreenInfoQuery);
const classes = useStyles();
InitGame();
console.log("gamee", bans)
return (
       // Ban Faction
      <Container className={classes.container} maxWidth="xs">
       <form classes={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid>
            <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
            <Typography variant="h6" className={classes.title}>
                Ban {banInfo.Game[0].bansLower} factions
              </Typography>
              <Typography variant="h6" className={classes.title}>
              </Typography>
              {bans.map((row) => (
           <FormControlLabel
            control={<Checkbox name={row.banId} value={row.factionName}/>}
            label={row.factionName}
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
