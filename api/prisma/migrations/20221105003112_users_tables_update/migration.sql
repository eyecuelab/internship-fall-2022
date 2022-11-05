-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_teamId_fkey";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "teamId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;
