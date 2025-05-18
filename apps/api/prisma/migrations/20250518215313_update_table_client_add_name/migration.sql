/*
  Warnings:

  - Added the required column `name` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ClientUserPermission" AS ENUM ('ADMIN', 'BILLING');

-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "client_users" (
    "clientId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "permissions" "ClientUserPermission"[],
    "notes" TEXT,

    CONSTRAINT "client_users_pkey" PRIMARY KEY ("clientId","userId")
);

-- AddForeignKey
ALTER TABLE "client_users" ADD CONSTRAINT "client_users_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_users" ADD CONSTRAINT "client_users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
