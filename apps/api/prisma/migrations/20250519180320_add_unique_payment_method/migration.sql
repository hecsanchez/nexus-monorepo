/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `PaymentMethod` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PaymentMethod_clientId_key" ON "PaymentMethod"("clientId");
