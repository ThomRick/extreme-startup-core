import {GamePlayer} from '../../players/game-player';
import {Player} from '../../players/player';
import {Session} from '../session';
import {expect} from 'chai';
import {HttpQuestionSender} from '../../senders/http-question.sender';
import {GameSession} from '../game-session';

describe('GameSession', () => {
  let session: Session;

  beforeEach(() => {
    session = new GameSession();
  });

  describe('#addPlayer()', () => {
    it('should add the players to the game sessions players list', () => {
      const player: Player = new GamePlayer('player1', new HttpQuestionSender('hostname'));
      session.addPlayer(player);
      expect((session as GameSession).players).to.have.length(1);
    });
  });

  describe('#start()', () => {
    it('can call start()', () => {
      session.start();
    });
  });
});
