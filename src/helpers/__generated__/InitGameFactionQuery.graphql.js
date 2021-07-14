/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InitGameFactionQueryVariables = {||};
export type InitGameFactionQueryResponse = {|
  +Faction: $ReadOnlyArray<{|
    +name: string,
    +faction_id: number,
  |}>
|};
export type InitGameFactionQuery = {|
  variables: InitGameFactionQueryVariables,
  response: InitGameFactionQueryResponse,
|};
*/


/*
query InitGameFactionQuery {
  Faction {
    name
    faction_id
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "faction_id",
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
    "name": "InitGameFactionQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "InitGameFactionQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8ba2c9865005d02a8ed0b8e60f655aad",
    "id": null,
    "metadata": {},
    "name": "InitGameFactionQuery",
    "operationKind": "query",
    "text": "query InitGameFactionQuery {\n  Faction {\n    name\n    faction_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2a63451a3326f43bf93cadf91647072d';

module.exports = node;
