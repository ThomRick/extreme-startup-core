import {GamePlayer} from '../game-player';
import {Player} from '../player';
import * as sinon from 'sinon';
import {SinonSandbox, SinonStub} from 'sinon';
import {expect} from 'chai';
import {HttpQuestionSender} from '../../senders/http-question.sender';
import {Sender} from '../../senders/sender';

describe('GamePlayer', () => {
  let player: Player;
  let sendStub: SinonStub;
  let sandox: SinonSandbox;

  beforeEach(() => {
    sandox = sinon.sandbox.create();

    const questionSender: Sender<string> = new HttpQuestionSender('hostname');
    sendStub = sandox.stub(questionSender, 'send');

    player = new GamePlayer('nickname', questionSender);
  });

  afterEach(() => {
    sandox.restore();
  });

  describe('#answer()', () => {
    it('should call questions senders to send the questions', done => {
      sendStub.returns(Promise.resolve('answer'));
      player.answer('question')
        .then(() => {
          expect(sendStub.calledOnce).to.be.true;
          done();
        })
        .catch(error => done(error));
    });
  });

  describe('#updateScoreWith()', () => {
    it('should update the score with the 10 positive points', () => {
      player.updateScoreWith(10);
      expect((player as GamePlayer).score).to.be.equal(10);
    });

    it('should update the score with the 10 negative points', () => {
      player.updateScoreWith(-10);
      expect((player as GamePlayer).score).to.be.equal(-10);
    });
  });
});
