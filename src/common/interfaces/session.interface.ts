import {IPlayer} from './player.interface';

export interface Session {
  addPlayer(player: IPlayer): void
  start(): void
}
