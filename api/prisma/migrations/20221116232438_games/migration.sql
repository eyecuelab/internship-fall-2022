-- DropIndex
DROP INDEX "Games_gameCode_key";

-- AlterTable
ALTER TABLE "Games" ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'haicue';
