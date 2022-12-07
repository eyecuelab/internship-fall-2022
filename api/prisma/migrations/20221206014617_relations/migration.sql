/*
  Warnings:

  - Added the required column `phraseId` to the `Haicues` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Turns" DROP CONSTRAINT "Turns_roundId_fkey";

-- AlterTable
ALTER TABLE "Haicues" ADD COLUMN     "phraseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Turns" ADD CONSTRAINT "Turns_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Rounds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Haicues" ADD CONSTRAINT "Haicues_phraseId_fkey" FOREIGN KEY ("phraseId") REFERENCES "Phrases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Haicues" ADD CONSTRAINT "Haicues_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
