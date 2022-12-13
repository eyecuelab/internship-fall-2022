// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema


export type Moderator = {
  id: number
  email: String
  Games: Game[]
  socketId: string
}

export type Team = {
  id: number
  name: string
  points: number
  Game: Game
  gameId: number
  Phrases: Phrase[]
  Turns: Turn[]
  Haicues: Haicue[]
  socketId: string
}

export type Topic = {
  id: number
  name: string
  Phrases: Phrase[]
  Game: Game
  gameId: number
  Round: Round
  roundId: number
}

export type Phrase = {
  id: number
  body: string
  wordCount: number
  Topic: Topic
  topicId: number
  Team: Team
  teamId: number
  Haicues: Haicue
}

export type Game = {
  id: number
  name: string
  gameCode: string
  publishedAt: Date
  Teams: Team[]
  Topics: Topic[]
  Rounds: Round[]
  Moderator: Moderator
  moderatorId: number
}

export type Round = {
  id: number
  Game: Game
  gameId: number
  Topic: Topic
  topicId: number
  Turns: Turn[]
  Haicues: Haicue[]
}

export type Turn = {
  id: number
  performingTeam: Team
  performingTeamId: number
  Haicue: Haicue
  haicueId: number
  Round: Round
  roundId: number
}

export type Haicue = {
  id: number
  Round: Round
  roundId: number
  Phrase: Phrase
  phraseId: number
  Team: Team
  teamId: number
  line1: string
  line2: string
  line3: string
  Turn: Turn
  turnId: number
}

export type Buzzer = {
  id: number
  turnId: number
  teamId: number
}
