import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BanScreen from './BanScreen.jsx'
import PickScreen from './PickScreen.jsx'
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import type {Environment} from 'react-relay'
import {
  RelayEnvironmentProvider,
  useLazyLoadQuery,
  commitMutation
  } from 'react-relay/hooks';
const PickButtonFactionQuery = graphql`
	query PickButtonFactionQuery {
		Faction {
    name
    faction_id
  }
	}`;
  const PickButtonFactionInitQuery = graphql`
	query PickButtonFactionInitQuery {
		Faction {
    name
    faction_id
  }
	}`;
const PickButtonBansMutation = graphql`
	mutation PickButtonBansMutation($objects: [Ban_insert_input!]!) {
  insert_Ban(objects: $objects) {
      returning {
          ban_id
          banned
      }
  }
}
`;
const PickButtonGameMutation = graphql`
mutation PickButtonGameMutation($gameId: Int) {
    update_Game(where: {game_id: {_eq: $gameId}}, _set: {draftStarted: true}) {
      affected_rows
    }
  }
`;
const PickButtonGameBannedMutation = graphql`
mutation PickButtonGameBannedMutation($gameId: Int) {
    update_Game(where: {game_id: {_eq: $gameId}}, _set: {bansDone: true}) {
      affected_rows
    }
  }
`;
const PickButtonPickOrderMutation = graphql`
mutation PickButtonPickOrderMutation($objects: [GameUser_insert_input!]!) {
  insert_GameUser(objects: $objects, on_conflict: {constraint: GameUser_pkey, update_columns: pickOrder}) {
    returning {
      pickOrder
      gameuser_id
    }
  }
}
`;
const PickButtonPicksMutation = graphql`
mutation PickButtonPicksMutation($objects: [Pick_insert_input!]!) {
  insert_Pick(objects: $objects) {
    returning {
      factionId
      gameId
      gameuserId
      pick_id
      picked
    }
  }
}
`;
function RunMutation(environment: Environment,
    object, mutation, callback, data) {
    console.log(object)
    return commitMutation(environment, {
      mutation: mutation,
      variables: object,
      onCompleted: response => {callback(response, data)} /* Mutation completed */,
      onError: error => {console.log(error.source)} /* Mutation errored */,
    });
  }
const updateGameDraftStarted = (response, gamedata) => {
    var object = {
        gameId: gamedata.game_id
    }
    RunMutation(RelayEnvironment, object, PickButtonGameMutation, refresh)
}
const updateGameBanningDone = (response, gamedata) => {
  var object = {
      gameId: gamedata.game_id
  }
  RunMutation(RelayEnvironment, object, PickButtonGameBannedMutation, refresh)
}
function getRandomPickOrder(small, big, takenNumbers){
  while (true) {
    var min = Math.ceil(small);
    var max = Math.floor(big);
    var pickOrder = Math.floor(Math.random() * (max - min + 1) + min)
    if (takenNumbers.includes(pickOrder) === false){
      return pickOrder
    }
  }
}
function initPickOrder(response, gameInfo) {
  var gameUsers = JSON.parse(JSON.stringify(gameInfo.GameUsers))
  var takenNumbers = []
  for (var i = 0; i < gameUsers.length; ++i){
      var pickNumber = getRandomPickOrder(1, 10, takenNumbers)
      gameUsers[i].pickOrder = pickNumber
      takenNumbers.push(pickNumber)
  }
  console.log(takenNumbers)
  RunMutation(RelayEnvironment, {objects:gameUsers}, PickButtonPickOrderMutation, updateGameBanningDone, gameInfo)
}
function InitGame(props, factionsdata){
	const userdata = props.data.data.User[0].GameUsers[0].Game.GameUsers;
	const gamedata = props.data.data.User[0].GameUsers[0].Game
	var mutation_data = {}
	var user_ban_data = {};
	var temp_faction_array = [];
	for (var b = 0; b < factionsdata.length; ++b){
		temp_faction_array.push(factionsdata[b].faction_id)
	}
	temp_faction_array.sort()
	for (var i = 0; i < userdata.length; ++i){
		var user_ban_array = [];
		for (var a = 0; a < gamedata.bansUpper; ++a){
			var randomban = Math.round((Math.random() * (temp_faction_array.length - 0) + 0));
			//user_ban_array.push(factionsdata[randomban].faction_id);
			//bans[factionsdata[randomban].faction_id] = 1
			if (randomban === temp_faction_array.length){
					user_ban_array.push(temp_faction_array[randomban-1]);
					temp_faction_array.splice(randomban-1,1)
				} else {
					user_ban_array.push(temp_faction_array[randomban]);
					temp_faction_array.splice(randomban,1)
				}
		}
		user_ban_data[userdata[i].gameuser_id] = user_ban_array;
	 
	}
	var mutation_datas = [];
	var temp = [];
	for (const [key, value] of Object.entries(user_ban_data)){
		for (var x = 0; x < value.length; ++x){
			mutation_data = {
			gameuserId: parseInt(key),
			banned: false,
			factionId: value[x],
			gameId: gamedata.game_id

		}
		temp.push(value[x])
		mutation_datas.push(mutation_data)

	}

	}
	temp.sort()
	//console.log(temp)
	//mutation_datas = [{gameId: 1, userId:1, banned: false,factionId: 172}, {banned:false, gameId: 1, userId:1, factionId: 173}]
	RunMutation(RelayEnvironment, {objects:mutation_datas}, PickButtonBansMutation, updateGameDraftStarted, gamedata)
	//localStorage.setItem('testdata': mutation_datas)
}

function InitPicks(gameInfo, bans, factiondata){
  var bannedFactions = []
  for (var i = 0; i < bans.length; ++i){
    if (bans[i].banned === true){
      bannedFactions.push(bans[i].factionId)
    }
  }
	var mutation_datas = [];
	var mutation_data;
	for (var x = 0; x < factiondata.length; ++x){
		mutation_data = {
		picked: false,
		factionId: factiondata[x].faction_id,
		gameId: gameInfo.game_id
	}
  if (bannedFactions.includes(factiondata[x].faction_id) === false){
    mutation_datas.push(mutation_data)
  }
}
	//mutation_datas = [{gameId: 1, userId:1, banned: false,factionId: 172}, {banned:false, gameId: 1, userId:1, factionId: 173}]
	RunMutation(RelayEnvironment, {objects:mutation_datas}, PickButtonPicksMutation, initPickOrder, gameInfo)
	//localStorage.setItem('testdata': mutation_datas)

}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function checkBanPhaseStatus(game_users) {
  var allBanned = false;
  for (var i = 0; i < game_users.length ; ++i){
      if (game_users[i].banningDone === true) {
          allBanned = true
      } else {
          allBanned = false
      }
  }
  return allBanned;
}

const refresh = (response) => {document.location.reload()}
export default function PickButton(props) {
  const classes = useStyles();
  var factiondata = useLazyLoadQuery(PickButtonFactionQuery).Faction;
  var gameInfo = props.data.data.User[0].GameUsers[0].Game;
  var allBanningDone = checkBanPhaseStatus(props.data.data.User[0].GameUsers[0].Game.GameUsers)
  var userIsGameAdmin = (props.data.data.User[0].GameUsers[0].gameuser_id === props.data.data.User[0].GameUsers[0].Game.gameAdmin)
  const handleInitSubmit = (e) => {
    e.preventDefault();
    InitGame(props, factiondata); 
};
const handlePicksSubmit = (e, gameInfo, bans, factiondata) => {
  e.preventDefault();
  InitPicks(gameInfo, bans, factiondata); 
};
  if (gameInfo.draftStarted === true){
    if (gameInfo.bansDone === true){
      if (gameInfo.picksDone === true){
        return (
          // Draft done!
          <Container className={classes.container} maxWidth="xs">
            <Grid>
              <Typography variant="h6" className={classes.title}>
                Draft done!
              </Typography>
            </Grid>
          </Container>
        );
      } else {
        if (props.data.data.User[0].GameUsers[0].gameuser_id === props.data.data.User[0].GameUsers[0].Game.userPicking){
          if (props.data.data.User[0].GameUsers[0].seatNumber === null || props.data.data.User[0].GameUsers[0].Pick === null){
             return (
            // Pick faction
            <PickScreen data={props.data}/>
            )
          } else {
            return(
          <Typography variant="h6" className={classes.title}>
              Gongratulations, you have done your picks! Waiting for others to finish the draft
            </Typography>)
          }
         
        } else {
          return(
          <Typography variant="h6" className={classes.title}>
              Not your turn yet, waiting for others to pick
            </Typography>)
        }
        
      }
    } else {
      if (userIsGameAdmin === true && allBanningDone === true) {
        return(
          <Container className={classes.container} maxWidth="xs">
          <Grid>
          {<Button id="initpickssubmit" color="secondary" fullWidth type="submit" variant="contained" onClick={(e) => {        
                handlePicksSubmit(e, gameInfo, props.data.data.User[0].GameUsers[0].Game.Bans, factiondata)
  
              
            }}>Init Picks</Button> }
          </Grid>
          </Container>
          )
      }
        console.log("banscreen")
      return(
      <BanScreen data={props.data}/>
     ) 
    }
  } else {
      console.log(props.data.data.User[0].GameUsers[0])
    if (userIsGameAdmin === true){
        return(
        <Container className={classes.container} maxWidth="xs">
        <Grid>
        {<Button id="initgamesubmit" color="secondary" fullWidth type="submit" variant="contained" onClick={(e) => {        
              handleInitSubmit(e, refresh, factiondata)

            
          }}>Init Game</Button> }
        </Grid>
        </Container>
        )
        
    } else {
        return(
            // Waiting for draft to start
            <Container className={classes.container} maxWidth="xs">
                <Grid>
                    <Typography variant="h6" className={classes.title}>
                    Waiting for draft to start
                    </Typography>
                </Grid>
                </Container>
            )
    }
    
  }
}