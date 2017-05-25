import {Player} from '../player/player';

export interface Session {
  addPlayer(player: Player): void
  start(): void
}
