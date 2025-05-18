-- AlterTable
ALTER TABLE "workflows" ADD COLUMN     "moneySavedPerExecution" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "timeSavedPerExecution" INTEGER DEFAULT 0;
