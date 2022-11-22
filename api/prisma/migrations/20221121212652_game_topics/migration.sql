/*
  Warnings:

  - You are about to drop the `GameTopics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GameTopics" DROP CONSTRAINT "GameTopics_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GameTopics" DROP CONSTRAINT "GameTopics_topicId_fkey";

-- AlterTable
ALTER TABLE "Topics" ADD COLUMN     "gameId" INTEGER;

-- DropTable
DROP TABLE "GameTopics";

-- AddForeignKey
ALTER TABLE "Topics" ADD CONSTRAINT "Topics_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE SET NULL ON UPDATE CASCADE;
