/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickOrderQueryVariables = {||};
export type PickOrderQueryResponse = {|
  +User: $ReadOnlyArray<{|
    +user_id: number,
    +name: string,
    +pickOrder: ?number,
    +seatNumber: ?number,
    +factionId: ?number,
  |}>
|};
export type PickOrderQuery = {|
  variables: PickOrderQueryVariables,
  response: PickOrderQueryResponse,
|};
*/


/*
query PickOrderQuery {
  User {
    user_id
    name
    pickOrder
    seatNumber
    factionId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "name": "pickOrder",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "seatNumber",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "factionId",
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
    "name": "PickOrderQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PickOrderQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8242a4b5669d311a8eefc1efe8c09027",
    "id": null,
    "metadata": {},
    "name": "PickOrderQuery",
    "operationKind": "query",
    "text": "query PickOrderQuery {\n  User {\n    user_id\n    name\n    pickOrder\n    seatNumber\n    factionId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd7504ea876a5730521efe3aa06c5a853';

module.exports = node;
