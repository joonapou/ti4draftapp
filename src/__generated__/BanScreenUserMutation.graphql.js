/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BanScreenUserMutationVariables = {|
  auth0id?: ?string,
  banningDone?: ?boolean,
|};
export type BanScreenUserMutationResponse = {|
  +update_GameUser: ?{|
    +returning: $ReadOnlyArray<{|
      +banningDone: boolean,
      +gameuser_id: number,
      +Game: ?{|
        +game_id: number
      |},
    |}>
  |}
|};
export type BanScreenUserMutation = {|
  variables: BanScreenUserMutationVariables,
  response: BanScreenUserMutationResponse,
|};
*/


/*
mutation BanScreenUserMutation(
  $auth0id: String
  $banningDone: Boolean
) {
  update_GameUser(where: {User: {auth0_id: {_eq: $auth0id}}}, _set: {banningDone: $banningDone}) {
    returning {
      banningDone
      gameuser_id
      Game {
        game_id
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
    "name": "auth0id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "banningDone"
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
            "name": "banningDone",
            "variableName": "banningDone"
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
                "fields": [
                  {
                    "kind": "Variable",
                    "name": "_eq",
                    "variableName": "auth0id"
                  }
                ],
                "kind": "ObjectValue",
                "name": "auth0_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "User"
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
            "name": "banningDone",
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
            "concreteType": "Game",
            "kind": "LinkedField",
            "name": "Game",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "game_id",
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
    "name": "BanScreenUserMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BanScreenUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "38d1a17153b6d593afba2986dcc8da8e",
    "id": null,
    "metadata": {},
    "name": "BanScreenUserMutation",
    "operationKind": "mutation",
    "text": "mutation BanScreenUserMutation(\n  $auth0id: String\n  $banningDone: Boolean\n) {\n  update_GameUser(where: {User: {auth0_id: {_eq: $auth0id}}}, _set: {banningDone: $banningDone}) {\n    returning {\n      banningDone\n      gameuser_id\n      Game {\n        game_id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2d8673686b1b83976599f57c99959c41';

module.exports = node;
