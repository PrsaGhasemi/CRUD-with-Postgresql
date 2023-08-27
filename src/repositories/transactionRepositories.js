//* I know it's not common to create instances of prisma everywhere 
//* But as i'm working on dev mode i thought it'd be better to 
//* make it easy to  follow in every .js file
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

// Generate fake crypto bank transactions
const { Router } = require("express");
const router = new Router()
router.post('/createTransactions', async (cryptoId, amount) => {
    try {
      // Retrieve crypto details from the database based on id
      const cryptoDetail = await prisma.cryptoDetail.findUnique({
        where: { id: cryptoId },
      });
  
      if (!cryptoDetail) {
        return res.status(404).json({ error: 'Crypto not found' });
      }
  
      // Generate fake transaction data
      const transactionData = Array.from({ length: amount }).map(() => ({
        cryptoId,
        amount: faker.datatype.number({ min: 1, max: 10 }), // Random transaction amount
        transactionDate: faker.date.past(), // Random past date
      }));
      //This block set a timer to recall this function and create a new transactions
      setInterval(transactionData, 600);
      // Save transactions to the database
      await prisma.transaction.createMany({
        data: transactionData,
      });
      return res.json({ message: 'Fake transactions created successfully' });
    
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports = router