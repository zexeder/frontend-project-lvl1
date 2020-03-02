import readlineSync from 'readline-sync';


export const userName = readlineSync.question('May I have your name?: ');

export const sayHi = (name) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
};
