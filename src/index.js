import readlineSync from 'readline-sync';


let endGame = true;
let score = 0;
const winScore = 3;

const checkAnswer = (correctAnswer, answer, name) => {
  if (String(answer) === String(correctAnswer)) {
    console.log('Correct!');
    score += 1;
    if (score === winScore) {
      console.log(`Congratulations, ${name}!`);
      endGame = false;
    }
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}!`);
    endGame = false;
  }
};

const gameEngine = (gameDescrtiption, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescrtiption);

  while (endGame) {
    const [question, rightAnswer] = gameData();
    const getUserAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    checkAnswer(rightAnswer, getUserAnswer, name);
  }
};

export default gameEngine;
