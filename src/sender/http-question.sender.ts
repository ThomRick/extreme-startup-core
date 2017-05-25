import * as http from 'http';
import {ClientRequest} from 'http';
import {Sender} from './sender';

export class HttpQuestionSender implements Sender<string> {
  constructor(
    private _hostname: string
  ) {}

  public send(question: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const request: ClientRequest = http.request({
        hostname: this._hostname,
        method: 'GET',
        path: `/?q=${ question }`
      }, response => {
        let answer: string = '';
        response.on('data', chunk => {
          answer += chunk;
        });
        response.on('end', () => {
          resolve(answer);
        });
      });
      request.on('error', reject);
      request.end();
    });
  }
}
