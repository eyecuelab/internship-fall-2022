export type User = {
	id: number
	name: string
	role: Role
	roleId: number
	team: Team
	teamId: number
	game: Game
	gameId: number
}

export type Role = {
	id: number
	name: string
	users: User[]
}

export type Team = {
	id: number
  teamName: string
  teamLeaderId: number
  teamScore: number
  game: Game
  gameId: number
}

export type Topic = {
	id: number
  name: string
  Phrase: Phrase[]
  game: Game
  gameId: number
	round: Round
	roundId: number
}

export type Phrase = {
	id: number
  body: string
  wordCount: number
  topic: Topic
  topicId: number
}

export type Game = {
	id: number
	name: string				
  rounds: number
  gameCode: string
	publishedAt: Date					
  Teams: Team[]
	Topics: Topic[]
	Rounds: Round[]
}

export type Round = {
  id: number
  game: Game
  gameId: number
  topic: Topic
  topicId: number
  Turns: Turn[]
  Haicues: Haicue[]
}

export type Turn = {
  id: number
  performingTeam: Team
  performingTeamId: number
  guessingTeamId: number
  Haicue: Haicue
  haicueId: number
  Round: Round
  roundId: number
  currentLineNumber: number
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
  lineGuessed: number
  correctTeam: number
  Turns: Turn[]
}

export type Buzzer = {
	id: number
  turnId: number
  teamId: number
  buzzAt: Date
}