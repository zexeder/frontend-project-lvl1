import gameEngine from '../index.js';
import generateNum from '../utils.js';

const min = 0;
const max = 10;
const progressionLength = 10;
const description = 'What number is missing in the progression?';

const generateProgression = (start, step) => {
  const list = [];
  for (let i = start; list.length < progressionLength; i += step) {
    list.push(i);
  }
  return list;
};

const createGameQuestion = (num, list) => {
  list.splice(num, 1, '..');
  return list.join(' ');
};

const generateGameData = () => {
  const startNum = generateNum(min, max);
  const stepNum = generateNum(min, max);
  const progressionList = generateProgression(startNum, stepNum);
  const hiddenElementIndex = generateNum(min, progressionLength - 1);
  const rightAnswer = String(progressionList[hiddenElementIndex]);
  const question = createGameQuestion(hiddenElementIndex, progressionList);
  return [question, rightAnswer];
};

export default () => {
  gameEngine(description, generateGameData);
};
