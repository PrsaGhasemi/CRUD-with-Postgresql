const transactionRepository = require('../repositories/transactionRepositories');


exports.generateRandomTransaction = (cryptoId , amount) => {
    return transactionRepository.generateRandomTransaction(cryptoId, amount)
}