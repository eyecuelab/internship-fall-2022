/*
  Warnings:

  - You are about to drop the column `guessingTeamScore` on the `Turns` table. All the data in the column will be lost.
  - You are about to drop the column `performingTeamScore` on the `Turns` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Turns" DROP COLUMN "guessingTeamScore",
DROP COLUMN "performingTeamScore";

-- AddForeignKey
ALTER TABLE "Turns" ADD CONSTRAINT "Turns_performingTeamId_fkey" FOREIGN KEY ("performingTeamId") REFERENCES "Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
