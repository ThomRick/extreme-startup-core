export interface IPlayer {
  answer(question: string): Promise<string>
  updateScoreWith(points: number): void
}
