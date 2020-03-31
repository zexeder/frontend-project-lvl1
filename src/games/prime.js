import gameEngine from '../index.js';
import generateNum from '../utils.js';

const min = 0;
const max = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const half = Math.ceil(num / 2);
  for (let i = 2; i <= half; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateGameData = () => {
  const question = generateNum(min, max);
  const righAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, righAnswer];
};

export default () => {
  gameEngine(description, generateGameData);
};
