/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickButtonGameBannedMutationVariables = {|
  gameId?: ?number
|};
export type PickButtonGameBannedMutationResponse = {|
  +update_Game: ?{|
    +affected_rows: number
  |}
|};
export type PickButtonGameBannedMutation = {|
  variables: PickButtonGameBannedMutationVariables,
  response: PickButtonGameBannedMutationResponse,
|};
*/


/*
mutation PickButtonGameBannedMutation(
  $gameId: Int
) {
  update_Game(where: {game_id: {_eq: $gameId}}, _set: {bansDone: true}) {
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
          "bansDone": true
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
    "name": "PickButtonGameBannedMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PickButtonGameBannedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6c1509378d811ba43f57c6fb780f72a3",
    "id": null,
    "metadata": {},
    "name": "PickButtonGameBannedMutation",
    "operationKind": "mutation",
    "text": "mutation PickButtonGameBannedMutation(\n  $gameId: Int\n) {\n  update_Game(where: {game_id: {_eq: $gameId}}, _set: {bansDone: true}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4e0d21290c957a0070653f898ff02509';

module.exports = node;
