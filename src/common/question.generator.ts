import {Generator} from './interfaces/generator.interface';

export class QuestionGenerator implements Generator<string> {
  constructor() {}

  public generate(): string {
    return 'question';
  }
}