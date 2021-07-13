/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BanScreenInitQueryVariables = {||};
export type BanScreenInitQueryResponse = {|
  +Faction: $ReadOnlyArray<{|
    +faction_id: number,
    +name: string,
  |}>
|};
export type BanScreenInitQuery = {|
  variables: BanScreenInitQueryVariables,
  response: BanScreenInitQueryResponse,
|};
*/


/*
query BanScreenInitQuery {
  Faction {
    faction_id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Faction",
    "kind": "LinkedField",
    "name": "Faction",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "faction_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
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
    "name": "BanScreenInitQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BanScreenInitQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b28a3c2679b540aae329ab0765fba313",
    "id": null,
    "metadata": {},
    "name": "BanScreenInitQuery",
    "operationKind": "query",
    "text": "query BanScreenInitQuery {\n  Faction {\n    faction_id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '25a4500fdda6cb3b8b57895b2ce0b78a';

module.exports = node;
