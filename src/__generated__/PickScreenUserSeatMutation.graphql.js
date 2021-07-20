/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickScreenUserSeatMutationVariables = {|
  auth0id?: ?string,
  seatnumber?: ?number,
|};
export type PickScreenUserSeatMutationResponse = {|
  +update_User: ?{|
    +affected_rows: number
  |}
|};
export type PickScreenUserSeatMutation = {|
  variables: PickScreenUserSeatMutationVariables,
  response: PickScreenUserSeatMutationResponse,
|};
*/


/*
mutation PickScreenUserSeatMutation(
  $auth0id: String
  $seatnumber: Int
) {
  update_User(where: {auth0_id: {_eq: $auth0id}}, _set: {seatNumber: $seatnumber}) {
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
    "name": "seatnumber"
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
            "name": "seatNumber",
            "variableName": "seatnumber"
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
    "name": "PickScreenUserSeatMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PickScreenUserSeatMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "88a33ee40ff361b5189ad9c4b19a734b",
    "id": null,
    "metadata": {},
    "name": "PickScreenUserSeatMutation",
    "operationKind": "mutation",
    "text": "mutation PickScreenUserSeatMutation(\n  $auth0id: String\n  $seatnumber: Int\n) {\n  update_User(where: {auth0_id: {_eq: $auth0id}}, _set: {seatNumber: $seatnumber}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ae37a1b431ca1fc7863124e58b8b5c85';

module.exports = node;
