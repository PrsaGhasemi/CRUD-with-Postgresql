const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
export const CryptoModel: Prisma.CryptoCreateInput = {
    // Add any additional fields you need to create a crypto entity
    name: '',
};