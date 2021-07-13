/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InitGameBansQueryVariables = {|
  user_id?: ?number
|};
export type InitGameBansQueryResponse = {|
  +Game: $ReadOnlyArray<{|
    +Group: ?{|
      +Users: $ReadOnlyArray<{|
        +Bans: $ReadOnlyArray<{|
          +ban_id: number,
          +banned: boolean,
        |}>
      |}>
    |}
  |}>
|};
export type InitGameBansQuery = {|
  variables: InitGameBansQueryVariables,
  response: InitGameBansQueryResponse,
|};
*/


/*
query InitGameBansQuery(
  $user_id: Int
) {
  Game {
    Group {
      Users(where: {user_id: {_eq: $user_id}}) {
        Bans {
          ban_id
          banned
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
    "name": "user_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Game",
    "kind": "LinkedField",
    "name": "Game",
    "plural": true,
    "selections": [
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
            "args": [
              {
                "fields": [
                  {
                    "fields": [
                      {
                        "kind": "Variable",
                        "name": "_eq",
                        "variableName": "user_id"
                      }
                    ],
                    "kind": "ObjectValue",
                    "name": "user_id"
                  }
                ],
                "kind": "ObjectValue",
                "name": "where"
              }
            ],
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "Users",
            "plural": true,
            "selections": [
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
    "name": "InitGameBansQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InitGameBansQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "60f1541bfb9ece71a8c3ece400e96a12",
    "id": null,
    "metadata": {},
    "name": "InitGameBansQuery",
    "operationKind": "query",
    "text": "query InitGameBansQuery(\n  $user_id: Int\n) {\n  Game {\n    Group {\n      Users(where: {user_id: {_eq: $user_id}}) {\n        Bans {\n          ban_id\n          banned\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '377f760194830a42ded6f4327657a67b';

module.exports = node;
