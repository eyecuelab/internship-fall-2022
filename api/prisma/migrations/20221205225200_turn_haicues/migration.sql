/*
  Warnings:

  - Added the required column `haicueId` to the `Turns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Turns" ADD COLUMN     "haicueId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Turns" ADD CONSTRAINT "Turns_haicueId_fkey" FOREIGN KEY ("haicueId") REFERENCES "Haicues"("id") ON DELETE CASCADE ON UPDATE CASCADE;
