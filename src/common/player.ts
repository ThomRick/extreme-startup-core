import {IPlayer} from './interfaces/player.interface';
import {Sender} from './interfaces/sender.interface';

export class Player implements IPlayer {
  constructor(
    private _nickname: string,
    private _sender: Sender<string>,
    private _score: number = 0
  ) {}

  public answer(question: string): Promise<string> {
    return this._sender.send(question);
  }

  public updateScoreWith(points: number): void {
    this._score += points;
  }

  get score(): number {
    return this._score;
  }
}
