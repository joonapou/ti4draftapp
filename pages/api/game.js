import {getUserId} from './auth.js';
import prisma from '../../lib/prisma'



export default async function handle(req, res) {
	var user;
	var return_obj = {}
  	user = getUserId(req);

  	const current_user = await prisma.user.findUnique({
	  where: {
	    id: user.userId,
	  },
	})
  	const game = await prisma.game.findMany({
  		where: {
  			groupId: current_user.groupId
  		}
  	});
  	return_obj["game"] = game
	res.status(200).json(return_obj)
	return
}