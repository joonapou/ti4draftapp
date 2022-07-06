/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PicksQueryVariables = {|
  gameId?: ?number
|};
export type PicksQueryResponse = {|
  +GameUser: $ReadOnlyArray<{|
    +pickOrder: ?number,
    +seatNumber: ?number,
    +User: {|
      +name: string
    |},
    +Pick: ?{|
      +Faction: {|
        +name: string,
        +url: string,
      |}
    |},
  |}>
|};
export type PicksQuery = {|
  variables: PicksQueryVariables,
  response: PicksQueryResponse,
|};
*/


/*
query PicksQuery(
  $gameId: Int
) {
  GameUser(where: {Game: {game_id: {_eq: $gameId}}}) {
    pickOrder
    seatNumber
    User {
      name
    }
    Pick {
      Faction {
        name
        url
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
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
            "name": "Game"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "GameUser",
    "kind": "LinkedField",
    "name": "GameUser",
    "plural": true,
    "selections": [
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
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
            "concreteType": "Faction",
            "kind": "LinkedField",
            "name": "Faction",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
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
    "name": "PicksQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PicksQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "9164eabfc422764458de703b8b365233",
    "id": null,
    "metadata": {},
    "name": "PicksQuery",
    "operationKind": "query",
    "text": "query PicksQuery(\n  $gameId: Int\n) {\n  GameUser(where: {Game: {game_id: {_eq: $gameId}}}) {\n    pickOrder\n    seatNumber\n    User {\n      name\n    }\n    Pick {\n      Faction {\n        name\n        url\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e2fb8e63fff233aed42c25cfdb858c33';

module.exports = node;
