-- DropForeignKey
ALTER TABLE "Teams" DROP CONSTRAINT "Teams_gameId_fkey";

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE CASCADE ON UPDATE CASCADE;
