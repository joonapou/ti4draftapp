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
  +update_User: ?{|
    +affected_rows: number
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
  update_User(where: {auth0_id: {_eq: $auth0id}}, _set: {banningDone: $banningDone}) {
    affected_rows
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
        "name": "where"
      }
    ],
    "concreteType": "User_mutation_response",
    "kind": "LinkedField",
    "name": "update_User",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "affected_rows",
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
    "cacheID": "76ec0f63fc6488a6bf56b8e9418d6330",
    "id": null,
    "metadata": {},
    "name": "BanScreenUserMutation",
    "operationKind": "mutation",
    "text": "mutation BanScreenUserMutation(\n  $auth0id: String\n  $banningDone: Boolean\n) {\n  update_User(where: {auth0_id: {_eq: $auth0id}}, _set: {banningDone: $banningDone}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6a1b1e170087299d2608fd33562c9582';

module.exports = node;
