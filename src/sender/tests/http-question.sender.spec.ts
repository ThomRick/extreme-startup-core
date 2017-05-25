import {HttpQuestionSender} from '../http-question.sender';
import {SinonStub} from 'sinon';
import * as http from 'http';
import * as sinon from 'sinon';
import {PassThrough} from 'stream';
import {expect} from 'chai';
import {Sender} from '../sender';

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
      const expected: string = 'answer';
      const response = new PassThrough();
      response.write(expected);
      response.end();

      const request = new PassThrough();
      requestStub.callsArgWith(1, response)
        .returns(request);

      sender.send('question')
        .then(answer => {
          expect(answer).to.be.equal(expected);
          done();
        })
        .catch(error => {
          done(error);
        });
    });

    it('should send the question and return a promise rejection', done => {
      const request = new PassThrough();
      requestStub.returns(request);

      sender.send('question')
        .then(() => {
          throw new Error('should not be here');
        })
        .catch(error => {
          expect(error.message).to.not.be.equal('should not be here');
          done();
        });

      request.emit('error', 'some error');
    });
  });
});
