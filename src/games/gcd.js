import * as gameLib from '../index.js';

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

export default () => {
  const userName = gameLib.greeting();
  gameLib.gameRules('What is the result of the expression?');
  while (gameLib.checkGameStatus()) {
    const num1 = gameLib.generateNum();
    const num2 = gameLib.generateNum();
    const result = gcd(num1, num2);
    const question = `${num1} ${num2}`;
    // console.log(num1, num2, result);
    const userAnswer = gameLib.getAnswer(question);
    gameLib.checkAnswer(result, Number(userAnswer), userName);
  }
};
