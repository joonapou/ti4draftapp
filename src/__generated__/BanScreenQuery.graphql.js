/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BanScreenQueryVariables = {|
  auth0Id?: ?string
|};
export type BanScreenQueryResponse = {|
  +Ban: $ReadOnlyArray<{|
    +banned: boolean,
    +ban_id: number,
    +Faction: $ReadOnlyArray<{|
      +faction_id: number,
      +name: string,
      +url: string,
    |}>,
  |}>,
  +GameUser: $ReadOnlyArray<{|
    +banningDone: boolean,
    +gameuser_id: number,
    +User: {|
      +name: string
    |},
  |}>,
|};
export type BanScreenQuery = {|
  variables: BanScreenQueryVariables,
  response: BanScreenQueryResponse,
|};
*/


/*
query BanScreenQuery(
  $auth0Id: String
) {
  Ban(where: {GameUser: {User: {auth0_id: {_eq: $auth0Id}}}}) {
    banned
    ban_id
    Faction {
      faction_id
      name
      url
    }
  }
  GameUser(where: {User: {auth0_id: {_eq: $auth0Id}}}) {
    banningDone
    gameuser_id
    User {
      name
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
v1 = [
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
    "name": "User"
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
            "name": "GameUser"
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Faction",
        "kind": "LinkedField",
        "name": "Faction",
        "plural": true,
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
    "args": [
      {
        "fields": (v1/*: any*/),
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "GameUser",
    "kind": "LinkedField",
    "name": "GameUser",
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "cacheID": "6cdd67e0a6a07c288f87371ff50b1c84",
    "id": null,
    "metadata": {},
    "name": "BanScreenQuery",
    "operationKind": "query",
    "text": "query BanScreenQuery(\n  $auth0Id: String\n) {\n  Ban(where: {GameUser: {User: {auth0_id: {_eq: $auth0Id}}}}) {\n    banned\n    ban_id\n    Faction {\n      faction_id\n      name\n      url\n    }\n  }\n  GameUser(where: {User: {auth0_id: {_eq: $auth0Id}}}) {\n    banningDone\n    gameuser_id\n    User {\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '42d7ebc6e8550667b27fcfc37926b9d4';

module.exports = node;
