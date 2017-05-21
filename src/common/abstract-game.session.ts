import {IPlayer} from './interfaces/player.interface';
import {Session} from './interfaces/session.interface';

export abstract class AbstractGameSession implements Session {
  constructor(
    private _players: Array<IPlayer> = []
  ) {}

  public addPlayer(player: IPlayer): void {
    this._players.push(player);
  }

  public abstract start(): void;

  get players(): Array<IPlayer> {
    return this._players;
  }
}
