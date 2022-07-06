/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickScreenUserSeatMutationVariables = {|
  gameUserId?: ?number,
  seatNumber?: ?number,
|};
export type PickScreenUserSeatMutationResponse = {|
  +update_GameUser: ?{|
    +returning: $ReadOnlyArray<{|
      +gameuser_id: number,
      +pickId: ?number,
      +pickOrder: ?number,
      +seatNumber: ?number,
    |}>
  |}
|};
export type PickScreenUserSeatMutation = {|
  variables: PickScreenUserSeatMutationVariables,
  response: PickScreenUserSeatMutationResponse,
|};
*/


/*
mutation PickScreenUserSeatMutation(
  $gameUserId: Int
  $seatNumber: Int
) {
  update_GameUser(where: {gameId: {_eq: $gameUserId}}, _set: {seatNumber: $seatNumber}) {
    returning {
      gameuser_id
      pickId
      pickOrder
      seatNumber
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "gameUserId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "seatNumber"
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
            "name": "seatNumber",
            "variableName": "seatNumber"
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
                "variableName": "gameUserId"
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
    "concreteType": "GameUser_mutation_response",
    "kind": "LinkedField",
    "name": "update_GameUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GameUser",
        "kind": "LinkedField",
        "name": "returning",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gameuser_id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pickId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pickOrder",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "seatNumber",
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
    "name": "PickScreenUserSeatMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PickScreenUserSeatMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a702fdd52c263dea773f7c65df0dfee9",
    "id": null,
    "metadata": {},
    "name": "PickScreenUserSeatMutation",
    "operationKind": "mutation",
    "text": "mutation PickScreenUserSeatMutation(\n  $gameUserId: Int\n  $seatNumber: Int\n) {\n  update_GameUser(where: {gameId: {_eq: $gameUserId}}, _set: {seatNumber: $seatNumber}) {\n    returning {\n      gameuser_id\n      pickId\n      pickOrder\n      seatNumber\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '58965e4f03a30511e338f1c5ec3e6ff4';

module.exports = node;
