-- AlterTable
ALTER TABLE "Phrases" ADD COLUMN     "teamId" INTEGER;

-- AddForeignKey
ALTER TABLE "Phrases" ADD CONSTRAINT "Phrases_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;
