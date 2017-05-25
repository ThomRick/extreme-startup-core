import {Generator} from './generator';

export class QuestionGenerator implements Generator<string> {
  constructor() {}

  public generate(): string {
    return 'question';
  }
}