/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateGameMutationVariables = {|
  hsLabels?: ?string,
  mapString?: ?string,
  bansLower?: ?number,
  bansUpper?: ?number,
  groupId?: ?number,
|};
export type CreateGameMutationResponse = {|
  +insert_Game_one: ?{|
    +game_id: number,
    +gameAdmin: ?number,
    +availableSeats: ?string,
    +bansDone: ?boolean,
    +bansLower: ?number,
    +bansUpper: ?number,
    +draftStarted: ?boolean,
    +groupId: ?number,
    +hsLabels: ?string,
    +mapString: ?string,
    +picksDone: ?boolean,
    +userPicking: ?number,
  |}
|};
export type CreateGameMutation = {|
  variables: CreateGameMutationVariables,
  response: CreateGameMutationResponse,
|};
*/


/*
mutation CreateGameMutation(
  $hsLabels: String
  $mapString: String
  $bansLower: Int
  $bansUpper: Int
  $groupId: Int
) {
  insert_Game_one(object: {hsLabels: $hsLabels, mapString: $mapString, bansLower: $bansLower, bansUpper: $bansUpper, groupId: $groupId}) {
    game_id
    gameAdmin
    availableSeats
    bansDone
    bansLower
    bansUpper
    draftStarted
    groupId
    hsLabels
    mapString
    picksDone
    userPicking
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bansLower"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bansUpper"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "groupId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hsLabels"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "mapString"
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "bansLower",
            "variableName": "bansLower"
          },
          {
            "kind": "Variable",
            "name": "bansUpper",
            "variableName": "bansUpper"
          },
          {
            "kind": "Variable",
            "name": "groupId",
            "variableName": "groupId"
          },
          {
            "kind": "Variable",
            "name": "hsLabels",
            "variableName": "hsLabels"
          },
          {
            "kind": "Variable",
            "name": "mapString",
            "variableName": "mapString"
          }
        ],
        "kind": "ObjectValue",
        "name": "object"
      }
    ],
    "concreteType": "Game",
    "kind": "LinkedField",
    "name": "insert_Game_one",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "game_id",
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
        "name": "groupId",
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateGameMutation",
    "selections": (v5/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v4/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateGameMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "3eb4c1bf46f5da7e38bb20bd4dc4fafe",
    "id": null,
    "metadata": {},
    "name": "CreateGameMutation",
    "operationKind": "mutation",
    "text": "mutation CreateGameMutation(\n  $hsLabels: String\n  $mapString: String\n  $bansLower: Int\n  $bansUpper: Int\n  $groupId: Int\n) {\n  insert_Game_one(object: {hsLabels: $hsLabels, mapString: $mapString, bansLower: $bansLower, bansUpper: $bansUpper, groupId: $groupId}) {\n    game_id\n    gameAdmin\n    availableSeats\n    bansDone\n    bansLower\n    bansUpper\n    draftStarted\n    groupId\n    hsLabels\n    mapString\n    picksDone\n    userPicking\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '92fe07541603788e26b94795230505ca';

module.exports = node;
