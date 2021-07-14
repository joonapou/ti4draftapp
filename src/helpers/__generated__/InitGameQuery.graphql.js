/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InitGameQueryVariables = {|
  groupId?: ?number
|};
export type InitGameQueryResponse = {|
  +Game: $ReadOnlyArray<{|
    +bansLower: ?number,
    +bansUpper: ?number,
  |}>
|};
export type InitGameQuery = {|
  variables: InitGameQueryVariables,
  response: InitGameQueryResponse,
|};
*/


/*
query InitGameQuery(
  $groupId: Int
) {
  Game(where: {Group: {group_id: {_eq: $groupId}}}) {
    bansLower
    bansUpper
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "groupId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "fields": [
                  {
                    "kind": "Variable",
                    "name": "_eq",
                    "variableName": "groupId"
                  }
                ],
                "kind": "ObjectValue",
                "name": "group_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "Group"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "Game",
    "kind": "LinkedField",
    "name": "Game",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bansLower",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bansUpper",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "InitGameQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InitGameQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b4fc6d2e6fb86e4730cb0c0c02209af0",
    "id": null,
    "metadata": {},
    "name": "InitGameQuery",
    "operationKind": "query",
    "text": "query InitGameQuery(\n  $groupId: Int\n) {\n  Game(where: {Group: {group_id: {_eq: $groupId}}}) {\n    bansLower\n    bansUpper\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '99cf6f94074cf38cfcf1291547fe0279';

module.exports = node;
