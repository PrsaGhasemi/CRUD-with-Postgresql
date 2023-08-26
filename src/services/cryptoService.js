const cryptoRepository = require( '../repositories/cryptoRepository');

const createCrypto = (name, price, symbol)=> {
    return cryptoRepository.createCrypto(name, price, symbol);
}

const getCryptoById = (id)=> {
    return cryptoRepository.getCryptoById(id);
}

const updateCrypto = (id, name, price, symbol)=> {
    return cryptoRepository.updateCrypto(id, name, price, symbol)
}

const deleteCrypto = (id)=> {
    return cryptoRepository.deleteCrypto(id)
}


module.exports = {createCrypto,getCryptoById,updateCrypto,deleteCrypto}