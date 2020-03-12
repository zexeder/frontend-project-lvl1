import * as gameLib from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  const userName = gameLib.greeting();

  gameLib.gameRules('Answer "yes" if the number is even, otherwise answer "no".');
  while (gameLib.endGame) {
    const questNum = gameLib.generateNum();
    const userAnswer = gameLib.getAnswer(questNum);
    gameLib.checkAnswer(isEven(questNum), userAnswer, userName);
  }
};
