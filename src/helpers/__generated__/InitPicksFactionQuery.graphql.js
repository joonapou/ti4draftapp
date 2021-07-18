/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InitPicksFactionQueryVariables = {||};
export type InitPicksFactionQueryResponse = {|
  +Faction: $ReadOnlyArray<{|
    +faction_id: number,
    +name: string,
    +url: string,
  |}>
|};
export type InitPicksFactionQuery = {|
  variables: InitPicksFactionQueryVariables,
  response: InitPicksFactionQueryResponse,
|};
*/


/*
query InitPicksFactionQuery {
  Faction {
    faction_id
    name
    url
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
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
    "name": "InitPicksFactionQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "InitPicksFactionQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3a062fef519264d61be2e2e3f49d8222",
    "id": null,
    "metadata": {},
    "name": "InitPicksFactionQuery",
    "operationKind": "query",
    "text": "query InitPicksFactionQuery {\n  Faction {\n    faction_id\n    name\n    url\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8642d734aff093700d6dfaf26c0119d0';

module.exports = node;
