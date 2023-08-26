import { Prisma } from '@prisma/client';

export const CryptoDetailModel: Prisma.CryptoDetailCreateInput = {
    // Add any additional fields you need to create a crypto detail entity
    price: 0,
    symbol: '',
};