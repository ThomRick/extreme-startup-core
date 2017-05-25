import {Player} from './player';
import {Sender} from '../senders/sender';

export class GamePlayer implements Player {
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

  get nickname(): string {
    return this._nickname;
  }

  get score(): number {
    return this._score;
  }
}
