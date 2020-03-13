import * as gameLib from '../index.js';

const maxValue = 50;

const operationSign = () => {
  const num = Math.floor((Math.random() * 3) + 1);
  let oper = '+';
  switch (num) {
    case 1:
      oper = '-';
      break;
    case 2:
      oper = '*';
      break;
    default:
      oper = '+';
      break;
  }
  return oper;
};

const calc = (oper, a, b) => {
  switch (oper) {
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return a + b;
  }
};

export default () => {
  const userName = gameLib.greeting();
  gameLib.gameRules('What is the result of the expression?');
  while (gameLib.checkGameStatus()) {
    const num1 = gameLib.generateNum(maxValue);
    const num2 = gameLib.generateNum(maxValue);
    const oper = operationSign();
    const result = calc(oper, num1, num2);
    const question = `${num1} ${oper} ${num2}`;
    // console.log(num1, oper, num2, '=', result);
    const userAnswer = gameLib.getAnswer(question);
    gameLib.checkAnswer(result, Number(userAnswer), userName);
  }
};
