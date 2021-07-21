/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateGameGameAdminMutationVariables = {|
  gameUserId?: ?number,
  gameId?: ?number,
|};
export type CreateGameGameAdminMutationResponse = {|
  +update_Game: ?{|
    +affected_rows: number
  |}
|};
export type CreateGameGameAdminMutation = {|
  variables: CreateGameGameAdminMutationVariables,
  response: CreateGameGameAdminMutationResponse,
|};
*/


/*
mutation CreateGameGameAdminMutation(
  $gameUserId: Int
  $gameId: Int
) {
  update_Game(where: {game_id: {_eq: $gameId}}, _set: {gameAdmin: $gameUserId}) {
    affected_rows
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "gameId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "gameUserId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "gameAdmin",
            "variableName": "gameUserId"
          }
        ],
        "kind": "ObjectValue",
        "name": "_set"
      },
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "gameId"
              }
            ],
            "kind": "ObjectValue",
            "name": "game_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "Game_mutation_response",
    "kind": "LinkedField",
    "name": "update_Game",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateGameGameAdminMutation",
    "selections": (v2/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateGameGameAdminMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "adf0b45bb70d273a0febe4eaad84f01e",
    "id": null,
    "metadata": {},
    "name": "CreateGameGameAdminMutation",
    "operationKind": "mutation",
    "text": "mutation CreateGameGameAdminMutation(\n  $gameUserId: Int\n  $gameId: Int\n) {\n  update_Game(where: {game_id: {_eq: $gameId}}, _set: {gameAdmin: $gameUserId}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '95d3ed6fcb683e56938336af7a09b97d';

module.exports = node;
