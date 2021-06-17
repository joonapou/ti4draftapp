import {getUserId, validateUser} from './auth.js';
import prisma from '../../lib/prisma'

async function getInfo(req){
	var user_info = getUserId(req);	
	const user = await prisma.user.findUnique({
		where: {
			id: user_info.userId
		}
	});
	const bans = await prisma.ban.findMany({});
	const group = await prisma.group.findUnique({
		where: {
			id: user.groupId
		}
	});
	const game = await prisma.game.findMany({
		where: {
			groupId: group.id
		}
	});
	return [user, group, game];
}
export default async function handle(req, res) {
	if (validateUser(req) === true){
		const infoarray = await getInfo(req);
		const user = infoarray[0]
		const group = infoarray[1]
		const game = infoarray[2]
		const bans = await prisma.ban.findMany({})
		if (req.method == 'GET'){
			var ban_array = [];
			for (var i=0; i<bans.length; ++i){
				var element = {};
				const faction = await prisma.faction.findUnique({
					where: {
						id: bans[i].factionId
					}
				})
				element.factionName = faction.name;
				element.banId = bans[i].id;
				element.banned = false;
				ban_array.push(element);
			}
			var ban_upper = game[0].amountOfBans.split('/')[0]
			var ban_lower = game[0].amountOfBans.split('/')[1]
			var final_ban_array = [];
			for(var j = 0; j < ban_upper; ++j){
				
				var randomban = Math.round((Math.random() * (ban_array.length - 0) + 0));
				if (randomban === ban_array.length){
					final_ban_array.push(ban_array[randomban-1]);
					ban_array.splice(randomban-1,1)
				} else {
					final_ban_array.push(ban_array[randomban]);
					ban_array.splice(randomban,1)
				}
			}
			var return_obj= {};
			return_obj["bans"] = final_ban_array
			return_obj["ban_info"] = {ban_upper, ban_lower}
			res.status(200).json(return_obj)
			return
			
		}
		if (req.method == 'POST'){
			for (var a=0; a<req.body.factionbans; ++a){
				const faction = await prisma.faction.findUnique({
					where: {

					}
				})
				const updatedban = await prisma.ban.update({
					where: {
						gameId: game.id,

					}
				})
			}
			const updatedbans = await prisma.ban.updateMany({
				where: {
					id: game.id
				},
				data: {

				}
			})
			console.log(req.body)
			res.status(200).json("success")
			return
		}
	} else {
		res.status(401)
		return
	}
	
}