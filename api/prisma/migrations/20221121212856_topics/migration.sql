/*
  Warnings:

  - Made the column `gameId` on table `Topics` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Topics" DROP CONSTRAINT "Topics_gameId_fkey";

-- AlterTable
ALTER TABLE "Topics" ALTER COLUMN "gameId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Topics" ADD CONSTRAINT "Topics_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
