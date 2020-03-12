#!/usr/bin/env node
// import { endGame, greeting, generateNum, getAnswer, checkAnswer } from '../src/index.js';
import * as gameLib from '../src/index.js';
import isEven from '../src/games/brain-even.js';

const userName = gameLib.greeting();

gameLib.gameRules('Answer "yes" if the number is even, otherwise answer "no".');
while (gameLib.endGame) {
  const questNum = gameLib.generateNum();
  const userAnswer = gameLib.getAnswer(questNum);
  gameLib.checkAnswer(isEven(questNum), userAnswer, userName);
}
