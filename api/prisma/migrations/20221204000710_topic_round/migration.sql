/*
  Warnings:

  - A unique constraint covering the columns `[topicId]` on the table `Rounds` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Topics" ADD COLUMN     "roundId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Rounds_topicId_key" ON "Rounds"("topicId");

-- AddForeignKey
ALTER TABLE "Rounds" ADD CONSTRAINT "Rounds_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
