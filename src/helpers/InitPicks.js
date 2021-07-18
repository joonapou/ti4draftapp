import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import type {Environment} from 'react-relay'
import type {Ban_insert_input, InitGameBansMutation} from 'InitGameBansMutation.graphql';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
  commitMutation
  } from 'react-relay/hooks';
const USER_ID = 1;
const GROUP_ID = 1;

const InitPicksFactionQuery = graphql`
	query InitPicksFactionQuery {  
    Faction {
      faction_id
      name
      url
    
  }
}`;

const InitPicksMutation = graphql`
  mutation InitPicksMutation($objects: [Pick_insert_input!]! ){
  insert_Pick(objects: $objects) {
    affected_rows
  }
}
`
// const InitGameBansMutation = graphql`
// 	mutation InitGameBansMutation($object1: Ban_insert_input!) {
//   insert_Ban_one(object: $object1) {
//     ban_id
//     banned
//     Faction {
//       name
//     }
//     User {
//       name
//     }
//   }
// }
// `;
// function InitBans(){
// 	var userId = USER_ID;
// 	var factionId = 185
// 	const variables = {
// 		object: {
// 			banned: false,
// 			userId: 1,
// 			factionId: 186,
// 			gameId: 1
// 		},
// 	};
// 	const data = useLazyLoadQuery(InitGameBansQuery, {user_id: USER_ID});
// 	console.log("data", data.Game[0].Group.Users[0].Bans.length > 0)
// 	if (data.Game[0].Group.Users[0].Bans.length > 0){
// 		console.log("don't init ban")
// 		commitMutation<InitGameBansMutation>(
//     RelayEnvironment,
//     {
//       InitGameBansMutation,
//       variables,
//       onError: err => console.error(err),
//     },
//   )
		
// 	} else {
// 		console.log("init ban")
		
// 	}
// }
function RunMutation(environment: Environment,
  objects, mutation) {
	console.log(objects)
  return commitMutation(environment, {
    mutation: mutation,
    variables: {"objects": objects},
    onCompleted: response => {} /* Mutation completed */,
    onError: error => {console.log(error)} /* Mutation errored */,
  });
}


export default function InitPicks(){
	var factions = useLazyLoadQuery(InitPicksFactionQuery).Faction;
	var mutation_datas = [];
	var mutation_data;
	for (var x = 0; x < factions.length; ++x){
		mutation_data = {
		picked: false,
		factionId: factions[x].faction_id,
		gameId: 1

	}
	mutation_datas.push(mutation_data)
}

	//mutation_datas = [{gameId: 1, userId:1, banned: false,factionId: 172}, {banned:false, gameId: 1, userId:1, factionId: 173}]
	RunMutation(RelayEnvironment, mutation_datas, InitPicksMutation)
	//localStorage.setItem('testdata': mutation_datas)

}