import gameEngine from '../index.js';
import generateNum from '../utils.js';

const min = 1;
const max = 50;
const description = 'Find the greatest common divisor of given numbers.';

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
  const num1 = generateNum(min, max);
  const num2 = generateNum(min, max);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(gcd(num1, num2));

  return [question, rightAnswer];
};

export default () => {
  gameEngine(description, generateGameData);
};
