/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PickScreenQueryVariables = {||};
export type PickScreenQueryResponse = {|
  +Faction: $ReadOnlyArray<{|
    +name: string,
    +faction_id: number,
    +url: string,
  |}>,
  +Ban: $ReadOnlyArray<{|
    +Faction: {|
      +name: string,
      +faction_id: number,
      +url: string,
    |}
  |}>,
|};
export type PickScreenQuery = {|
  variables: PickScreenQueryVariables,
  response: PickScreenQueryResponse,
|};
*/


/*
query PickScreenQuery {
  Faction(where: {_not: {Bans: {}}}) {
    name
    faction_id
    url
  }
  Ban(where: {banned: {_eq: false}}) {
    Faction {
      name
      faction_id
      url
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
  },
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
    "name": "url",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "where",
        "value": {
          "_not": {
            "Bans": {}
          }
        }
      }
    ],
    "concreteType": "Faction",
    "kind": "LinkedField",
    "name": "Faction",
    "plural": true,
    "selections": (v0/*: any*/),
    "storageKey": "Faction(where:{\"_not\":{\"Bans\":{}}})"
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "where",
        "value": {
          "banned": {
            "_eq": false
          }
        }
      }
    ],
    "concreteType": "Ban",
    "kind": "LinkedField",
    "name": "Ban",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Faction",
        "kind": "LinkedField",
        "name": "Faction",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": "Ban(where:{\"banned\":{\"_eq\":false}})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PickScreenQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PickScreenQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "904632c7b8e47f9f8defb5eb3fda6956",
    "id": null,
    "metadata": {},
    "name": "PickScreenQuery",
    "operationKind": "query",
    "text": "query PickScreenQuery {\n  Faction(where: {_not: {Bans: {}}}) {\n    name\n    faction_id\n    url\n  }\n  Ban(where: {banned: {_eq: false}}) {\n    Faction {\n      name\n      faction_id\n      url\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5a9a9fb2eaac7432d39772cba2e10b68';

module.exports = node;
