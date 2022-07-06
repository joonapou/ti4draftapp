/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GroupQueryVariables = {||};
export type GroupQueryResponse = {|
  +Group: $ReadOnlyArray<{|
    +GroupName: string,
    +groupPassword: ?string,
    +group_id: number,
  |}>
|};
export type GroupQuery = {|
  variables: GroupQueryVariables,
  response: GroupQueryResponse,
|};
*/


/*
query GroupQuery {
  Group {
    GroupName
    groupPassword
    group_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Group",
    "kind": "LinkedField",
    "name": "Group",
    "plural": true,
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
        "name": "groupPassword",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GroupQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2d57b6c9432dffe7bf708352e47d4423",
    "id": null,
    "metadata": {},
    "name": "GroupQuery",
    "operationKind": "query",
    "text": "query GroupQuery {\n  Group {\n    GroupName\n    groupPassword\n    group_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1a799570abd064799f509b64a171f39';

module.exports = node;
