
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const getUsers = async function () {
	const users = await prisma.user.findMany();
	return users;
};


export default getUsers ;