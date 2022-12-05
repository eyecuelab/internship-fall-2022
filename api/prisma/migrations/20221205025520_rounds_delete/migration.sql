-- DropForeignKey
ALTER TABLE "Rounds" DROP CONSTRAINT "Rounds_topicId_fkey";

-- AddForeignKey
ALTER TABLE "Rounds" ADD CONSTRAINT "Rounds_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;
