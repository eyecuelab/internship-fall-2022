/*
  Warnings:

  - A unique constraint covering the columns `[roundId]` on the table `Topics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Topics_roundId_key" ON "Topics"("roundId");
