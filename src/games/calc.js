import gameEngine from '../index.js';
import generateNum from '../utils.js';

const min = 0;
const max = 50;
const descrtiption = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getOperationSign = (arr) => {
  const size = operations.length - 1;
  const num = generateNum(0, size);
  return arr[num];
};

const calc = (operationSign, a, b) => {
  switch (operationSign) {
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '+':
      return a + b;
    default:
      return 'Неизвестный оператор';
  }
};

const generateGameData = () => {
  const num1 = generateNum(min, max);
  const num2 = generateNum(min, max);
  const operation = getOperationSign(operations);
  const question = `${num1} ${operation} ${num2}`;
  const rightAnswer = calc(operation, num1, num2);

  return [question, rightAnswer];
};

export default () => {
  gameEngine(descrtiption, generateGameData);
};
