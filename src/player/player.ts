export interface Player {
  answer(question: string): Promise<string>
  updateScoreWith(points: number): void
}
