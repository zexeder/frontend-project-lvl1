import * as gameLib from '../index.js';

const isPrime = (num) => {
  const half = Math.ceil(num / 2);
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i <= half; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default () => {
  const userName = gameLib.greeting();

  gameLib.gameRules('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (gameLib.checkGameStatus()) {
    const questNum = gameLib.generateNum(100);
    const userAnswer = gameLib.getAnswer(questNum);
    gameLib.checkAnswer(isPrime(questNum), userAnswer, userName);
  }
};
