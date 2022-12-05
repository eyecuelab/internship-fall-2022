-- DropForeignKey
ALTER TABLE "Rounds" DROP CONSTRAINT "Rounds_gameId_fkey";

-- AddForeignKey
ALTER TABLE "Rounds" ADD CONSTRAINT "Rounds_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE CASCADE ON UPDATE CASCADE;
