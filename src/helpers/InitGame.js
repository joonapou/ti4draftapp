import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from '../RelayEnvironment';
import type {Environment} from 'react-relay'
import {
  RelayEnvironmentProvider,
  useLazyLoadQuery,
  commitMutation
  } from 'react-relay/hooks';
const USER_ID = 1;
const GROUP_ID = 1;
const InitGameQuery = graphql`
	query InitGameQuery ($groupId: Int) {
  Game(where: {Group: {group_id: {_eq: $groupId}}}) {
    bansLower
    bansUpper
  }
}
`
const InitGameUserQuery = graphql`
	query InitGameUserQuery {
  User(where: {Group: {group_id: {_eq: 1}}}) {
    name
    user_id
  }
}`;
const InitGameFactionQuery = graphql`
	query InitGameFactionQuery {
		Faction {
    name
    faction_id
  }
	}`;
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

function insertBan(
  environment: Environment,
  objects,
) {
	console.log("objects", objects)
  return commitMutation(environment, {
    mutation: graphql`
      mutation InitGameBansMutation($objects: [Ban_insert_input!]! ){
  insert_Ban(objects: $objects) {
    affected_rows
  }
}
    `,
    variables: {"objects": objects},
    onCompleted: response => {} /* Mutation completed */,
    onError: error => {console.log(error)} /* Mutation errored */,
  });
}


export default function InitGame(){
	var factionsdata = useLazyLoadQuery(InitGameFactionQuery).Faction;
	 // const data = test(RelayEnvironment, {"object" :{
		// 	banned: false,
		// 	userId: 1,
		// 	factionId: 187,
		// 	gameId: 1
		// }})
	const userdata = useLazyLoadQuery(InitGameUserQuery).User;
	const gamedata = useLazyLoadQuery(InitGameQuery, {groupId: GROUP_ID}).Game[0]
	var mutation_data = {}
	// user_ban_data ={ user_id : [faction1ID, faction2ID, faction3ID]}
	var user_ban_data = {};
	var temp_faction_array = [];
	for (var b = 0; b < factionsdata.length; ++b){
		temp_faction_array.push(factionsdata[b].faction_id)
	}
	temp_faction_array.sort()
	console.log("before:" ,temp_faction_array.length)
	var bans = {};
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
		user_ban_data[userdata[i].user_id] = user_ban_array;
	 
	}
	var mutation_datas = [];
	console.log("after",temp_faction_array.length)
	var temp = [];
	for (const [key, value] of Object.entries(user_ban_data)){
		for (var x = 0; x < value.length; ++x){
			mutation_data = {
			userId: parseInt(key),
			banned: false,
			factionId: value[x],
			gameId: 1

		}
		temp.push(value[x])
		mutation_datas.push(mutation_data)

	}

	}
	temp.sort()
	//console.log(temp)
	//mutation_datas = [{gameId: 1, userId:1, banned: false,factionId: 172}, {banned:false, gameId: 1, userId:1, factionId: 173}]
	insertBan(RelayEnvironment, mutation_datas);
	//localStorage.setItem('testdata': mutation_datas)
}

{}