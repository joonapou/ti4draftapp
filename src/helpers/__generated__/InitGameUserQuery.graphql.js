/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InitGameUserQueryVariables = {||};
export type InitGameUserQueryResponse = {|
  +User: $ReadOnlyArray<{|
    +name: string,
    +user_id: number,
  |}>
|};
export type InitGameUserQuery = {|
  variables: InitGameUserQueryVariables,
  response: InitGameUserQueryResponse,
|};
*/


/*
query InitGameUserQuery {
  User(where: {Group: {group_id: {_eq: 1}}}) {
    name
    user_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "where",
        "value": {
          "Group": {
            "group_id": {
              "_eq": 1
            }
          }
        }
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "user_id",
        "storageKey": null
      }
    ],
    "storageKey": "User(where:{\"Group\":{\"group_id\":{\"_eq\":1}}})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "InitGameUserQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "InitGameUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e2746d7ac56fa3d9543ebf703d20a263",
    "id": null,
    "metadata": {},
    "name": "InitGameUserQuery",
    "operationKind": "query",
    "text": "query InitGameUserQuery {\n  User(where: {Group: {group_id: {_eq: 1}}}) {\n    name\n    user_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a43f1111489397449e4a2bb9a58ebee2';

module.exports = node;
