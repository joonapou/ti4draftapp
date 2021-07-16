/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Ban_constraint = "Ban_factionId_key" | "Ban_pkey" | "%future added value";
export type Ban_update_column = "ban_id" | "banned" | "factionId" | "gameId" | "userId" | "%future added value";
export type Faction_constraint = "Faction_id_key" | "Faction_pkey1" | "%future added value";
export type Faction_update_column = "faction_id" | "name" | "url" | "%future added value";
export type Game_constraint = "Game_groupId_unique" | "Game_pkey" | "%future added value";
export type Game_update_column = "amountOfBans" | "bansDone" | "bansLower" | "bansUpper" | "draftStarted" | "game_id" | "groupId" | "hsLabels" | "mapString" | "picksDone" | "userPicking" | "%future added value";
export type Group_constraint = "Group_pkey" | "%future added value";
export type Group_update_column = "GroupName" | "group_id" | "%future added value";
export type Pick_constraint = "Pick_pkey" | "Pick_userId_unique" | "%future added value";
export type Pick_update_column = "factionId" | "gameId" | "pick_id" | "picked" | "userId" | "%future added value";
export type User_constraint = "User_id_key" | "User_pkey1" | "%future added value";
export type User_update_column = "auth0_id" | "banningDone" | "custodian" | "email" | "factionId" | "groupId" | "name" | "password" | "pickOrder" | "seatNumber" | "user_id" | "%future added value";
export type Ban_insert_input = {|
  Faction?: ?Faction_obj_rel_insert_input,
  Game?: ?Game_obj_rel_insert_input,
  User?: ?User_obj_rel_insert_input,
  ban_id?: ?number,
  banned?: ?boolean,
  factionId?: ?number,
  gameId?: ?number,
  userId?: ?number,
|};
export type Faction_obj_rel_insert_input = {|
  data: Faction_insert_input,
  on_conflict?: ?Faction_on_conflict,
|};
export type Faction_insert_input = {|
  Bans?: ?Ban_arr_rel_insert_input,
  Picks?: ?Pick_arr_rel_insert_input,
  Users?: ?User_arr_rel_insert_input,
  faction_id?: ?number,
  name?: ?string,
  url?: ?string,
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
  User?: ?User_bool_exp,
  _and?: ?$ReadOnlyArray<Ban_bool_exp>,
  _not?: ?Ban_bool_exp,
  _or?: ?$ReadOnlyArray<Ban_bool_exp>,
  ban_id?: ?Int_comparison_exp,
  banned?: ?Boolean_comparison_exp,
  factionId?: ?Int_comparison_exp,
  gameId?: ?Int_comparison_exp,
  userId?: ?Int_comparison_exp,
|};
export type Faction_bool_exp = {|
  Bans?: ?Ban_bool_exp,
  Picks?: ?Pick_bool_exp,
  Users?: ?User_bool_exp,
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
  User?: ?User_bool_exp,
  _and?: ?$ReadOnlyArray<Pick_bool_exp>,
  _not?: ?Pick_bool_exp,
  _or?: ?$ReadOnlyArray<Pick_bool_exp>,
  factionId?: ?Int_comparison_exp,
  gameId?: ?Int_comparison_exp,
  pick_id?: ?Int_comparison_exp,
  picked?: ?Boolean_comparison_exp,
  userId?: ?Int_comparison_exp,
|};
export type Game_bool_exp = {|
  Bans?: ?Ban_bool_exp,
  Group?: ?Group_bool_exp,
  Picks?: ?Pick_bool_exp,
  _and?: ?$ReadOnlyArray<Game_bool_exp>,
  _not?: ?Game_bool_exp,
  _or?: ?$ReadOnlyArray<Game_bool_exp>,
  amountOfBans?: ?String_comparison_exp,
  bansDone?: ?Boolean_comparison_exp,
  bansLower?: ?Int_comparison_exp,
  bansUpper?: ?Int_comparison_exp,
  draftStarted?: ?Boolean_comparison_exp,
  game_id?: ?Int_comparison_exp,
  groupId?: ?Int_comparison_exp,
  hsLabels?: ?String_comparison_exp,
  mapString?: ?String_comparison_exp,
  picksDone?: ?Boolean_comparison_exp,
  userPicking?: ?String_comparison_exp,
|};
export type Group_bool_exp = {|
  Games?: ?Game_bool_exp,
  GroupName?: ?String_comparison_exp,
  Users?: ?User_bool_exp,
  _and?: ?$ReadOnlyArray<Group_bool_exp>,
  _not?: ?Group_bool_exp,
  _or?: ?$ReadOnlyArray<Group_bool_exp>,
  group_id?: ?Int_comparison_exp,
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
export type User_bool_exp = {|
  Bans?: ?Ban_bool_exp,
  Faction?: ?Faction_bool_exp,
  Group?: ?Group_bool_exp,
  Picks?: ?Pick_bool_exp,
  _and?: ?$ReadOnlyArray<User_bool_exp>,
  _not?: ?User_bool_exp,
  _or?: ?$ReadOnlyArray<User_bool_exp>,
  auth0_id?: ?String_comparison_exp,
  banningDone?: ?Boolean_comparison_exp,
  custodian?: ?Boolean_comparison_exp,
  email?: ?String_comparison_exp,
  factionId?: ?Int_comparison_exp,
  groupId?: ?Int_comparison_exp,
  name?: ?String_comparison_exp,
  password?: ?String_comparison_exp,
  pickOrder?: ?Int_comparison_exp,
  seatNumber?: ?Int_comparison_exp,
  user_id?: ?Int_comparison_exp,
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
export type Pick_arr_rel_insert_input = {|
  data: $ReadOnlyArray<Pick_insert_input>,
  on_conflict?: ?Pick_on_conflict,
|};
export type Pick_insert_input = {|
  Faction?: ?Faction_obj_rel_insert_input,
  Game?: ?Game_obj_rel_insert_input,
  User?: ?User_obj_rel_insert_input,
  factionId?: ?number,
  gameId?: ?number,
  pick_id?: ?number,
  picked?: ?boolean,
  userId?: ?number,
|};
export type Game_obj_rel_insert_input = {|
  data: Game_insert_input,
  on_conflict?: ?Game_on_conflict,
|};
export type Game_insert_input = {|
  Bans?: ?Ban_arr_rel_insert_input,
  Group?: ?Group_obj_rel_insert_input,
  Picks?: ?Pick_arr_rel_insert_input,
  amountOfBans?: ?string,
  bansDone?: ?boolean,
  bansLower?: ?number,
  bansUpper?: ?number,
  draftStarted?: ?boolean,
  game_id?: ?number,
  groupId?: ?number,
  hsLabels?: ?string,
  mapString?: ?string,
  picksDone?: ?boolean,
  userPicking?: ?string,
|};
export type Group_obj_rel_insert_input = {|
  data: Group_insert_input,
  on_conflict?: ?Group_on_conflict,
|};
export type Group_insert_input = {|
  Games?: ?Game_arr_rel_insert_input,
  GroupName?: ?string,
  Users?: ?User_arr_rel_insert_input,
  group_id?: ?number,
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
export type User_arr_rel_insert_input = {|
  data: $ReadOnlyArray<User_insert_input>,
  on_conflict?: ?User_on_conflict,
|};
export type User_insert_input = {|
  Bans?: ?Ban_arr_rel_insert_input,
  Faction?: ?Faction_obj_rel_insert_input,
  Group?: ?Group_obj_rel_insert_input,
  Picks?: ?Pick_arr_rel_insert_input,
  auth0_id?: ?string,
  banningDone?: ?boolean,
  custodian?: ?boolean,
  email?: ?string,
  factionId?: ?number,
  groupId?: ?number,
  name?: ?string,
  password?: ?string,
  pickOrder?: ?number,
  seatNumber?: ?number,
  user_id?: ?number,
|};
export type User_on_conflict = {|
  constraint: User_constraint,
  update_columns: $ReadOnlyArray<User_update_column>,
  where?: ?User_bool_exp,
|};
export type Group_on_conflict = {|
  constraint: Group_constraint,
  update_columns: $ReadOnlyArray<Group_update_column>,
  where?: ?Group_bool_exp,
|};
export type User_obj_rel_insert_input = {|
  data: User_insert_input,
  on_conflict?: ?User_on_conflict,
|};
export type Pick_on_conflict = {|
  constraint: Pick_constraint,
  update_columns: $ReadOnlyArray<Pick_update_column>,
  where?: ?Pick_bool_exp,
|};
export type Faction_on_conflict = {|
  constraint: Faction_constraint,
  update_columns: $ReadOnlyArray<Faction_update_column>,
  where?: ?Faction_bool_exp,
|};
export type InitGameBansMutationVariables = {|
  objects: $ReadOnlyArray<Ban_insert_input>
|};
export type InitGameBansMutationResponse = {|
  +insert_Ban: ?{|
    +affected_rows: number
  |}
|};
export type InitGameBansMutation = {|
  variables: InitGameBansMutationVariables,
  response: InitGameBansMutationResponse,
|};
*/


/*
mutation InitGameBansMutation(
  $objects: [Ban_insert_input!]!
) {
  insert_Ban(objects: $objects) {
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
    "concreteType": "Ban_mutation_response",
    "kind": "LinkedField",
    "name": "insert_Ban",
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
    "name": "InitGameBansMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InitGameBansMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "24eaa34209d51f478033fbc1b148c017",
    "id": null,
    "metadata": {},
    "name": "InitGameBansMutation",
    "operationKind": "mutation",
    "text": "mutation InitGameBansMutation(\n  $objects: [Ban_insert_input!]!\n) {\n  insert_Ban(objects: $objects) {\n    affected_rows\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0ed1ffc1e0b3b6c6d19fdb4626b79c77';

module.exports = node;
