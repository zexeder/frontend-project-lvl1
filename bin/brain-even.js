#!/usr/bin/env node
// import { endGame, greeting, generateNum, getAnswer, checkAnswer } from '../src/index.js';
import * as gameLib from '../src/index.js';

const gameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};


const userName = gameLib.greeting();
gameRules();
while (gameLib.endGame) {
  let questNum = gameLib.generateNum();
  let userAnswer = gameLib.getAnswer(questNum);
  gameLib.checkAnswer(isEven(questNum), userAnswer, userName);
}
