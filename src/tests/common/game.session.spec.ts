import {GameSession} from '../../common/game.session';
import {Player} from '../../common/player';
import {IPlayer} from '../../common/interfaces/player.interface';
import {Session} from '../../common/interfaces/session.interface';
import {expect} from 'chai';
import {HttpQuestionSender} from '../../common/http-question.sender';

describe('GameSession', () => {
  let session: Session;

  beforeEach(() => {
    session = new GameSession();
  });

  describe('#addPlayer()', () => {
    it('should add the player to the game session player list', () => {
      const player: IPlayer = new Player('player1', new HttpQuestionSender('hostname'));
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
