/*
  Warnings:

  - A unique constraint covering the columns `[gameCode]` on the table `Games` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Games_gameCode_key" ON "Games"("gameCode");
