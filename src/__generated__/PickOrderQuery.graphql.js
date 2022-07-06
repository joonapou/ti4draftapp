/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickOrderQueryVariables = {|
  gameId?: ?number
|};
export type PickOrderQueryResponse = {|
  +Game: $ReadOnlyArray<{|
    +GameUsers: $ReadOnlyArray<{|
      +gameuser_id: number,
      +User: {|
        +name: string
      |},
      +pickOrder: ?number,
      +seatNumber: ?number,
      +Pick: ?{|
        +factionId: number
      |},
    |}>
  |}>
|};
export type PickOrderQuery = {|
  variables: PickOrderQueryVariables,
  response: PickOrderQueryResponse,
|};
*/


/*
query PickOrderQuery(
  $gameId: Int
) {
  Game(where: {game_id: {_eq: $gameId}}) {
    GameUsers {
      gameuser_id
      User {
        name
      }
      pickOrder
      seatNumber
      Pick {
        factionId
      }
    }
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
    "concreteType": "Game",
    "kind": "LinkedField",
    "name": "Game",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GameUser",
        "kind": "LinkedField",
        "name": "GameUsers",
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
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "User",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Pick",
            "kind": "LinkedField",
            "name": "Pick",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "factionId",
                "storageKey": null
              }
            ],
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
    "name": "PickOrderQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PickOrderQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "15abe46237a1316e69de3184589ecc7f",
    "id": null,
    "metadata": {},
    "name": "PickOrderQuery",
    "operationKind": "query",
    "text": "query PickOrderQuery(\n  $gameId: Int\n) {\n  Game(where: {game_id: {_eq: $gameId}}) {\n    GameUsers {\n      gameuser_id\n      User {\n        name\n      }\n      pickOrder\n      seatNumber\n      Pick {\n        factionId\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8d78beb0574a0460829ac46afb92d5d';

module.exports = node;
