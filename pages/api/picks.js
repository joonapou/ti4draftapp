import prisma from '../../lib/prisma'
import {getGameGroupUsersForLoggedUser} from './users.js'


export default async function handle(req, res) {
  const users = await getGameGroupUsersForLoggedUser(req, res);
  const user_array = Object.values(users);
  var user_picks = []; 
  var factionname;
  for (var i = 0; i < user_array.length; i++){
    if (user_array[i].factionId != null) {
      const faction = await prisma.faction.findUnique({
      where: {
        id: user_array[i].factionId
      }
    });
      factionname = faction.name;
    } else {
      factionname = null;
    };
    user_picks.push([user_array[i].name, factionname, user_array[i].seatNumber])
  }
  var user_picks_obj = {};
  user_picks_obj["picks"] = user_picks
  res.status(200).json(user_picks_obj)
}