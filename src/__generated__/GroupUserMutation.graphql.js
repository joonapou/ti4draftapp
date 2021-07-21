/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GroupUserMutationVariables = {|
  groupId?: ?number,
  auth0Id?: ?string,
|};
export type GroupUserMutationResponse = {|
  +update_User: ?{|
    +affected_rows: number
  |}
|};
export type GroupUserMutation = {|
  variables: GroupUserMutationVariables,
  response: GroupUserMutationResponse,
|};
*/


/*
mutation GroupUserMutation(
  $groupId: Int
  $auth0Id: String
) {
  update_User(_set: {groupId: $groupId}, where: {auth0_id: {_eq: $auth0Id}}) {
    affected_rows
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "auth0Id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "groupId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "groupId",
            "variableName": "groupId"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupUserMutation",
    "selections": (v2/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "GroupUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "aeb423a1d1484b4642e2d9d2b77a8e7d",
    "id": null,
    "metadata": {},
    "name": "GroupUserMutation",
    "operationKind": "mutation",
    "text": "mutation GroupUserMutation(\n  $groupId: Int\n  $auth0Id: String\n) {\n  update_User(_set: {groupId: $groupId}, where: {auth0_id: {_eq: $auth0Id}}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'abc9beff5eb913963ef89e2003713e3e';

module.exports = node;
