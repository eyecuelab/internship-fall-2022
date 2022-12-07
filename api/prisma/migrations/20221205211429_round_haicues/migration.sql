/*
  Warnings:

  - You are about to drop the column `rounds` on the `Games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Games" DROP COLUMN "rounds";

-- AddForeignKey
ALTER TABLE "Haicues" ADD CONSTRAINT "Haicues_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Rounds"("id") ON DELETE CASCADE ON UPDATE CASCADE;
