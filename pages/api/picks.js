import prisma from '../../lib/prisma'


export default async function handle(req, res) {
 const users = await prisma.user.findMany();
  const user_array = Object.values(users);
  var user_picks = []; 
  const testfaction = await prisma.faction.findUnique({
      where: {
        id: 1
      }
    });
  var factionname;
  for (var i = 0; i < user_array.length; i++){
    if (user_array[i].gamegroupfactionId != null) {
      const faction = await prisma.faction.findUnique({
      where: {
        id: user_array[i].gamegroupfactionId
      }
    });
      factionname = faction.name;
    } else {
      factionname = null;
    };
    console.log(user_array[i].name)
    console.log(factionname)
    user_picks.push([user_array[i].name, factionname, user_array[i].seat])
  }
  var user_picks_obj = {};
    user_picks_obj["picks"] = user_picks

  res.status(200).json(user_picks_obj)
}