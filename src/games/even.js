import gameEngine, * as gameLib from '../index.js';

const min = 0;
const max = 50;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const generateData = () => {
  const questionNum = gameLib.generateNum(min, max);
  const rightAnswer = isEven(questionNum) ? 'yes' : 'no';

  return [questionNum, rightAnswer];
};

export default () => {
  gameEngine(rules, generateData);
};
