/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickButtonFactionInitQueryVariables = {||};
export type PickButtonFactionInitQueryResponse = {|
  +Faction: $ReadOnlyArray<{|
    +name: string,
    +faction_id: number,
  |}>
|};
export type PickButtonFactionInitQuery = {|
  variables: PickButtonFactionInitQueryVariables,
  response: PickButtonFactionInitQueryResponse,
|};
*/


/*
query PickButtonFactionInitQuery {
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
    "name": "PickButtonFactionInitQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PickButtonFactionInitQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5b6ef6fa46d7dcc04c1cbaf97739f4c6",
    "id": null,
    "metadata": {},
    "name": "PickButtonFactionInitQuery",
    "operationKind": "query",
    "text": "query PickButtonFactionInitQuery {\n  Faction {\n    name\n    faction_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd43df3c2d58c1337cfd545e17bd814b8';

module.exports = node;
