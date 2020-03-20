import * as gameLib from '../index.js';

const min = 0;
const max = 100;
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const half = Math.ceil(num / 2);
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= half; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};


const generateGameData = () => {
  const questionNum = gameLib.generateNum(min, max);
  const righAnswer = isPrime(questionNum) ? 'yes' : 'no';
  return [questionNum, righAnswer];
};

export default () => {
  gameLib.gameEngine(rules, generateGameData);
  // const userName = gameLib.greeting();
  // gameLib.gameRules(rules);
  // while (gameLib.checkGameStatus()) {
  //   const questNum = gameLib.generateNum(min, max);
  //   const userAnswer = gameLib.getAnswer(questNum);
  //   gameLib.checkAnswer(isPrime(questNum), userAnswer, userName);
  // }
};
