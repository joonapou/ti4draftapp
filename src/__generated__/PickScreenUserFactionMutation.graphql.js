/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickScreenUserFactionMutationVariables = {|
  auth0id?: ?string,
  faction_id?: ?number,
|};
export type PickScreenUserFactionMutationResponse = {|
  +update_User: ?{|
    +affected_rows: number
  |}
|};
export type PickScreenUserFactionMutation = {|
  variables: PickScreenUserFactionMutationVariables,
  response: PickScreenUserFactionMutationResponse,
|};
*/


/*
mutation PickScreenUserFactionMutation(
  $auth0id: String
  $faction_id: Int
) {
  update_User(where: {auth0_id: {_eq: $auth0id}}, _set: {factionId: $faction_id}) {
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
    "name": "faction_id"
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
            "name": "factionId",
            "variableName": "faction_id"
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
    "name": "PickScreenUserFactionMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PickScreenUserFactionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a8751d1e307a8bbe4f9cf26fb11ed7e8",
    "id": null,
    "metadata": {},
    "name": "PickScreenUserFactionMutation",
    "operationKind": "mutation",
    "text": "mutation PickScreenUserFactionMutation(\n  $auth0id: String\n  $faction_id: Int\n) {\n  update_User(where: {auth0_id: {_eq: $auth0id}}, _set: {factionId: $faction_id}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5b59cf42d5cd4bd1d3b660f8d128eb1e';

module.exports = node;
