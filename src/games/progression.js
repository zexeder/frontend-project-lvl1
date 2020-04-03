import gameEngine from '../index.js';
import generateNum from '../utils.js';

const min = 0;
const max = 10;
const progressionLength = 10;
const description = 'What number is missing in the progression?';

const generateProgression = (start, step) => {
  const progressionList = [];
  for (let i = start; progressionList.length < progressionLength; i += step) {
    progressionList.push(i);
  }
  return progressionList;
};

const createGameQuestion = (progressionItem, list) => {
  list.splice(progressionItem, 1, '..');
  return list.join(' ');
};

const generateGameData = () => {
  const startNum = generateNum(min, max);
  const stepNum = generateNum(min, max);
  const progression = generateProgression(startNum, stepNum);
  const hiddenElementIndex = generateNum(min, progressionLength - 1);
  const rightAnswer = String(progression[hiddenElementIndex]);
  const question = createGameQuestion(hiddenElementIndex, progression);
  return [question, rightAnswer];
};

export default () => {
  gameEngine(description, generateGameData);
};
