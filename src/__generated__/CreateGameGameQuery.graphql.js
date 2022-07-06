/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateGameGameQueryVariables = {|
  group_id?: ?number
|};
export type CreateGameGameQueryResponse = {|
  +Game: $ReadOnlyArray<{|
    +name: ?string,
    +gameUserByGameadmin: ?{|
      +User: {|
        +name: string
      |}
    |},
    +draftStarted: ?boolean,
    +bansDone: ?boolean,
    +picksDone: ?boolean,
    +gameCreated: ?any,
    +game_id: number,
  |}>
|};
export type CreateGameGameQuery = {|
  variables: CreateGameGameQueryVariables,
  response: CreateGameGameQueryResponse,
|};
*/


/*
query CreateGameGameQuery(
  $group_id: Int
) {
  Game(where: {groupId: {_eq: $group_id}}) {
    name
    gameUserByGameadmin {
      User {
        name
      }
    }
    draftStarted
    bansDone
    picksDone
    gameCreated
    game_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "group_id"
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
                "variableName": "group_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "groupId"
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
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "GameUser",
        "kind": "LinkedField",
        "name": "gameUserByGameadmin",
        "plural": false,
        "selections": [
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
        "name": "bansDone",
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
        "name": "gameCreated",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateGameGameQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateGameGameQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4b0fb27a9979293ee6ad4399bc855ef9",
    "id": null,
    "metadata": {},
    "name": "CreateGameGameQuery",
    "operationKind": "query",
    "text": "query CreateGameGameQuery(\n  $group_id: Int\n) {\n  Game(where: {groupId: {_eq: $group_id}}) {\n    name\n    gameUserByGameadmin {\n      User {\n        name\n      }\n    }\n    draftStarted\n    bansDone\n    picksDone\n    gameCreated\n    game_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1ae8af388fc7b8f23089547f762d0fa7';

module.exports = node;
