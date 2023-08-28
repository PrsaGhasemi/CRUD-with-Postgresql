const transactionRepository = require('../repositories/transactionRepositories');


exports.generateRandomTransaction = (cryptoId , amount) => {
    return transactionRepository.transactionOperation(cryptoId, amount)
}