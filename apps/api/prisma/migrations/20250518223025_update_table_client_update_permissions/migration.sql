/*
  Warnings:

  - You are about to drop the column `permissions` on the `client_users` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_clientId_fkey";

-- DropIndex
DROP INDEX "users_clientId_key";

-- AlterTable
ALTER TABLE "client_users" DROP COLUMN "permissions",
ADD COLUMN     "canBilling" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "clientId";

-- DropEnum
DROP TYPE "ClientUserPermission";
