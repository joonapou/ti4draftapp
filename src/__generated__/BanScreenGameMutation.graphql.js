/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BanScreenGameMutationVariables = {|
  gameId?: ?number,
  bansDone?: ?boolean,
|};
export type BanScreenGameMutationResponse = {|
  +update_Game: ?{|
    +affected_rows: number
  |}
|};
export type BanScreenGameMutation = {|
  variables: BanScreenGameMutationVariables,
  response: BanScreenGameMutationResponse,
|};
*/


/*
mutation BanScreenGameMutation(
  $gameId: Int
  $bansDone: Boolean
) {
  update_Game(where: {game_id: {_eq: $gameId}}, _set: {bansDone: $bansDone}) {
    affected_rows
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bansDone"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "gameId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "bansDone",
            "variableName": "bansDone"
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
    "name": "BanScreenGameMutation",
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
    "name": "BanScreenGameMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "df171949708fc2b95133826435c89eed",
    "id": null,
    "metadata": {},
    "name": "BanScreenGameMutation",
    "operationKind": "mutation",
    "text": "mutation BanScreenGameMutation(\n  $gameId: Int\n  $bansDone: Boolean\n) {\n  update_Game(where: {game_id: {_eq: $gameId}}, _set: {bansDone: $bansDone}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0cf2f02448efbfd76546ffdb6d10c82c';

module.exports = node;
