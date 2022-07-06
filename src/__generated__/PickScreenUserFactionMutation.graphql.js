/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickScreenUserFactionMutationVariables = {|
  factionId?: ?number,
  gameId?: ?number,
  gameuserId?: ?number,
|};
export type PickScreenUserFactionMutationResponse = {|
  +update_Pick: ?{|
    +returning: $ReadOnlyArray<{|
      +factionId: number,
      +gameuserId: ?number,
      +pick_id: number,
      +picked: boolean,
    |}>
  |}
|};
export type PickScreenUserFactionMutation = {|
  variables: PickScreenUserFactionMutationVariables,
  response: PickScreenUserFactionMutationResponse,
|};
*/


/*
mutation PickScreenUserFactionMutation(
  $factionId: Int
  $gameId: Int
  $gameuserId: Int
) {
  update_Pick(where: {factionId: {_eq: $factionId}, gameId: {_eq: $gameId}}, _set: {gameuserId: $gameuserId, picked: true}) {
    returning {
      factionId
      gameuserId
      pick_id
      picked
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "factionId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "gameId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "gameuserId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "gameuserId",
            "variableName": "gameuserId"
          },
          {
            "kind": "Literal",
            "name": "picked",
            "value": true
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
                "variableName": "factionId"
              }
            ],
            "kind": "ObjectValue",
            "name": "factionId"
          },
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "gameId"
              }
            ],
            "kind": "ObjectValue",
            "name": "gameId"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "Pick_mutation_response",
    "kind": "LinkedField",
    "name": "update_Pick",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Pick",
        "kind": "LinkedField",
        "name": "returning",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "factionId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gameuserId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pick_id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "picked",
            "storageKey": null
          }
        ],
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
    "name": "PickScreenUserFactionMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PickScreenUserFactionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a31695cde5a99a675e77b364749bf75e",
    "id": null,
    "metadata": {},
    "name": "PickScreenUserFactionMutation",
    "operationKind": "mutation",
    "text": "mutation PickScreenUserFactionMutation(\n  $factionId: Int\n  $gameId: Int\n  $gameuserId: Int\n) {\n  update_Pick(where: {factionId: {_eq: $factionId}, gameId: {_eq: $gameId}}, _set: {gameuserId: $gameuserId, picked: true}) {\n    returning {\n      factionId\n      gameuserId\n      pick_id\n      picked\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c0183166063724039d0c142a495a13d5';

module.exports = node;
