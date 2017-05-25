import {Player} from '../player/player';
import {Session} from './session';

export abstract class AbstractGameSession implements Session {
  constructor(
    private _players: Array<Player> = []
  ) {}

  public addPlayer(player: Player): void {
    this._players.push(player);
  }

  public abstract start(): void;

  get players(): Array<Player> {
    return this._players;
  }
}
