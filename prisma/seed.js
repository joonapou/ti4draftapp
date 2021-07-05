const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();





async function main(){
	console.log("Inserting factions")
	const factions = [["The Arborec","https://twilight-imperium.fandom.com/wiki/The_Arborec"],
					  ["The Barony of Letnev", "https://twilight-imperium.fandom.com/wiki/The_Barony_of_Letnev"],
					  ["The Clan of Saar", "https://twilight-imperium.fandom.com/wiki/The_Clan_of_Saar"],
					  ["The Embers of Muaat", "https://twilight-imperium.fandom.com/wiki/The_Embers_of_Muaat"],
					  ["The Emirates of Hacan", "https://twilight-imperium.fandom.com/wiki/The_Emirates_of_Hacan"],
					  ["The Federation of Sol", "https://twilight-imperium.fandom.com/wiki/The_Federation_of_Sol"],
					  ["The Ghosts of Creuss", "https://twilight-imperium.fandom.com/wiki/The_Ghosts_of_Creuss"],
					  ["The L1Z1X Mindnet", "https://twilight-imperium.fandom.com/wiki/The_L1Z1X_Mindnet"],
					  ["The Mentak Coalition", "https://twilight-imperium.fandom.com/wiki/The_Mentak_Coalition"],
					  ["The Naalu Collective", "https://twilight-imperium.fandom.com/wiki/The_Naalu_Collective"],
					  ["The Nekro Virus", "https://twilight-imperium.fandom.com/wiki/The_Nekro_Virus"],
					  ["Sardakk N'orr", "https://twilight-imperium.fandom.com/wiki/Sardakk_N%27orr"],
					  ["The Universities of Jol-Nar", "https://twilight-imperium.fandom.com/wiki/The_Universities_of_Jol-Nar"],
					  ["The Winnu", "https://twilight-imperium.fandom.com/wiki/The_Winnu"],
					  ["The Xxcha Kingdom", "https://twilight-imperium.fandom.com/wiki/The_Xxcha_Kingdom"],
					  ["The Yin Brotherhood", "https://twilight-imperium.fandom.com/wiki/The_Yin_Brotherhood"],
					  ["The Yssaril Tribes", "https://twilight-imperium.fandom.com/wiki/The_Yssaril_Tribes"],
					  ["The Argent Flight", "https://twilight-imperium.fandom.com/wiki/The_Argent_Flight"],
					  ["The Empyrean", "https://twilight-imperium.fandom.com/wiki/The_Empyrean"],
					  ["The Mahact Gene-Sorcerers", "https://twilight-imperium.fandom.com/wiki/The_Mahact_Gene-Sorcerers"],
					  ["The Naaz-Rokha Alliance", "https://twilight-imperium.fandom.com/wiki/The_Naaz-Rokha_Alliance"],
					  ["The Nomad", "https://twilight-imperium.fandom.com/wiki/The_Nomad"],
					  ["The Titans of Ul", "https://twilight-imperium.fandom.com/wiki/The_Titans_of_Ul"],
					  ["The Vuil'Raith Cabal", "https://twilight-imperium.fandom.com/wiki/The_Vuil%27Raith_Cabal"]]

	for (var i = 0; i < factions.length; ++i){
		const faction = await prisma.faction.create({
			data: {
				name: factions[i][0],
				url: factions[i][1],
			  picks: {
				create: {}
			},
				bans: {
					create: {}
				}
			}
		})
	console.log("Faction: ", faction.name, " inserted");
	console.log("Faction insert done");
}
}
main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

//   const createUserAndPost = await prisma.user.create({
//   data: {
//     email: 'elsa@prisma.io',
//     name: 'Elsa Prisma',
//     posts: {
//       create: [{ title: 'How to make an omelette' }, { title: 'How to eat an omelette' }],
//     },
//   },
// })