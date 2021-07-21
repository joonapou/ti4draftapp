/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateGameUserMutationVariables = {|
  gameId?: ?number,
  userId?: ?number,
|};
export type CreateGameUserMutationResponse = {|
  +insert_GameUser_one: ?{|
    +gameId: ?number,
    +userId: number,
    +gameuser_id: number,
  |}
|};
export type CreateGameUserMutation = {|
  variables: CreateGameUserMutationVariables,
  response: CreateGameUserMutationResponse,
|};
*/


/*
mutation CreateGameUserMutation(
  $gameId: Int
  $userId: Int
) {
  insert_GameUser_one(object: {gameId: $gameId, userId: $userId}) {
    gameId
    userId
    gameuser_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "gameId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "gameId",
            "variableName": "gameId"
          },
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId"
          }
        ],
        "kind": "ObjectValue",
        "name": "object"
      }
    ],
    "concreteType": "GameUser",
    "kind": "LinkedField",
    "name": "insert_GameUser_one",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gameId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gameuser_id",
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
    "name": "CreateGameUserMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateGameUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c7d688c6a28336405390689bc42e5359",
    "id": null,
    "metadata": {},
    "name": "CreateGameUserMutation",
    "operationKind": "mutation",
    "text": "mutation CreateGameUserMutation(\n  $gameId: Int\n  $userId: Int\n) {\n  insert_GameUser_one(object: {gameId: $gameId, userId: $userId}) {\n    gameId\n    userId\n    gameuser_id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'efdf684eb58dfcc4dda08f4ef585ccef';

module.exports = node;
