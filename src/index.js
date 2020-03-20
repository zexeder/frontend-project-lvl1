import readlineSync from 'readline-sync';


let endGame = true;
let score = 0;
const winScore = 3;

const checkGameStatus = () => {
  if (!endGame) {
    return false;
  }
  return true;
};

const generateNum = (min = 0, max = 50) => Math.floor(Math.random() * (max - min + 1) + min);

const checkScore = (name) => {
  if (score === winScore) {
    console.log(`Congratulations, ${name}!`);
    endGame = false;
  }
};

const checkAnswer = (correctAnswer, answer, name) => {
  if (String(answer) === String(correctAnswer)) {
    console.log('Correct!');
    score += 1;
    checkScore(name);
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}!`);
    endGame = false;
  }
};

const gameEngine = (gameRules, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  while (checkGameStatus()) {
    const [question, rightAnswer] = gameData();
    const getUserAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    checkAnswer(rightAnswer, getUserAnswer, name);
  }
};

export { generateNum };
export default gameEngine;
