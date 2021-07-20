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
    +banningDone: ?boolean,
    +custodian: boolean,
    +name: string,
    +pickOrder: ?number,
    +seatNumber: ?number,
    +user_id: number,
    +Bans: $ReadOnlyArray<{|
      +ban_id: number,
      +banned: boolean,
    |}>,
    +Faction: ?{|
      +faction_id: number,
      +name: string,
    |},
    +Group: ?{|
      +Games: $ReadOnlyArray<{|
        +bansDone: ?boolean,
        +bansLower: ?number,
        +bansUpper: ?number,
        +draftStarted: ?boolean,
        +picksDone: ?boolean,
        +userPicking: ?number,
        +mapString: ?string,
        +hsLabels: ?string,
        +availableSeats: ?string,
        +User: ?{|
          +name: string
        |},
      |}>
    |},
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
    banningDone
    custodian
    name
    pickOrder
    seatNumber
    user_id
    Bans {
      ban_id
      banned
    }
    Faction {
      faction_id
      name
    }
    Group {
      Games {
        bansDone
        bansLower
        bansUpper
        draftStarted
        picksDone
        userPicking
        mapString
        hsLabels
        availableSeats
        User {
          name
        }
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
        "name": "custodian",
        "storageKey": null
      },
      (v1/*: any*/),
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
        "name": "user_id",
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
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Group",
        "kind": "LinkedField",
        "name": "Group",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Game",
            "kind": "LinkedField",
            "name": "Games",
            "plural": true,
            "selections": [
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
                "kind": "ScalarField",
                "name": "mapString",
                "storageKey": null
              },
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
                "name": "availableSeats",
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
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LayoutGridBasicQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f284fdbfc960a3f3f09de5cce273cdb9",
    "id": null,
    "metadata": {},
    "name": "LayoutGridBasicQuery",
    "operationKind": "query",
    "text": "query LayoutGridBasicQuery(\n  $auth0Id: String\n) {\n  User(where: {auth0_id: {_eq: $auth0Id}}) {\n    auth0_id\n    banningDone\n    custodian\n    name\n    pickOrder\n    seatNumber\n    user_id\n    Bans {\n      ban_id\n      banned\n    }\n    Faction {\n      faction_id\n      name\n    }\n    Group {\n      Games {\n        bansDone\n        bansLower\n        bansUpper\n        draftStarted\n        picksDone\n        userPicking\n        mapString\n        hsLabels\n        availableSeats\n        User {\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4ebd336f550d1293f16eb54802941948';

module.exports = node;
