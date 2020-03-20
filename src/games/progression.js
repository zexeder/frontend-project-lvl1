import gameEngine, * as gameLib from '../index.js';

const progressionLength = 10;
const min = 0;
const max = 10;
const rules = 'What number is missing in the progression?';

const generateProgression = (start, step) => {
  const arr = [];
  for (let i = start; arr.length < progressionLength; i += step) {
    arr.push(i);
  }
  return arr;
};

const hideNumber = (num, arr) => {
  arr.splice(num, 1, '..');
  return arr.join(' ');
};

const generateGameData = () => {
  const startNum = gameLib.generateNum(min, max);
  const stepNum = gameLib.generateNum(min, max);
  const progressionArr = generateProgression(startNum, stepNum);
  const hiddenArrIndex = gameLib.generateNum(min, max - 1);
  const hiddenNum = progressionArr[hiddenArrIndex];
  const questionNum = hideNumber(hiddenArrIndex, progressionArr);
  const rightAnswer = hiddenNum;

  return [questionNum, rightAnswer];
};

export default () => {
  gameEngine(rules, generateGameData);
};
