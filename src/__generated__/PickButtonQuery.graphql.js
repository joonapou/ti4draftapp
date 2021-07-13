/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickButtonQueryVariables = {||};
export type PickButtonQueryResponse = {|
  +Game: $ReadOnlyArray<{|
    +game_id: number,
    +amountOfBans: ?string,
    +bansDone: ?boolean,
    +draftStarted: ?boolean,
    +picksDone: ?boolean,
    +userPicking: ?string,
  |}>
|};
export type PickButtonQuery = {|
  variables: PickButtonQueryVariables,
  response: PickButtonQueryResponse,
|};
*/


/*
query PickButtonQuery {
  Game {
    game_id
    amountOfBans
    bansDone
    draftStarted
    picksDone
    userPicking
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
        "name": "game_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "amountOfBans",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bansDone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "draftStarted",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "picksDone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userPicking",
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
    "name": "PickButtonQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PickButtonQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a2b4eb528b9a1633a7f170fc42ef9600",
    "id": null,
    "metadata": {},
    "name": "PickButtonQuery",
    "operationKind": "query",
    "text": "query PickButtonQuery {\n  Game {\n    game_id\n    amountOfBans\n    bansDone\n    draftStarted\n    picksDone\n    userPicking\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '82dffb485c9a4dae6227f1d5c46a5479';

module.exports = node;
