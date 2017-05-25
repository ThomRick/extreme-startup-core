import {AbstractGameSession} from '../abstract-game.session';
import {GamePlayer} from '../../players/game-player';
import {Player} from '../../players/player';
import {Session} from '../session';
import {expect} from 'chai';
import {HttpQuestionSender} from '../../senders/http-question.sender';

describe('AbstractGameSession', () => {
  let session: Session;

  class GameSession extends AbstractGameSession {
    public start(): void {}
  }

  beforeEach(() => {
    session = new GameSession();
  });

  describe('#addPlayer()', () => {
    it('should add the players to the game sessions players list', () => {
      const player: Player = new GamePlayer('player1', new HttpQuestionSender('hostname'));
      session.addPlayer(player);
      expect((session as AbstractGameSession).players).to.have.length(1);
    });
  });

  describe('#start()', () => {
    it('can call start()', () => {
      session.start();
    });
  });
});
