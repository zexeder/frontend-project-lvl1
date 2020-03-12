#!/usr/bin/env node
import * as gameLib from '../src/index.js';
import { operationSign, calc } from '../src/games/brain-calc.js';

const userName = gameLib.greeting();
gameLib.gameRules('What is the result of the expression?');
while (gameLib.endGame) {
  const num1 = gameLib.generateNum();
  const num2 = gameLib.generateNum();
  const oper = operationSign();
  const result = calc(oper, num1, num2);
  const question = `${num1} ${oper} ${num2}`;
  // console.log(num1, oper, num2, '=', result);
  const userAnswer = gameLib.getAnswer(question);

  gameLib.checkAnswer(result, Number(userAnswer), userName);
}
