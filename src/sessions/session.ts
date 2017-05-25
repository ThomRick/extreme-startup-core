import {Player} from '../players/player';

export interface Session {
  addPlayer(player: Player): void
  start(): void
}
