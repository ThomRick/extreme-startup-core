import {Session} from './session';
import {Player} from '../players/player';

export class GameSession implements Session {
  private _isStarted: boolean;

  constructor(
    private _players: Array<Player> = []
  ) {
    this._isStarted = false;
  }

  public addPlayer(player: Player): void {
    if (this._isStarted) {
      throw new Error();
    }
    this._players.push(player);
  }

  public start(): void {
    if (this._isStarted) {
      throw new Error();
    }
    this._isStarted = !this._isStarted;
  }

  public stop(): void {
    if (!this._isStarted) {
      throw new Error();
    }
    this._isStarted = !this._isStarted;
  }

  get players(): Array<Player> {
    return this._players;
  }
}
