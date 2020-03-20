import * as gameLib from '../index.js';

const min = 0;
const max = 50;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

// const getRightAnswer = isEven(questionNum) ? 'yes' : 'no';

// const getRightAnswer = (even) => {
//   if (even === true) {
//     return 'yes';
//   }
//   return 'no';
// };

const generateData = () => {
  const questionNum = gameLib.generateNum(min, max);
  const rightAnswer = isEven(questionNum) ? 'yes' : 'no';
  // console.log([questionNum, rightAnswer]);
  return [questionNum, rightAnswer];
};

export default () => {
  gameLib.gameEngine(rules, generateData);

  // const userName = gameLib.greeting();
  // gameLib.gameRules(rules);
  // while (gameLib.checkGameStatus()) {
  //   const questNum = gameLib.generateNum(min, max);
  //   const userAnswer = gameLib.getAnswer(questNum);
  //   gameLib.checkAnswer(getRightAnswer(isEven(questNum)), userAnswer, userName);
  // }
};
