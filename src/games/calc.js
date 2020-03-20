import gameEngine, * as gameLib from '../index.js';

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
  
  return [questionNum, rightAnswer];
};

export default () => {
  gameEngine(rules, generateGameData);
};
