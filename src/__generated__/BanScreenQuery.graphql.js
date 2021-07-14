/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BanScreenQueryVariables = {|
  auth0id?: ?string
|};
export type BanScreenQueryResponse = {|
  +Ban: $ReadOnlyArray<{|
    +User: ?{|
      +user_id: number,
      +name: string,
    |},
    +Faction: ?{|
      +name: string,
      +faction_id: number,
    |},
    +banned: boolean,
    +ban_id: number,
  |}>
|};
export type BanScreenQuery = {|
  variables: BanScreenQueryVariables,
  response: BanScreenQueryResponse,
|};
*/


/*
query BanScreenQuery(
  $auth0id: String
) {
  Ban(where: {User: {auth0_id: {_eq: $auth0id}}}) {
    User {
      user_id
      name
    }
    Faction {
      name
      faction_id
    }
    banned
    ban_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "auth0id"
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
    "concreteType": "Ban",
    "kind": "LinkedField",
    "name": "Ban",
    "plural": true,
    "selections": [
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
            "name": "user_id",
            "storageKey": null
          },
          (v1/*: any*/)
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "faction_id",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "banned",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ban_id",
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
    "name": "BanScreenQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BanScreenQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "aa3816e4252b2efe9f7ffa34a0367887",
    "id": null,
    "metadata": {},
    "name": "BanScreenQuery",
    "operationKind": "query",
    "text": "query BanScreenQuery(\n  $auth0id: String\n) {\n  Ban(where: {User: {auth0_id: {_eq: $auth0id}}}) {\n    User {\n      user_id\n      name\n    }\n    Faction {\n      name\n      faction_id\n    }\n    banned\n    ban_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '364e48d6b0c92f2696027fabcebe2565';

module.exports = node;
