import gameEngine from '../index.js';
import generateNum from '../utils.js';

const min = 0;
const max = 50;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const generateData = () => {
  const question = generateNum(min, max);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => {
  gameEngine(description, generateData);
};
