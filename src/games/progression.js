import gameEngine from '../index.js';
import generateNum from '../utils.js';

const min = 0;
const max = 10;
const progressionLength = 10;
const descrtiption = 'What number is missing in the progression?';

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
  const startNum = generateNum(min, max);
  const stepNum = generateNum(min, max);
  const progressionArr = generateProgression(startNum, stepNum);
  const hiddenArrIndex = generateNum(min, progressionLength - 1);
  const hiddenNum = progressionArr[hiddenArrIndex];
  const question = hideNumber(hiddenArrIndex, progressionArr);
  const rightAnswer = hiddenNum;

  return [question, rightAnswer];
};

export default () => {
  gameEngine(descrtiption, generateGameData);
};
