const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function main() {
const newUser = await prisma.user.create({
  data: {
    name: 'Doile',
    email: 'joona.d.poutanen@gmail.com',
  },
})

const users = await prisma.user.findMany()
console.log({ users })
return;

}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })