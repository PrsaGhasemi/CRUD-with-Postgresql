-- CreateTable
CREATE TABLE "Crypto" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Crypto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CryptoDetail" (
    "detailId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cryptoId" INTEGER NOT NULL,

    CONSTRAINT "CryptoDetail_pkey" PRIMARY KEY ("detailId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Crypto_id_key" ON "Crypto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CryptoDetail_cryptoId_key" ON "CryptoDetail"("cryptoId");

-- AddForeignKey
ALTER TABLE "CryptoDetail" ADD CONSTRAINT "CryptoDetail_cryptoId_fkey" FOREIGN KEY ("cryptoId") REFERENCES "Crypto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
