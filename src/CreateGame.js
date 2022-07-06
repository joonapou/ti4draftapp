import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Alert from '@material-ui/lab/Alert';
import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import { useAuth0} from "@auth0/auth0-react";
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import {Suspense} from 'react';
import type {Environment} from 'react-relay'

import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  commitMutation,
  useLazyLoadQuery

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
mutation CreateGameMutation($name: String, $hsLabels: String, $mapString: String, $bansLower: Int, $bansUpper: Int, $groupId: Int, $game_created: date) {
  insert_Game_one(object: {name: $name, hsLabels: $hsLabels, mapString: $mapString, bansLower: $bansLower, bansUpper: $bansUpper, groupId: $groupId, gameCreated: $game_created}) {
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

const CreateGameGameQuery = graphql`
  query CreateGameGameQuery($group_id: Int) {
  Game(where: {groupId: {_eq: $group_id}}) {
    name
    gameUserByGameadmin {
      User {
        name
      }
    }
    draftStarted
    bansDone
    picksDone
    gameCreated
    game_id
  }
}`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const refresh = (response) => {window.location.reload()}
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

function handleCreateSubmit(e, data, refresh){
	e.preventDefault();
  console.log("submit", data)
  var game_name = e.target[0].value
	var bans_upper = parseInt(e.target[1].value)
	var bans_lower = parseInt(e.target[2].value)
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var game_created = yyyy + '-' + mm + '-' + dd
	var mapstring = e.target[3].value.replaceAll(' ', ',')
	var hslabels = e.target[4].value
  var numberOfPlayers = e.target[5].value
  var availableSeats = ''
  for (var i = 1; i <numberOfPlayers; ++i){
    if (i === numberOfPlayers){
      availableSeats = availableSeats + i.toString()
    } else {
      availableSeats = availableSeats + i.toString() + ','
    }
  }
	var mutation_object = {
    name: game_name,
		hsLabels: hslabels,
		mapString: mapstring,
		bansLower: bans_lower,
		bansUpper: bans_upper,
		groupId: data.User[0].groupId,
    game_created:game_created
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
    localStorage.setItem('gameuserId', gameUserId)
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
  console.log(e.target[0].value)
	RunMutation(RelayEnvironment, mutation_object, CreateGameMutation, addGameGroupUser)
}
function CreateGameView(props) {
  console.log("creategameview", props)
  const classes = useStyles();

  var data = props.data
  return (
    <div className={classes.root} text-align='center'>
    <Grid container justify-content="space-around" alignContent='center' alignItems="center" direction="column">
    <form onSubmit={(e)=> {handleCreateSubmit(e, data, refresh)}}>
   	 <Grid item>
    <Typography variant="h5" className={classes.title}>Create a game for your group</Typography>
    </Grid>
    <Grid item>
    <TextField
      label="Game name"
      id="game-name"
      className={classes.textField}
      helperText="Identifying name for the game"
    />
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
      helperText="Map string"
    />
    </Grid>
    <Grid item>
    <TextField
      label="HsLabels"
      id="hslabels"
      className={classes.textField}
      helperText="Labels for the home system tiles, separated with |"
    />
    </Grid>
    <Grid item>
    <TextField
      label="HsLabels"
      id="number-of-players"
      className={classes.textField}
      helperText="Number of players, should match the map player count"
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
function JoinGameView(props){
  console.log("joingameview", props)
  const {user} = useAuth0();
  var gamedata = props.gamedata
  console.log("gamedata", gamedata)
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [game, setGame] = useState(null);
  var game_status;
  if (game !== null){
    if (game.draftStarted === true){
      if (game.bansDone === true){
        if (game.picksDone === true){
          game_status = "Draft complete"
        } else {
          game_status = "Picking phase"
        }
      } else {
        game_status = "Banning phase"
      }
    } else {
      game_status = "Waiting for draft to start"
    }
  }
 
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (row) => {
    setGame(row)
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleJoinSubmit = (e) => {
        e.preventDefault();
        props.history.push({
          pathname: '/game',
          state: {gameId: game.game_id}
        })  
};
  const classes = useStyles();
  if (gamedata.Game.length > 0) {
    console.log("game", game)
 return (
    
    <form onSubmit={(e, props)=> {handleJoinSubmit(e, props, game.game_id)}}>
    <Grid container direction="column" alignItems="center" spacing={2}>
    <Grid item>
      <List component="nav" aria-label="game list">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText primary={game === null ? "Select game" : game.name} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {gamedata.Game.map((row, index) => (
          <MenuItem
            key={row}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(row)}
          >
            {row.name}
            {row.draftStarted}
          </MenuItem>
        ))}
      </Menu>
      <Grid container>
      <Grid item>
      <List>
      <ListItem>
          <ListItemText secondary="Game status" />
        </ListItem>
      <ListItem>
          <ListItemText secondary="Creation date" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="Created by" />
        </ListItem>
      </List>
      </Grid>
      <Grid item>
      <List>
      <ListItem>
          <ListItemText secondary={game_status} />
        </ListItem>
        <ListItem>
          <ListItemText secondary={game === null ? "" : game.gameCreated} />
        </ListItem>
         <ListItem>
          <ListItemText secondary={game === null ? "" : game.gameUserByGameadmin.User.name} />
        </ListItem>
      </List>
      </Grid>
      </Grid>

           </Grid>
      <Grid item>
   { game!==null && <Button id="factionsubmit" color="secondary" fullWidth type="submit" variant="contained" onClick={(e) => {        
              handleJoinSubmit(e, game, refresh, user)

            
          }}>Join</Button> }
    </Grid>
       </Grid>
      </form>
   
  );
  } else {
    return (
    <Typography variant="h9" className={classes.title}>
                No games found for your group. 
                Create a game to continue
    </Typography>
    )
  }

}
function CreateGameChild(props) {
   const [value, setValue] = React.useState(1);
   console.log(props)
  const gamedata = useLazyLoadQuery(CreateGameGameQuery, {
    group_id: props.data.User[0].groupId
});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return(
<Grid container alignContent="space-around" direction="column">
    <div>
    <Paper>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Create a game" {...a11yProps(0)} />
        <Tab label="Join game"  {...a11yProps(1)}/>
      </Tabs>
    </Paper>
    <Paper>
    <TabPanel value={value} index={0}>
        <CreateGameView history={props.history} data={props.data}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JoinGameView gamedata={gamedata} history={props.history}/>
      </TabPanel>
    </Paper>
    </div>
    </Grid>

)
}

export default function CreateGame(props){
  return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <CreateGameChild history={props.history} data={props.data}/>
    </Suspense>
  </RelayEnvironmentProvider>
  );
}