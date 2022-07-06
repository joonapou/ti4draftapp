/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickButtonGameMutationVariables = {|
  gameId?: ?number
|};
export type PickButtonGameMutationResponse = {|
  +update_Game: ?{|
    +affected_rows: number
  |}
|};
export type PickButtonGameMutation = {|
  variables: PickButtonGameMutationVariables,
  response: PickButtonGameMutationResponse,
|};
*/


/*
mutation PickButtonGameMutation(
  $gameId: Int
) {
  update_Game(where: {game_id: {_eq: $gameId}}, _set: {draftStarted: true}) {
    affected_rows
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "gameId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "_set",
        "value": {
          "draftStarted": true
        }
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PickButtonGameMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PickButtonGameMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "616ab9a07a1647dd6a67c56ae0a9c394",
    "id": null,
    "metadata": {},
    "name": "PickButtonGameMutation",
    "operationKind": "mutation",
    "text": "mutation PickButtonGameMutation(\n  $gameId: Int\n) {\n  update_Game(where: {game_id: {_eq: $gameId}}, _set: {draftStarted: true}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd495054a916c20dec1a96d235f5cdae1';

module.exports = node;
