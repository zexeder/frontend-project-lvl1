#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { sayHi } from '../src/index.js';

let questNum = 0;
let userAnswer = '';
let score = 0;
let endGame = 1;

const gameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const generateNum = () => {
  questNum = Math.round(Math.random() * 100);
};

const getAnswer = (num) => {
  userAnswer = readlineSync.question(`Question: ${num} `);
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const checkScore = () => {
  if (score === 3) {
    console.log(`Congratulations, ${userName}!`);
    endGame = 0;
  }
};

const checkAnswer = (answer, name) => {
  if (answer === isEven(questNum)) {
    console.log('Correct!');
    score += 1;
    checkScore();
  } else {
    console.log(`"yes" is wrong answer ;(. Correct answer was "no".
Let's try again, ${name}!`);
    endGame = 0;
  }
};


const userName = sayHi();

gameRules();

while (endGame) {
  generateNum();
  getAnswer(questNum);
  checkAnswer(userAnswer, userName);
}
