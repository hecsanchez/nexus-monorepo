/*
  Warnings:

  - Added the required column `departmentId` to the `client_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "client_users" ADD COLUMN     "departmentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "client_users" ADD CONSTRAINT "client_users_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
