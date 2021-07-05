import prisma from '../../lib/prisma'
import {getGameGroupUsersForLoggedUser} from './users.js'

export default async function handle(req, res) {
  const users = await getGameGroupUsersForLoggedUser(req, res);
  const user_array = Object.values(users);
  var users_asc = [];
  var users_desc = [];
  var i;
  for (i = 0; i < user_array.length; i++){
    users_desc.push([user_array[i].pickOrder, user_array[i].name])
    users_desc.sort(function compare(user1, user2) {
      return user1.[0]-user2.[0]
    }
      )
  }
  for (i = 0; i < user_array.length; i++){
    users_asc.push([user_array[i].pickOrder, user_array[i].name])
    users_asc.sort(function compare(user1, user2) {
      return user2.[0]-user1.[0]
    }
      )
  }
  var sortable_users = users_asc.concat(users_desc);
  var sortable_users_obj = {};
    sortable_users_obj["pick_order"] = sortable_users
  res.status(200).json(sortable_users_obj)
  }