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
    +Faction: ?{|
      +name: string,
      +faction_id: number,
      +url: string,
    |},
    +banned: boolean,
    +ban_id: number,
  |}>,
  +User: $ReadOnlyArray<{|
    +banningDone: ?boolean,
    +name: string,
    +user_id: number,
  |}>,
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
    Faction {
      name
      faction_id
      url
    }
    banned
    ban_id
  }
  User(where: {auth0_id: {_eq: $auth0id}}) {
    banningDone
    name
    user_id
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
v1 = [
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
            "fields": (v1/*: any*/),
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
        "concreteType": "Faction",
        "kind": "LinkedField",
        "name": "Faction",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "faction_id",
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
  },
  {
    "alias": null,
    "args": [
      {
        "fields": (v1/*: any*/),
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
        "name": "banningDone",
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "user_id",
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
    "selections": (v3/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BanScreenQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "d2313446308e32b5f350a4a4fcedf9be",
    "id": null,
    "metadata": {},
    "name": "BanScreenQuery",
    "operationKind": "query",
    "text": "query BanScreenQuery(\n  $auth0id: String\n) {\n  Ban(where: {User: {auth0_id: {_eq: $auth0id}}}) {\n    Faction {\n      name\n      faction_id\n      url\n    }\n    banned\n    ban_id\n  }\n  User(where: {auth0_id: {_eq: $auth0id}}) {\n    banningDone\n    name\n    user_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2ad6f097fa8245ecd29dcd14bd3b41f4';

module.exports = node;
