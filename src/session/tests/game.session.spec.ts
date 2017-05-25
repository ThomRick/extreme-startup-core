import {AbstractGameSession} from '../abstract-game.session';
import {GamePlayer} from '../../player/game-player';
import {Player} from '../../player/player';
import {Session} from '../session';
import {expect} from 'chai';
import {HttpQuestionSender} from '../../sender/http-question.sender';

describe('AbstractGameSession', () => {
  let session: Session;

  class GameSession extends AbstractGameSession {
    public start(): void {}
  }

  beforeEach(() => {
    session = new GameSession();
  });

  describe('#addPlayer()', () => {
    it('should add the player to the game session player list', () => {
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
