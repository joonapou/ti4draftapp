/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickScreenQueryVariables = {|
  gameId?: ?number
|};
export type PickScreenQueryResponse = {|
  +Pick: $ReadOnlyArray<{|
    +picked: boolean,
    +pick_id: number,
    +gameId: number,
    +gameuserId: ?number,
    +factionId: number,
    +Faction: {|
      +name: string,
      +url: string,
    |},
  |}>
|};
export type PickScreenQuery = {|
  variables: PickScreenQueryVariables,
  response: PickScreenQueryResponse,
|};
*/


/*
query PickScreenQuery(
  $gameId: Int
) {
  Pick(where: {picked: {_eq: false}, gameId: {_eq: $gameId}}) {
    picked
    pick_id
    gameId
    gameuserId
    factionId
    Faction {
      name
      url
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
            "name": "gameId"
          },
          {
            "kind": "Literal",
            "name": "picked",
            "value": {
              "_eq": false
            }
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "Pick",
    "kind": "LinkedField",
    "name": "Pick",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "picked",
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
        "name": "gameId",
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
        "name": "factionId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Faction",
        "kind": "LinkedField",
        "name": "Faction",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PickScreenQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PickScreenQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "25b261ce0a2fd1f5cd7a4aa01e2b77e9",
    "id": null,
    "metadata": {},
    "name": "PickScreenQuery",
    "operationKind": "query",
    "text": "query PickScreenQuery(\n  $gameId: Int\n) {\n  Pick(where: {picked: {_eq: false}, gameId: {_eq: $gameId}}) {\n    picked\n    pick_id\n    gameId\n    gameuserId\n    factionId\n    Faction {\n      name\n      url\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '04bb3261e955cfdabeb4b76f1e75de4f';

module.exports = node;
