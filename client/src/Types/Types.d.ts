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
  users: User[]
}

export type Topic = {
	id: number
  name: string
  phrases: Phrase[]
  game: Game
  gameId: number
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
  round: number
  gameCode: string
	publishedAt: Date					
  Teams: Team[]
  Users: User[]
	Topics: Topic[]
}

export type Round = {
	id : number
  gameId: number
  topicId: number
}

export type Turn = {
	id: number
  performingTeamId: number
  performingTeamScore: number
  guessingTeamId: number
  guessingTeamScore: number
  roundId: number
  currentLineNumber: number
}

export type Haicue = {
	id: number
  roundId: number
  teamId: number
  line1: string
  line2: string
  line3: string
  lineGuessed: number
  correctTeam: number
}

export type Buzzer = {
	id: number
  turnId: number
  teamId: number
  buzzAt: Date
}