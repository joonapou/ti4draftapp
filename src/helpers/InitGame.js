import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import type {Ban_insert_input} from 'InitGameBansMutation.graphql';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
  commitMutation
  } from 'react-relay/hooks';
const USER_ID = 1;
const InitGameBansQuery = graphql`
  query InitGameBansQuery($user_id: Int) {
  Game {
    Group {
      Users(where: {user_id: {_eq: $user_id}}) {
        Bans {
          ban_id
          banned
        }
      }
    }
  }
}
`;
const InitGameBansMutation = graphql`
	mutation InitGameBansMutation($object: Ban_insert_input!) {
  insert_Ban_one(object: $object) {
    ban_id
    banned
    userId
  }
}
`;
function InitBans(){
	var userId = USER_ID;
	var factionId = 175
	const variables = {
			banned: false,
			userId: USER_ID,
			factionId: factionId,
			gameId: 1
	};
	const data = useLazyLoadQuery(InitGameBansQuery, {user_id: USER_ID});
	console.log("data", data.Game[0].Group.Users[0].Bans.length > 0)
	if (data.Game[0].Group.Users[0].Bans.length > 0){
		console.log("don't init ban")
		return commitMutation<Ban_insert_input>(
		RelayEnvironment, {
		InitGameBansMutation,
		variables: {variables}
	}
		)
	} else {
		console.log("init ban")
		
	}
}




export default function InitGame(){
	InitBans();

}