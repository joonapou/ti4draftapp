/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PicksQueryVariables = {||};
export type PicksQueryResponse = {|
  +User: $ReadOnlyArray<{|
    +user_id: number,
    +name: string,
    +pickOrder: ?number,
    +Faction: ?{|
      +name: string
    |},
  |}>
|};
export type PicksQuery = {|
  variables: PicksQueryVariables,
  response: PicksQueryResponse,
|};
*/


/*
query PicksQuery {
  User {
    user_id
    name
    pickOrder
    Faction {
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "User",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "user_id",
        "storageKey": null
      },
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pickOrder",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Faction",
        "kind": "LinkedField",
        "name": "Faction",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
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
    "name": "PicksQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PicksQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4025fb4fe0fc36b9c9e68fb5797cf38e",
    "id": null,
    "metadata": {},
    "name": "PicksQuery",
    "operationKind": "query",
    "text": "query PicksQuery {\n  User {\n    user_id\n    name\n    pickOrder\n    Faction {\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a18a9388980ddeed0754d0f2ec76ddc9';

module.exports = node;
