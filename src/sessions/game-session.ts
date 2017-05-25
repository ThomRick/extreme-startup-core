import {Session} from './session';
import {Player} from '../players/player';

export class GameSession implements Session {
  constructor(
    private _players: Array<Player> = []
  ) {}

  public addPlayer(player: Player): void {
    this._players.push(player);
  }

  public start(): void {

  }

  get players(): Array<Player> {
    return this._players;
  }
}
