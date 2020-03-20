import gameEngine, * as gameLib from '../index.js';

const min = 1;
const max = 50;
const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let greatest = Math.min(num1, num2);

  while (greatest > 1) {
    if ((num1 % greatest === 0) && (num2 % greatest === 0)) {
      return greatest;
    }
    greatest -= 1;
  }

  return 1;
};

const generateGameData = () => {
  const num1 = gameLib.generateNum(min, max);
  const num2 = gameLib.generateNum(min, max);
  const questionNum = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2);

  return [questionNum, rightAnswer];
};

export default () => {
  gameEngine(rules, generateGameData);
};
