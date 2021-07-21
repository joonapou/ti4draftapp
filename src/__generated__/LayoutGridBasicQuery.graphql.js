/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LayoutGridBasicQueryVariables = {|
  auth0Id?: ?string
|};
export type LayoutGridBasicQueryResponse = {|
  +User: $ReadOnlyArray<{|
    +auth0_id: ?string,
    +groupId: ?number,
    +name: string,
    +user_id: number,
    +GameUsers: $ReadOnlyArray<{|
      +banningDone: boolean,
      +gameId: ?number,
      +gameuser_id: number,
      +pickId: ?number,
      +pickOrder: ?number,
      +seatNumber: ?number,
      +userId: number,
      +Bans: $ReadOnlyArray<{|
        +ban_id: number,
        +banned: boolean,
      |}>,
      +Pick: ?{|
        +pick_id: number,
        +picked: boolean,
        +Faction: {|
          +faction_id: number,
          +name: string,
          +url: string,
        |},
      |},
      +Game: ?{|
        +availableSeats: ?string,
        +bansDone: ?boolean,
        +bansLower: ?number,
        +bansUpper: ?number,
        +draftStarted: ?boolean,
        +gameAdmin: ?number,
        +game_id: number,
        +groupId: ?number,
        +hsLabels: ?string,
        +mapString: ?string,
        +picksDone: ?boolean,
        +userPicking: ?number,
      |},
    |}>,
  |}>
|};
export type LayoutGridBasicQuery = {|
  variables: LayoutGridBasicQueryVariables,
  response: LayoutGridBasicQueryResponse,
|};
*/


/*
query LayoutGridBasicQuery(
  $auth0Id: String
) {
  User(where: {auth0_id: {_eq: $auth0Id}}) {
    auth0_id
    groupId
    name
    user_id
    GameUsers {
      banningDone
      gameId
      gameuser_id
      pickId
      pickOrder
      seatNumber
      userId
      Bans {
        ban_id
        banned
      }
      Pick {
        pick_id
        picked
        Faction {
          faction_id
          name
          url
        }
      }
      Game {
        availableSeats
        bansDone
        bansLower
        bansUpper
        draftStarted
        gameAdmin
        game_id
        groupId
        hsLabels
        mapString
        picksDone
        userPicking
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
    "name": "auth0Id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "groupId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
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
                "variableName": "auth0Id"
              }
            ],
            "kind": "ObjectValue",
            "name": "auth0_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "User",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "auth0_id",
        "storageKey": null
      },
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "user_id",
        "storageKey": null
      },
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
            "name": "banningDone",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Ban",
            "kind": "LinkedField",
            "name": "Bans",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ban_id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "banned",
                "storageKey": null
              }
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
                    "name": "faction_id",
                    "storageKey": null
                  },
                  (v2/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Game",
            "kind": "LinkedField",
            "name": "Game",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "availableSeats",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bansDone",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bansLower",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bansUpper",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "draftStarted",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "gameAdmin",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "game_id",
                "storageKey": null
              },
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hsLabels",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "mapString",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "picksDone",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "userPicking",
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
    "name": "LayoutGridBasicQuery",
    "selections": (v3/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LayoutGridBasicQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "9243567552b5e0caacdf3eee82f7e8aa",
    "id": null,
    "metadata": {},
    "name": "LayoutGridBasicQuery",
    "operationKind": "query",
    "text": "query LayoutGridBasicQuery(\n  $auth0Id: String\n) {\n  User(where: {auth0_id: {_eq: $auth0Id}}) {\n    auth0_id\n    groupId\n    name\n    user_id\n    GameUsers {\n      banningDone\n      gameId\n      gameuser_id\n      pickId\n      pickOrder\n      seatNumber\n      userId\n      Bans {\n        ban_id\n        banned\n      }\n      Pick {\n        pick_id\n        picked\n        Faction {\n          faction_id\n          name\n          url\n        }\n      }\n      Game {\n        availableSeats\n        bansDone\n        bansLower\n        bansUpper\n        draftStarted\n        gameAdmin\n        game_id\n        groupId\n        hsLabels\n        mapString\n        picksDone\n        userPicking\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7fba3a4328e89c529a8a80b4557fd8dc';

module.exports = node;
