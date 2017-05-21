import {HttpQuestionSender} from '../../common/http-question.sender';
import {SinonStub} from 'sinon';
import * as http from 'http';
import * as sinon from 'Sinon';
import {PassThrough} from 'stream';
import {expect} from 'chai';
import {Sender} from '../../common/interfaces/sender.interface';

describe('HttpQuestionSender', () => {
  describe('#send()', () => {
    let requestStub: SinonStub;
    let sender: Sender<string>;

    beforeEach(() => {
      requestStub = sinon.stub(http, 'request');
      sender = new HttpQuestionSender('url');
    });

    afterEach(() => {
      requestStub.restore();
    });

    it('should send the question and return the answer Promise', done => {
      const expectedAnswer: string = 'answer';
      const response = new PassThrough();
      response.write(expectedAnswer);
      response.end();

      const request = new PassThrough();

      requestStub.callsArgWith(1, response)
        .returns(request);

      sender.send('question')
        .then(answer => {
          expect(answer).to.be.equal(expectedAnswer);
          done();
        })
        .catch(error => {
          done(error);
        });
    });

  });
});
