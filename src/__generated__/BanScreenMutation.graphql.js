/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BanScreenMutationVariables = {|
  banId?: ?number,
  banned?: ?boolean,
|};
export type BanScreenMutationResponse = {|
  +update_Ban: ?{|
    +returning: $ReadOnlyArray<{|
      +ban_id: number,
      +banned: boolean,
    |}>
  |}
|};
export type BanScreenMutation = {|
  variables: BanScreenMutationVariables,
  response: BanScreenMutationResponse,
|};
*/


/*
mutation BanScreenMutation(
  $banId: Int
  $banned: Boolean
) {
  update_Ban(_set: {banned: $banned}, where: {ban_id: {_eq: $banId}}) {
    returning {
      ban_id
      banned
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "banId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "banned"
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
            "name": "banned",
            "variableName": "banned"
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
                "variableName": "banId"
              }
            ],
            "kind": "ObjectValue",
            "name": "ban_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "Ban_mutation_response",
    "kind": "LinkedField",
    "name": "update_Ban",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Ban",
        "kind": "LinkedField",
        "name": "returning",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BanScreenMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BanScreenMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "54e96d687fbcc613b58c0b81ecd97fdd",
    "id": null,
    "metadata": {},
    "name": "BanScreenMutation",
    "operationKind": "mutation",
    "text": "mutation BanScreenMutation(\n  $banId: Int\n  $banned: Boolean\n) {\n  update_Ban(_set: {banned: $banned}, where: {ban_id: {_eq: $banId}}) {\n    returning {\n      ban_id\n      banned\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0cc393903c86fdce1a6aca8597170d0f';

module.exports = node;
