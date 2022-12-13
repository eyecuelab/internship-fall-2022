/*
  Warnings:

  - You are about to drop the column `buzzAt` on the `Buzzers` table. All the data in the column will be lost.
  - You are about to drop the column `correctTeam` on the `Haicues` table. All the data in the column will be lost.
  - You are about to drop the column `lineGuessed` on the `Haicues` table. All the data in the column will be lost.
  - You are about to drop the column `moderatorId` on the `Phrases` table. All the data in the column will be lost.
  - You are about to drop the column `startedAt` on the `Rounds` table. All the data in the column will be lost.
  - You are about to drop the column `teamName` on the `Teams` table. All the data in the column will be lost.
  - You are about to drop the column `teamScore` on the `Teams` table. All the data in the column will be lost.
  - You are about to drop the column `moderatorId` on the `Topics` table. All the data in the column will be lost.
  - You are about to drop the column `currentLineNumber` on the `Turns` table. All the data in the column will be lost.
  - You are about to drop the column `guessingTeamId` on the `Turns` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[haicueId]` on the table `Turns` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points` to the `Teams` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Phrases" DROP CONSTRAINT "Phrases_moderatorId_fkey";

-- DropForeignKey
ALTER TABLE "Topics" DROP CONSTRAINT "Topics_moderatorId_fkey";

-- AlterTable
ALTER TABLE "Buzzers" DROP COLUMN "buzzAt";

-- AlterTable
ALTER TABLE "Haicues" DROP COLUMN "correctTeam",
DROP COLUMN "lineGuessed",
ADD COLUMN     "turnId" INTEGER;

-- AlterTable
ALTER TABLE "Phrases" DROP COLUMN "moderatorId";

-- AlterTable
ALTER TABLE "Rounds" DROP COLUMN "startedAt";

-- AlterTable
ALTER TABLE "Teams" DROP COLUMN "teamName",
DROP COLUMN "teamScore",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "points" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Topics" DROP COLUMN "moderatorId";

-- AlterTable
ALTER TABLE "Turns" DROP COLUMN "currentLineNumber",
DROP COLUMN "guessingTeamId";

-- CreateIndex
CREATE UNIQUE INDEX "Turns_haicueId_key" ON "Turns"("haicueId");
