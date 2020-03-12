import readlineSync from 'readline-sync';


let endGame = 1;
let score = 0;

const gameStatus = () => {
  return endGame;
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const gameRules = (str) => {
  console.log(str);
};

const generateNum = () => Math.floor(Math.random() * 50 + 1);

const getAnswer = (num) => readlineSync.question(`Question: ${num} `);

const checkScore = (name) => {
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
    endGame = 0;
  }
};

const checkAnswer = (correctAnswer, answer, name) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    score += 1;
    checkScore(name);
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}!`);
    endGame = 0;
  }
};

export {
  endGame,
  gameRules,
  greeting,
  generateNum,
  getAnswer,
  checkAnswer,
};
