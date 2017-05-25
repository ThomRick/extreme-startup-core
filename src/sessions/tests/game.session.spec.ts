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

    it('should throw an Error if 2 players with the same nickname are added', () => {
      const player: Player = new GamePlayer('player1', new HttpQuestionSender('hostname'));
      session.addPlayer(player);
      expect(() => {
        session.addPlayer(player);
      }).to.throw(Error);
    });
  });

  describe('#start()', () => {
    it('should throw an Error if start() is called 2 times', () => {
      session.start();
      expect(() => {
        session.start();
      }).to.throw(Error);
    });

    it('should throw an Error if addPlayer() is called after session start()', () => {
      session.start();
      expect(() => {
        session.addPlayer(new GamePlayer('player1', new HttpQuestionSender('hostname')));
      }).to.throw(Error);
    });
  });

  describe('#stop()', () => {
    it('should throw an Error if called before session start()', () => {
      expect(() => {
        session.stop();
      }).to.throw(Error);
    });

    it('can call addPlayer() after session stop()', () => {
      const player1: Player = new GamePlayer('player1', new HttpQuestionSender('hostname'));
      const player2: Player = new GamePlayer('player2', new HttpQuestionSender('hostname'));
      session.addPlayer(player1);
      session.start();
      session.stop();
      session.addPlayer(player2);
      expect((session as GameSession).players).to.have.length(2);
    });
  });
});
