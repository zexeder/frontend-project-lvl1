import * as gameLib from '../index.js';

const progressionLength = 10;
const maxValue = 10;

const generateProgression = (start, step) => {
  const arr = [];
  for (let i = start; arr.length < progressionLength; i += step) {
    arr.push(i);
  }
  return arr;
};

const hideNumber = (num, arr) => {
  // arr[num] = '..';
  arr.splice(num, 1, '..');
  return arr.join(' ');
};

export default () => {
  const userName = gameLib.greeting();
  gameLib.gameRules('What number is missing in the progression?');
  while (gameLib.checkGameStatus()) {
    const startNum = gameLib.generateNum(maxValue);
    const stepNum = gameLib.generateNum(maxValue);
    const progressionArr = generateProgression(startNum, stepNum);

    const hiddenIndex = gameLib.generateNum(maxValue - 1);

    const hiddenNum = progressionArr[hiddenIndex];
    const rightAnswer = hiddenNum;
    const question = hideNumber(hiddenIndex, progressionArr);
    const userAnswer = gameLib.getAnswer(question);
    gameLib.checkAnswer(Number(rightAnswer), Number(userAnswer), userName);
  }
};
