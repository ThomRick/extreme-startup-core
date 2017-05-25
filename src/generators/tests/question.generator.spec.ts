import {QuestionGenerator} from '../question.generator';

describe('QuestionGenerator', () => {
  it('can call generate()', () => {
    const generator = new QuestionGenerator();
    const question: string = generator.generate();
  });
});
