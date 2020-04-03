import gameEngine from '../index.js';
import generateNum from '../utils.js';

const min = 0;
const max = 50;
const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getOperationSign = (signs) => {
  const maxIndex = operations.length - 1;
  const index = generateNum(0, maxIndex);
  return signs[index];
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
      return null;
  }
};

const generateGameData = () => {
  const num1 = generateNum(min, max);
  const num2 = generateNum(min, max);
  const operation = getOperationSign(operations);
  const question = `${num1} ${operation} ${num2}`;
  const rightAnswer = String(calc(operation, num1, num2));

  return [question, rightAnswer];
};

export default () => {
  gameEngine(description, generateGameData);
};
