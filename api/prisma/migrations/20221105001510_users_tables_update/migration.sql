/*
  Warnings:

  - You are about to drop the column `gamesId` on the `Users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_gamesId_fkey";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "gamesId",
ADD COLUMN     "gameId" INTEGER;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE SET NULL ON UPDATE CASCADE;
