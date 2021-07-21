/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GroupMutationVariables = {|
  GroupName?: ?string,
  groupPassword?: ?string,
|};
export type GroupMutationResponse = {|
  +insert_Group_one: ?{|
    +GroupName: string,
    +group_id: number,
  |}
|};
export type GroupMutation = {|
  variables: GroupMutationVariables,
  response: GroupMutationResponse,
|};
*/


/*
mutation GroupMutation(
  $GroupName: String
  $groupPassword: String
) {
  insert_Group_one(object: {GroupName: $GroupName, groupPassword: $groupPassword}) {
    GroupName
    group_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "GroupName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "groupPassword"
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
            "name": "GroupName",
            "variableName": "GroupName"
          },
          {
            "kind": "Variable",
            "name": "groupPassword",
            "variableName": "groupPassword"
          }
        ],
        "kind": "ObjectValue",
        "name": "object"
      }
    ],
    "concreteType": "Group",
    "kind": "LinkedField",
    "name": "insert_Group_one",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "GroupName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "group_id",
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
    "name": "GroupMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GroupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "632e72a65d5c56d5c563cf9e0ab1da35",
    "id": null,
    "metadata": {},
    "name": "GroupMutation",
    "operationKind": "mutation",
    "text": "mutation GroupMutation(\n  $GroupName: String\n  $groupPassword: String\n) {\n  insert_Group_one(object: {GroupName: $GroupName, groupPassword: $groupPassword}) {\n    GroupName\n    group_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8c891a79d469efbeef23d807329abf73';

module.exports = node;
