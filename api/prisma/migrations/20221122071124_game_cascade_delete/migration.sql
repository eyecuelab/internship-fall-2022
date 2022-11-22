-- DropForeignKey
ALTER TABLE "Phrases" DROP CONSTRAINT "Phrases_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Topics" DROP CONSTRAINT "Topics_gameId_fkey";

-- AddForeignKey
ALTER TABLE "Topics" ADD CONSTRAINT "Topics_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phrases" ADD CONSTRAINT "Phrases_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;
