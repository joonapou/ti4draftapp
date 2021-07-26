import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import graphql from 'babel-plugin-relay/macro';
import PropTypes from 'prop-types';
import RelayEnvironment from './RelayEnvironment';
import {Suspense} from 'react';
import type {Environment} from 'react-relay'
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Alert from '@material-ui/lab/Alert';
import {useState} from 'react'
import  { encrypt , decrypt } from 'react-crypt-gsm';
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
const GroupMutation = graphql`
mutation GroupMutation($GroupName: String, $groupPassword: String) {
  insert_Group_one(object: {GroupName: $GroupName, groupPassword: $groupPassword}) {
    GroupName
    group_id
  }
}
`;
const GroupUserMutation = graphql`
mutation GroupUserMutation($groupId: Int, $auth0Id: String) {
  update_User(_set: {groupId: $groupId}, where: {auth0_id: {_eq: $auth0Id}}) {
    affected_rows
  }
}
`;
const GroupQuery = graphql`
  query GroupQuery {
  Group {
    GroupName
    groupPassword
    group_id
  }
}
`;

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
const preloadedQuery = loadQuery(RelayEnvironment, GroupQuery, {
});

const auth0Id = localStorage.getItem('auth0:id_token:sub')
function RunMutation(environment: Environment,
  object, mutation, callback) {
  return commitMutation(environment, {
    mutation: mutation,
    variables: object,
    onCompleted: response => {callback(auth0Id,response)} /* Mutation completed */,
    onError: error => {console.log(error)} /* Mutation errored */,
  });
}
const refresh = (response) => {window.location.reload()}
function handleCreateSubmit(e, data, refresh){
	e.preventDefault();
	var group_name = e.target[0].value
	var group_password = encrypt(e.target[1].value).content
	var mutation_object = {
		GroupName: group_name,
		groupPassword: group_password,
	}
	console.log(mutation_object)
  const addGroupIdToUser = (auth0Id, response) => {
    var group_id = response.insert_Group_one.group_id
    var object = {
      auth0Id: auth0Id,
      groupId: group_id
    }
    RunMutation(RelayEnvironment, object, GroupUserMutation, refresh)
  }
	RunMutation(RelayEnvironment, mutation_object, GroupMutation, refresh)
  
}
function handleJoinSubmit(e, group, refresh, groupalert, emptypasswordalert, wrongpasswordalert){
  if(groupalert === false && emptypasswordalert === false  && wrongpasswordalert === false){
     console.log("1", groupalert, emptypasswordalert, wrongpasswordalert)
    var object = {
      auth0Id: auth0Id,
      groupId: group.group_id
    }
    RunMutation(RelayEnvironment, object, GroupUserMutation, refresh)
  }
  e.preventDefault();
 
}
function CreateGroupView({data}){
   const classes = useStyles();
  return (
    <div className={classes.root} text-align='center'>
    <Grid container  spacing={1} alignItems="center" alignContent="center" direction="column">
    <form onSubmit={(e)=> {handleCreateSubmit(e, data, refresh)}}>
      <Grid item>
    <Typography variant="h5" className={classes.title}>Create a group</Typography>
    </Grid>
   <Grid item>
    <TextField
      label="Group name"
      id="group-name"
      className={classes.textField}
    />
    </Grid>
    <Grid item>
    <TextField
      label="Group password"
      id="group-password"
      className={classes.textField}
    />
    </Grid>
    <Grid item>
    <Button id="creategroupsubmit" color="secondary" fullWidth type="submit" variant="contained">Create</Button>
    </Grid>
    </form>
      </Grid>
    </div>
    
  );
}
function JoinGroupView({groupdata}){
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [group, setGroup] = useState(null);
  const [groupalert, setGroupAlert] = useState(false);
  const [wrongpasswordalert, setWrongPasswordAlert] = useState(false);
  const [emptypasswordalert, setEmptyPasswordAlert] = useState(false);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (row) => {
    setGroup(row)
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
 return (
    
    <form onSubmit={(e)=> {handleJoinSubmit(e, group, refresh)}}>
    <Grid container direction="column" alignItems="center" spacing={2}>
    <Grid item>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText primary={group === null ? "Select group" : group.GroupName} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {groupdata.Group.map((row, index) => (
          <MenuItem
            key={row}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(row)}
          >
            {row.GroupName}
          </MenuItem>
        ))}
      </Menu>
      { groupalert===true && <Alert severity="error" onClose={() => {setGroupAlert(false)}}>Please select a group to continue</Alert>}
      { emptypasswordalert===true && <Alert severity="error" onClose={() => {setEmptyPasswordAlert(false)}}>Please type in password to continue</Alert>}
      { wrongpasswordalert===true && <Alert severity="error" onClose={() => {setWrongPasswordAlert(false)}}>Wrong group password</Alert>}
      </Grid>
      <Grid item>
      <TextField id="password-input" label="Group password" fullWidth />    
      </Grid>  
      <Grid item>
    <Button id="factionsubmit" color="secondary" fullWidth type="submit" variant="contained" onClick={(e) => {
            if (group === null){
              setGroupAlert(true)
            } 
            else if (document.getElementById('password-input').value === ""){
              setEmptyPasswordAlert(true)
            } else if (encrypt(document.getElementById('password-input').value).content !== group.groupPassword){
              setWrongPasswordAlert(true)
            }
            else {
              handleJoinSubmit(e, group, refresh, groupalert, emptypasswordalert, wrongpasswordalert)
            }

            
          }}>Join</Button>
    </Grid>
       </Grid>
      </form>
   
  );
}
function GroupChild(props) {
  const [value, setValue] = React.useState(0);
  const groupdata = usePreloadedQuery(GroupQuery, props.preloadedQuery)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
        <Tab label="Create a group" {...a11yProps(0)} />
        <Tab label="Join group"  {...a11yProps(1)}/>
      </Tabs>
    </Paper>
    <Paper>
    <TabPanel value={value} index={0}>
        <CreateGroupView data={props.data}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JoinGroupView groupdata={groupdata} />
      </TabPanel>
    </Paper>
    </div>
    </Grid>
  );
}



export default function Group(data, props){
  return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <GroupChild preloadedQuery={preloadedQuery} data={data}/>
    </Suspense>
  </RelayEnvironmentProvider>
  );
}