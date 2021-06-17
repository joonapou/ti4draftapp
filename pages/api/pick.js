import prisma from '../../lib/prisma'
import {getUserId, validateUser} from './auth.js';

export default async function handle(req, res) {
	if (validateUser(req) === true){
		if (req.method == 'GET'){
			const gamefactions = await prisma.pick.findMany({});
			res.status(200).json(gamefactions)
			return
		}
		if (req.method == 'POST'){

		}
	} else {
		res.status(401)
	}
	
}
