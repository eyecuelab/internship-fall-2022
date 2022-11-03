/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GameTopic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Phrase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Topic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GameTopic" DROP CONSTRAINT "GameTopic_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GameTopic" DROP CONSTRAINT "GameTopic_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Phrase" DROP CONSTRAINT "Phrase_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_gameId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_teamId_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_gameId_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_roleId_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_userId_fkey";

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "GameTopic";

-- DropTable
DROP TABLE "Phrase";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "Team";

-- DropTable
DROP TABLE "Topic";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserRole";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "gamesId" INTEGER,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "teamName" TEXT NOT NULL,
    "teamLeaderId" INTEGER NOT NULL,
    "teamScore" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topics" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Topics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phrases" (
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "wordCount" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "Phrases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "rounds" INTEGER NOT NULL,
    "gameCode" TEXT NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameTopics" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "GameTopics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Games_gameCode_key" ON "Games"("gameCode");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_gamesId_fkey" FOREIGN KEY ("gamesId") REFERENCES "Games"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phrases" ADD CONSTRAINT "Phrases_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameTopics" ADD CONSTRAINT "GameTopics_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameTopics" ADD CONSTRAINT "GameTopics_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
