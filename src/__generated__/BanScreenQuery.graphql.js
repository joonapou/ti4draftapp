/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BanScreenQueryVariables = {||};
export type BanScreenQueryResponse = {|
  +Ban: $ReadOnlyArray<{|
    +ban_id: number,
    +banned: boolean,
    +Faction: ?{|
      +name: string
    |},
    +User: ?{|
      +name: string
    |},
  |}>
|};
export type BanScreenQuery = {|
  variables: BanScreenQueryVariables,
  response: BanScreenQueryResponse,
|};
*/


/*
query BanScreenQuery {
  Ban {
    ban_id
    banned
    Faction {
      name
    }
    User {
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Ban",
    "kind": "LinkedField",
    "name": "Ban",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Faction",
        "kind": "LinkedField",
        "name": "Faction",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "User",
        "plural": false,
        "selections": (v0/*: any*/),
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
    "name": "BanScreenQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BanScreenQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7b49d46130b17c38a6c5028a211f5bb5",
    "id": null,
    "metadata": {},
    "name": "BanScreenQuery",
    "operationKind": "query",
    "text": "query BanScreenQuery {\n  Ban {\n    ban_id\n    banned\n    Faction {\n      name\n    }\n    User {\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c0bbfc98019711f1b0ca3f132ece2a4a';

module.exports = node;
