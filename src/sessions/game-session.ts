import {Session} from './session';
import {Player} from '../players/player';
import {GamePlayer} from '../players/game-player';
import {isNullOrUndefined} from 'util';

export class GameSession implements Session {
  private _isStarted: boolean;

  constructor(
    private _players: Array<Player> = []
  ) {
    this._isStarted = false;
  }

  public addPlayer(newPlayer: Player): void {
    if (this._isStarted) {
      throw new Error();
    }
    if (!isNullOrUndefined(this._players.find(player => (player as GamePlayer).nickname === (newPlayer as GamePlayer).nickname))) {
      throw new Error();
    }
    this._players.push(newPlayer);
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
