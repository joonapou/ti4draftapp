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

function handleSubmit(e, data, refresh){
	e.preventDefault();
	var group_name = e.target[0].value
	var group_password = e.target[1].value
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
	RunMutation(RelayEnvironment, mutation_object, GroupMutation, addGroupIdToUser)

}
export default function Group({data}) {
  const classes = useStyles();
	const refresh = (response) => {window.location.reload()}
  return (
    <div className={classes.root} text-align='center'>
    <Grid container  alignItems="center" alignContent="center" direction="column">
    <form onSubmit={(e)=> {handleSubmit(e, data, refresh)}}>
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
    <Button id="factionsubmit" color="secondary" fullWidth type="submit" variant="contained">Submit</Button>
    </Grid>
    </form>
      </Grid>
    </div>
    
  );
}


