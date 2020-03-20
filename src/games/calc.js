import * as gameLib from '../index.js';

const min = 0;
const max = 50;
const rules = 'What is the result of the expression?';
const operationsArr = ['+', '-', '*'];

const operationSign = (arr) => {
  const num = gameLib.generateNum(0, 2);
  return arr[num];
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

const generateGameData = () => {
  const num1 = gameLib.generateNum(min, max);
  const num2 = gameLib.generateNum(min, max);
  const oper = operationSign(operationsArr);
  const questionNum = `${num1} ${oper} ${num2}`;
  const rightAnswer = calc(oper, num1, num2);
  // console.log([questionNum, rightAnswer]);
  return [questionNum, rightAnswer];
};

export default () => {
  gameLib.gameEngine(rules, generateGameData);

  // const userName = gameLib.greeting();
  // gameLib.gameRules(rules);
  // while (gameLib.checkGameStatus()) {
  //   const num1 = gameLib.generateNum(min, max);
  //   const num2 = gameLib.generateNum(min, max);
  //   const oper = operationSign(operationsArr);
  //   const result = calc(oper, num1, num2);
  //   const question = `${num1} ${oper} ${num2}`;
  //   // console.log(num1, oper, num2, '=', result);
  //   const userAnswer = gameLib.getAnswer(question);
  //   gameLib.checkAnswer(result, Number(userAnswer), userName);
  // }
};
