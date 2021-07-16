/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GalaxyQueryVariables = {||};
export type GalaxyQueryResponse = {|
  +Game: $ReadOnlyArray<{|
    +mapString: ?string,
    +hsLabels: ?string,
  |}>
|};
export type GalaxyQuery = {|
  variables: GalaxyQueryVariables,
  response: GalaxyQueryResponse,
|};
*/


/*
query GalaxyQuery {
  Game {
    mapString
    hsLabels
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Game",
    "kind": "LinkedField",
    "name": "Game",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "mapString",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hsLabels",
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
    "name": "GalaxyQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GalaxyQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c974035cfb0a156b66aaecd2fee10c6d",
    "id": null,
    "metadata": {},
    "name": "GalaxyQuery",
    "operationKind": "query",
    "text": "query GalaxyQuery {\n  Game {\n    mapString\n    hsLabels\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6a0155d6d53bde1a6b97bef8536ae92c';

module.exports = node;
