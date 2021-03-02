const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
	const test = await prisma.test.create({
		data: {
			id: 17661757261711787211853,
		},
	});
	console.log(test);

	const allTests = await prisma.test.findMany();
	console.log(allTests);
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
