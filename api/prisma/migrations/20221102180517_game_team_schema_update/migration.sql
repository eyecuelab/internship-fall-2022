/*
  Warnings:

  - You are about to drop the `GameTeam` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teamScore` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GameTeam" DROP CONSTRAINT "GameTeam_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GameTeam" DROP CONSTRAINT "GameTeam_teamId_fkey";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "teamScore" INTEGER NOT NULL;

-- DropTable
DROP TABLE "GameTeam";
