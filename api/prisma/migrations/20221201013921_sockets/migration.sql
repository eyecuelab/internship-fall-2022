-- AlterTable
ALTER TABLE "Buzzers" ALTER COLUMN "buzzAt" DROP NOT NULL,
ALTER COLUMN "buzzAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Moderators" ADD COLUMN     "socketId" TEXT;

-- AlterTable
ALTER TABLE "Rounds" ADD COLUMN     "startedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Teams" ADD COLUMN     "socketId" TEXT;
