/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickButtonFactionQueryVariables = {||};
export type PickButtonFactionQueryResponse = {|
  +Faction: $ReadOnlyArray<{|
    +name: string,
    +faction_id: number,
  |}>
|};
export type PickButtonFactionQuery = {|
  variables: PickButtonFactionQueryVariables,
  response: PickButtonFactionQueryResponse,
|};
*/


/*
query PickButtonFactionQuery {
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
    "name": "PickButtonFactionQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PickButtonFactionQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7a18da6d39ed01f4322897bc3bb3f835",
    "id": null,
    "metadata": {},
    "name": "PickButtonFactionQuery",
    "operationKind": "query",
    "text": "query PickButtonFactionQuery {\n  Faction {\n    name\n    faction_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cb6d2214bce243fdf74619fb4f0f5c40';

module.exports = node;
