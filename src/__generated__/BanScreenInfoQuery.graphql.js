/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BanScreenInfoQueryVariables = {|
  auth0Id?: ?string
|};
export type BanScreenInfoQueryResponse = {|
  +Game: $ReadOnlyArray<{|
    +bansLower: ?number,
    +bansUpper: ?number,
  |}>
|};
export type BanScreenInfoQuery = {|
  variables: BanScreenInfoQueryVariables,
  response: BanScreenInfoQueryResponse,
|};
*/


/*
query BanScreenInfoQuery(
  $auth0Id: String
) {
  Game(where: {GameUser: {User: {auth0_id: {_eq: $auth0Id}}}}) {
    bansLower
    bansUpper
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
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
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
            "kind": "ObjectValue",
            "name": "GameUser"
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
    "name": "BanScreenInfoQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BanScreenInfoQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cb08c810a86ea87ee37fe68fa52d3ecb",
    "id": null,
    "metadata": {},
    "name": "BanScreenInfoQuery",
    "operationKind": "query",
    "text": "query BanScreenInfoQuery(\n  $auth0Id: String\n) {\n  Game(where: {GameUser: {User: {auth0_id: {_eq: $auth0Id}}}}) {\n    bansLower\n    bansUpper\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f79965acc20f12a3f2e3eb2f69372bf7';

module.exports = node;
