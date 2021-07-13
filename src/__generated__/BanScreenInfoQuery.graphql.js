/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BanScreenInfoQueryVariables = {||};
export type BanScreenInfoQueryResponse = {|
  +Game: $ReadOnlyArray<{|
    +bansUpper: ?number,
    +bansLower: ?number,
  |}>
|};
export type BanScreenInfoQuery = {|
  variables: BanScreenInfoQueryVariables,
  response: BanScreenInfoQueryResponse,
|};
*/


/*
query BanScreenInfoQuery {
  Game {
    bansUpper
    bansLower
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
        "name": "bansUpper",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bansLower",
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
    "name": "BanScreenInfoQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BanScreenInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ede21de21f6937dd446d871991fe36ce",
    "id": null,
    "metadata": {},
    "name": "BanScreenInfoQuery",
    "operationKind": "query",
    "text": "query BanScreenInfoQuery {\n  Game {\n    bansUpper\n    bansLower\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '13b9075caa1e5fc17939bf885d798e15';

module.exports = node;
