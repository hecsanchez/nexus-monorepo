/*
  Warnings:

  - The values [SURVEY,OTHER] on the enum `DocumentType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DocumentType_new" AS ENUM ('SURVEY_QUESTIONS', 'SURVEY_RESPONSE', 'PROCESS_DOCUMENTATION', 'ADA_PROPOSAL', 'CONTRACT', 'FACTORY_MARKDOWN', 'TEST_PLAN');
ALTER TABLE "document_links" ALTER COLUMN "type" TYPE "DocumentType_new" USING ("type"::text::"DocumentType_new");
ALTER TYPE "DocumentType" RENAME TO "DocumentType_old";
ALTER TYPE "DocumentType_new" RENAME TO "DocumentType";
DROP TYPE "DocumentType_old";
COMMIT;
