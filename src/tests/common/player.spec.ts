import {Player} from '../../common/player';
import {IPlayer} from '../../common/interfaces/player.interface';
import * as sinon from 'sinon';
import {SinonSandbox, SinonStub} from 'sinon';
import {expect} from 'chai';
import {HttpQuestionSender} from '../../common/http-question.sender';
import {Sender} from '../../common/interfaces/sender.interface';

describe('Player', () => {
  let player: IPlayer;
  let sendStub: SinonStub;
  let sandox: SinonSandbox;

  beforeEach(() => {
    sandox = sinon.sandbox.create();

    const questionSender: Sender<string> = new HttpQuestionSender('hostname');
    sendStub = sandox.stub(questionSender, 'send');

    player = new Player('nickname', questionSender);
  });

  afterEach(() => {
    sandox.restore();
  });

  describe('#answer()', () => {
    it('should call question sender to send the question', done => {
      sendStub.returns(Promise.resolve('answer'));
      player.answer('question')
        .then(() => {
          expect(sendStub.calledOnce).to.be.true;
          done();
        })
        .catch(error => done(error));
    });
  });

  describe('updateScoreWith()', () => {
    it('should update the score with the 10 positive points', () => {
      player.updateScoreWith(10);
      expect((player as Player).score).to.be.equal(10);
    });

    it('should update the score with the 10 negative points', () => {
      player.updateScoreWith(-10);
      expect((player as Player).score).to.be.equal(-10);
    });
  });
});
