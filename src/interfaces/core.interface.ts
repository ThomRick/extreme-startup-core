interface GameSession {
  addPlayer(player: Player): void
  start(): void
}

interface Player {
  receive(question: string): Promise<string>
  addToScore(points: number): void
}

interface Question {
  isValid(answer: string): boolean
}

interface QuestionSender {
  sendTo(player: Player): void
}

interface QuestionGenerator {
  generate(): Question
}

