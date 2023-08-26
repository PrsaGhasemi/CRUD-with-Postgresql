 const prisma =require('../db/prismaConnector');

const createCrypto = (name, price, symbol)=> {
    return prisma.crypto.create({
        data: {
            name,
            cryptoDetail: {
                create: {
                    price,
                    symbol,
                },
            },
        },
        include: { cryptoDetail: true },
    });
}

const getCryptoById = (id) =>{
    return prisma.crypto.findUnique({ where: { id }, include: { cryptoDetail: true } });
}

const updateCrypto = (id, name, price, symbol)=> {
    return prisma.crypto.update({
        where: { id },
        data: {
            name,
            cryptoDetail: { update: { price, symbol } },
        },
        include: { cryptoDetail: true },
    });
}

const deleteCrypto = (id)=> {
    return prisma.crypto.delete({ where: { id } });
}

module.exports = {deleteCrypto,updateCrypto,getCryptoById,createCrypto};