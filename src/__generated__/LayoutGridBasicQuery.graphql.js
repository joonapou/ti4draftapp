/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LayoutGridBasicQueryVariables = {|
  gameId?: ?number,
  auth0Id?: ?string,
|};
export type LayoutGridBasicQueryResponse = {|
  +User: $ReadOnlyArray<{|
    +auth0_id: string,
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
      +Bans: $ReadOnlyArray<{|
        +ban_id: number,
        +banned: boolean,
        +Faction: $ReadOnlyArray<{|
          +name: string,
          +url: string,
          +faction_id: number,
        |}>,
      |}>,
      +Pick: ?{|
        +factionId: number,
        +pick_id: number,
        +picked: boolean,
        +Faction: {|
          +name: string,
          +faction_id: number,
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
        +gameCreated: ?any,
        +game_id: number,
        +groupId: ?number,
        +hsLabels: ?string,
        +mapString: ?string,
        +name: ?string,
        +picksDone: ?boolean,
        +userPicking: ?number,
        +GameUsers: $ReadOnlyArray<{|
          +userId: number,
          +gameuser_id: number,
          +banningDone: boolean,
          +pickOrder: ?number,
          +seatNumber: ?number,
        |}>,
        +Bans: $ReadOnlyArray<{|
          +banned: boolean,
          +ban_id: number,
          +factionId: number,
        |}>,
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
  $gameId: Int
  $auth0Id: String
) {
  User(where: {auth0_id: {_eq: $auth0Id}}) {
    auth0_id
    groupId
    name
    user_id
    GameUsers(where: {Game: {game_id: {_eq: $gameId}}}) {
      banningDone
      gameId
      gameuser_id
      pickId
      pickOrder
      seatNumber
      Bans {
        ban_id
        banned
        Faction {
          name
          url
          faction_id
        }
      }
      Pick {
        factionId
        pick_id
        picked
        Faction {
          name
          faction_id
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
        gameCreated
        game_id
        groupId
        hsLabels
        mapString
        name
        picksDone
        userPicking
        GameUsers {
          userId
          gameuser_id
          banningDone
          pickOrder
          seatNumber
        }
        Bans {
          banned
          ban_id
          factionId
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "auth0Id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "gameId"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "groupId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "banningDone",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gameuser_id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pickOrder",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seatNumber",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ban_id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "banned",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "faction_id",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "factionId",
  "storageKey": null
},
v13 = [
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
      (v2/*: any*/),
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "user_id",
        "storageKey": null
      },
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
        "name": "GameUsers",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gameId",
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pickId",
            "storageKey": null
          },
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Ban",
            "kind": "LinkedField",
            "name": "Bans",
            "plural": true,
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Faction",
                "kind": "LinkedField",
                "name": "Faction",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/)
                ],
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
              (v12/*: any*/),
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
                  (v3/*: any*/),
                  (v11/*: any*/),
                  (v10/*: any*/)
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
                "name": "gameCreated",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "game_id",
                "storageKey": null
              },
              (v2/*: any*/),
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
              (v3/*: any*/),
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
                    "name": "userId",
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
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
                  (v9/*: any*/),
                  (v8/*: any*/),
                  (v12/*: any*/)
                ],
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutGridBasicQuery",
    "selections": (v13/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "LayoutGridBasicQuery",
    "selections": (v13/*: any*/)
  },
  "params": {
    "cacheID": "438f20d8eb34fa2788e0793d4b22ee69",
    "id": null,
    "metadata": {},
    "name": "LayoutGridBasicQuery",
    "operationKind": "query",
    "text": "query LayoutGridBasicQuery(\n  $gameId: Int\n  $auth0Id: String\n) {\n  User(where: {auth0_id: {_eq: $auth0Id}}) {\n    auth0_id\n    groupId\n    name\n    user_id\n    GameUsers(where: {Game: {game_id: {_eq: $gameId}}}) {\n      banningDone\n      gameId\n      gameuser_id\n      pickId\n      pickOrder\n      seatNumber\n      Bans {\n        ban_id\n        banned\n        Faction {\n          name\n          url\n          faction_id\n        }\n      }\n      Pick {\n        factionId\n        pick_id\n        picked\n        Faction {\n          name\n          faction_id\n          url\n        }\n      }\n      Game {\n        availableSeats\n        bansDone\n        bansLower\n        bansUpper\n        draftStarted\n        gameAdmin\n        gameCreated\n        game_id\n        groupId\n        hsLabels\n        mapString\n        name\n        picksDone\n        userPicking\n        GameUsers {\n          userId\n          gameuser_id\n          banningDone\n          pickOrder\n          seatNumber\n        }\n        Bans {\n          banned\n          ban_id\n          factionId\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5a2d651742453fe0d4c9f593e132f71f';

module.exports = node;
