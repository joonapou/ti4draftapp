/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Ban_constraint = "Ban_factionId_key" | "Ban_pkey" | "%future added value";
export type Ban_update_column = "ban_id" | "banned" | "factionId" | "gameId" | "gameuserId" | "%future added value";
export type Faction_constraint = "Faction_id_key" | "Faction_pkey1" | "%future added value";
export type Faction_update_column = "faction_id" | "name" | "url" | "%future added value";
export type GameUser_constraint = "GameUser_pkey" | "%future added value";
export type GameUser_update_column = "banningDone" | "gameId" | "gameuser_id" | "pickId" | "pickOrder" | "seatNumber" | "userId" | "%future added value";
export type Game_constraint = "Game_groupId_unique" | "Game_pkey" | "%future added value";
export type Game_update_column = "availableSeats" | "bansDone" | "bansLower" | "bansUpper" | "draftStarted" | "gameAdmin" | "game_id" | "groupId" | "hsLabels" | "mapString" | "picksDone" | "userPicking" | "%future added value";
export type Group_constraint = "Group_pkey" | "%future added value";
export type Group_update_column = "GroupName" | "groupPassword" | "group_id" | "%future added value";
export type Pick_constraint = "Pick_pkey" | "Pick_userId_unique" | "%future added value";
export type Pick_update_column = "factionId" | "gameId" | "gameuserId" | "pick_id" | "picked" | "%future added value";
export type User_constraint = "User_id_key" | "User_pkey1" | "%future added value";
export type User_update_column = "auth0_id" | "email" | "groupId" | "name" | "password" | "user_id" | "%future added value";
export type Pick_insert_input = {|
  Faction?: ?Faction_obj_rel_insert_input,
  Game?: ?Game_obj_rel_insert_input,
  GameUser?: ?GameUser_obj_rel_insert_input,
  GameUsers?: ?GameUser_arr_rel_insert_input,
  factionId?: ?number,
  gameId?: ?number,
  gameuserId?: ?number,
  pick_id?: ?number,
  picked?: ?boolean,
|};
export type Faction_obj_rel_insert_input = {|
  data: Faction_insert_input,
  on_conflict?: ?Faction_on_conflict,
|};
export type Faction_insert_input = {|
  Ban?: ?Ban_obj_rel_insert_input,
  Bans?: ?Ban_arr_rel_insert_input,
  Picks?: ?Pick_arr_rel_insert_input,
  faction_id?: ?number,
  name?: ?string,
  url?: ?string,
|};
export type Ban_obj_rel_insert_input = {|
  data: Ban_insert_input,
  on_conflict?: ?Ban_on_conflict,
|};
export type Ban_insert_input = {|
  Faction?: ?Faction_obj_rel_insert_input,
  Game?: ?Game_obj_rel_insert_input,
  GameUser?: ?GameUser_obj_rel_insert_input,
  ban_id?: ?number,
  banned?: ?boolean,
  factionId?: ?number,
  gameId?: ?number,
  gameuserId?: ?number,
|};
export type Game_obj_rel_insert_input = {|
  data: Game_insert_input,
  on_conflict?: ?Game_on_conflict,
|};
export type Game_insert_input = {|
  Bans?: ?Ban_arr_rel_insert_input,
  GameUsers?: ?GameUser_arr_rel_insert_input,
  Group?: ?Group_obj_rel_insert_input,
  Picks?: ?Pick_arr_rel_insert_input,
  availableSeats?: ?string,
  bansDone?: ?boolean,
  bansLower?: ?number,
  bansUpper?: ?number,
  draftStarted?: ?boolean,
  gameAdmin?: ?number,
  gameUserByGameadmin?: ?GameUser_obj_rel_insert_input,
  game_id?: ?number,
  groupId?: ?number,
  hsLabels?: ?string,
  mapString?: ?string,
  picksDone?: ?boolean,
  userPicking?: ?number,
|};
export type Ban_arr_rel_insert_input = {|
  data: $ReadOnlyArray<Ban_insert_input>,
  on_conflict?: ?Ban_on_conflict,
|};
export type Ban_on_conflict = {|
  constraint: Ban_constraint,
  update_columns: $ReadOnlyArray<Ban_update_column>,
  where?: ?Ban_bool_exp,
|};
export type Ban_bool_exp = {|
  Faction?: ?Faction_bool_exp,
  Game?: ?Game_bool_exp,
  GameUser?: ?GameUser_bool_exp,
  _and?: ?$ReadOnlyArray<Ban_bool_exp>,
  _not?: ?Ban_bool_exp,
  _or?: ?$ReadOnlyArray<Ban_bool_exp>,
  ban_id?: ?Int_comparison_exp,
  banned?: ?Boolean_comparison_exp,
  factionId?: ?Int_comparison_exp,
  gameId?: ?Int_comparison_exp,
  gameuserId?: ?Int_comparison_exp,
|};
export type Faction_bool_exp = {|
  Ban?: ?Ban_bool_exp,
  Bans?: ?Ban_bool_exp,
  Picks?: ?Pick_bool_exp,
  _and?: ?$ReadOnlyArray<Faction_bool_exp>,
  _not?: ?Faction_bool_exp,
  _or?: ?$ReadOnlyArray<Faction_bool_exp>,
  faction_id?: ?Int_comparison_exp,
  name?: ?String_comparison_exp,
  url?: ?String_comparison_exp,
|};
export type Pick_bool_exp = {|
  Faction?: ?Faction_bool_exp,
  Game?: ?Game_bool_exp,
  GameUser?: ?GameUser_bool_exp,
  GameUsers?: ?GameUser_bool_exp,
  _and?: ?$ReadOnlyArray<Pick_bool_exp>,
  _not?: ?Pick_bool_exp,
  _or?: ?$ReadOnlyArray<Pick_bool_exp>,
  factionId?: ?Int_comparison_exp,
  gameId?: ?Int_comparison_exp,
  gameuserId?: ?Int_comparison_exp,
  pick_id?: ?Int_comparison_exp,
  picked?: ?Boolean_comparison_exp,
|};
export type Game_bool_exp = {|
  Bans?: ?Ban_bool_exp,
  GameUsers?: ?GameUser_bool_exp,
  Group?: ?Group_bool_exp,
  Picks?: ?Pick_bool_exp,
  _and?: ?$ReadOnlyArray<Game_bool_exp>,
  _not?: ?Game_bool_exp,
  _or?: ?$ReadOnlyArray<Game_bool_exp>,
  availableSeats?: ?String_comparison_exp,
  bansDone?: ?Boolean_comparison_exp,
  bansLower?: ?Int_comparison_exp,
  bansUpper?: ?Int_comparison_exp,
  draftStarted?: ?Boolean_comparison_exp,
  gameAdmin?: ?Int_comparison_exp,
  gameUserByGameadmin?: ?GameUser_bool_exp,
  game_id?: ?Int_comparison_exp,
  groupId?: ?Int_comparison_exp,
  hsLabels?: ?String_comparison_exp,
  mapString?: ?String_comparison_exp,
  picksDone?: ?Boolean_comparison_exp,
  userPicking?: ?Int_comparison_exp,
|};
export type GameUser_bool_exp = {|
  Bans?: ?Ban_bool_exp,
  Game?: ?Game_bool_exp,
  Pick?: ?Pick_bool_exp,
  Picks?: ?Pick_bool_exp,
  User?: ?User_bool_exp,
  _and?: ?$ReadOnlyArray<GameUser_bool_exp>,
  _not?: ?GameUser_bool_exp,
  _or?: ?$ReadOnlyArray<GameUser_bool_exp>,
  banningDone?: ?Boolean_comparison_exp,
  gameId?: ?Int_comparison_exp,
  gamesByGameadmin?: ?Game_bool_exp,
  gameuser_id?: ?Int_comparison_exp,
  pickId?: ?Int_comparison_exp,
  pickOrder?: ?Int_comparison_exp,
  seatNumber?: ?Int_comparison_exp,
  userId?: ?Int_comparison_exp,
|};
export type User_bool_exp = {|
  GameUsers?: ?GameUser_bool_exp,
  _and?: ?$ReadOnlyArray<User_bool_exp>,
  _not?: ?User_bool_exp,
  _or?: ?$ReadOnlyArray<User_bool_exp>,
  auth0_id?: ?String_comparison_exp,
  email?: ?String_comparison_exp,
  groupId?: ?Int_comparison_exp,
  name?: ?String_comparison_exp,
  password?: ?String_comparison_exp,
  user_id?: ?Int_comparison_exp,
|};
export type String_comparison_exp = {|
  _eq?: ?string,
  _gt?: ?string,
  _gte?: ?string,
  _ilike?: ?string,
  _in?: ?$ReadOnlyArray<string>,
  _iregex?: ?string,
  _is_null?: ?boolean,
  _like?: ?string,
  _lt?: ?string,
  _lte?: ?string,
  _neq?: ?string,
  _nilike?: ?string,
  _nin?: ?$ReadOnlyArray<string>,
  _niregex?: ?string,
  _nlike?: ?string,
  _nregex?: ?string,
  _nsimilar?: ?string,
  _regex?: ?string,
  _similar?: ?string,
|};
export type Int_comparison_exp = {|
  _eq?: ?number,
  _gt?: ?number,
  _gte?: ?number,
  _in?: ?$ReadOnlyArray<number>,
  _is_null?: ?boolean,
  _lt?: ?number,
  _lte?: ?number,
  _neq?: ?number,
  _nin?: ?$ReadOnlyArray<number>,
|};
export type Boolean_comparison_exp = {|
  _eq?: ?boolean,
  _gt?: ?boolean,
  _gte?: ?boolean,
  _in?: ?$ReadOnlyArray<boolean>,
  _is_null?: ?boolean,
  _lt?: ?boolean,
  _lte?: ?boolean,
  _neq?: ?boolean,
  _nin?: ?$ReadOnlyArray<boolean>,
|};
export type Group_bool_exp = {|
  Games?: ?Game_bool_exp,
  GroupName?: ?String_comparison_exp,
  _and?: ?$ReadOnlyArray<Group_bool_exp>,
  _not?: ?Group_bool_exp,
  _or?: ?$ReadOnlyArray<Group_bool_exp>,
  groupPassword?: ?String_comparison_exp,
  group_id?: ?Int_comparison_exp,
|};
export type GameUser_arr_rel_insert_input = {|
  data: $ReadOnlyArray<GameUser_insert_input>,
  on_conflict?: ?GameUser_on_conflict,
|};
export type GameUser_insert_input = {|
  Bans?: ?Ban_arr_rel_insert_input,
  Game?: ?Game_obj_rel_insert_input,
  Pick?: ?Pick_obj_rel_insert_input,
  Picks?: ?Pick_arr_rel_insert_input,
  User?: ?User_obj_rel_insert_input,
  banningDone?: ?boolean,
  gameId?: ?number,
  gamesByGameadmin?: ?Game_arr_rel_insert_input,
  gameuser_id?: ?number,
  pickId?: ?number,
  pickOrder?: ?number,
  seatNumber?: ?number,
  userId?: ?number,
|};
export type Pick_obj_rel_insert_input = {|
  data: Pick_insert_input,
  on_conflict?: ?Pick_on_conflict,
|};
export type Pick_on_conflict = {|
  constraint: Pick_constraint,
  update_columns: $ReadOnlyArray<Pick_update_column>,
  where?: ?Pick_bool_exp,
|};
export type Pick_arr_rel_insert_input = {|
  data: $ReadOnlyArray<Pick_insert_input>,
  on_conflict?: ?Pick_on_conflict,
|};
export type User_obj_rel_insert_input = {|
  data: User_insert_input,
  on_conflict?: ?User_on_conflict,
|};
export type User_insert_input = {|
  GameUsers?: ?GameUser_arr_rel_insert_input,
  auth0_id?: ?string,
  email?: ?string,
  groupId?: ?number,
  name?: ?string,
  password?: ?string,
  user_id?: ?number,
|};
export type User_on_conflict = {|
  constraint: User_constraint,
  update_columns: $ReadOnlyArray<User_update_column>,
  where?: ?User_bool_exp,
|};
export type Game_arr_rel_insert_input = {|
  data: $ReadOnlyArray<Game_insert_input>,
  on_conflict?: ?Game_on_conflict,
|};
export type Game_on_conflict = {|
  constraint: Game_constraint,
  update_columns: $ReadOnlyArray<Game_update_column>,
  where?: ?Game_bool_exp,
|};
export type GameUser_on_conflict = {|
  constraint: GameUser_constraint,
  update_columns: $ReadOnlyArray<GameUser_update_column>,
  where?: ?GameUser_bool_exp,
|};
export type Group_obj_rel_insert_input = {|
  data: Group_insert_input,
  on_conflict?: ?Group_on_conflict,
|};
export type Group_insert_input = {|
  Games?: ?Game_arr_rel_insert_input,
  GroupName?: ?string,
  groupPassword?: ?string,
  group_id?: ?number,
|};
export type Group_on_conflict = {|
  constraint: Group_constraint,
  update_columns: $ReadOnlyArray<Group_update_column>,
  where?: ?Group_bool_exp,
|};
export type GameUser_obj_rel_insert_input = {|
  data: GameUser_insert_input,
  on_conflict?: ?GameUser_on_conflict,
|};
export type Faction_on_conflict = {|
  constraint: Faction_constraint,
  update_columns: $ReadOnlyArray<Faction_update_column>,
  where?: ?Faction_bool_exp,
|};
export type InitPicksMutationVariables = {|
  objects: $ReadOnlyArray<Pick_insert_input>
|};
export type InitPicksMutationResponse = {|
  +insert_Pick: ?{|
    +affected_rows: number
  |}
|};
export type InitPicksMutation = {|
  variables: InitPicksMutationVariables,
  response: InitPicksMutationResponse,
|};
*/


/*
mutation InitPicksMutation(
  $objects: [Pick_insert_input!]!
) {
  insert_Pick(objects: $objects) {
    affected_rows
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "objects"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "objects",
        "variableName": "objects"
      }
    ],
    "concreteType": "Pick_mutation_response",
    "kind": "LinkedField",
    "name": "insert_Pick",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "affected_rows",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "InitPicksMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InitPicksMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2c276d7ef9320753821968daac094822",
    "id": null,
    "metadata": {},
    "name": "InitPicksMutation",
    "operationKind": "mutation",
    "text": "mutation InitPicksMutation(\n  $objects: [Pick_insert_input!]!\n) {\n  insert_Pick(objects: $objects) {\n    affected_rows\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '932a1b898d61db0b968c4b7cc1cbd2ab';

module.exports = node;
