/*
  Warnings:

  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `moderatorId` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moderatorId` to the `Phrases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moderatorId` to the `Topics` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_roleId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_teamId_fkey";

-- AlterTable
ALTER TABLE "Games" ADD COLUMN     "moderatorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Phrases" ADD COLUMN     "moderatorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Topics" ADD COLUMN     "moderatorId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Roles";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "Moderators" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Moderators_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Moderators_email_key" ON "Moderators"("email");

-- AddForeignKey
ALTER TABLE "Topics" ADD CONSTRAINT "Topics_moderatorId_fkey" FOREIGN KEY ("moderatorId") REFERENCES "Moderators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phrases" ADD CONSTRAINT "Phrases_moderatorId_fkey" FOREIGN KEY ("moderatorId") REFERENCES "Moderators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_moderatorId_fkey" FOREIGN KEY ("moderatorId") REFERENCES "Moderators"("id") ON DELETE CASCADE ON UPDATE CASCADE;
