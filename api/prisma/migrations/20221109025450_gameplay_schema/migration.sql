-- CreateTable
CREATE TABLE "Rounds" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "Rounds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turns" (
    "id" SERIAL NOT NULL,
    "performingTeamId" INTEGER NOT NULL,
    "performingTeamScore" INTEGER NOT NULL,
    "guessingTeamId" INTEGER NOT NULL,
    "guessingTeamScore" INTEGER NOT NULL,
    "roundId" INTEGER NOT NULL,
    "currentLineNumber" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Turns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Haicues" (
    "id" SERIAL NOT NULL,
    "roundId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "line1" TEXT NOT NULL,
    "line2" TEXT NOT NULL,
    "line3" TEXT NOT NULL,
    "lineGuessed" INTEGER,
    "correctTeam" INTEGER,

    CONSTRAINT "Haicues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buzzers" (
    "id" SERIAL NOT NULL,
    "turnId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "buzzAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Buzzers_pkey" PRIMARY KEY ("id")
);
