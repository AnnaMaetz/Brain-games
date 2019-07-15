import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { decorateText } from './utils';

const roundsCount = 3;

export default (generateDataGame, task) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${task}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n\n`);
  for (let i = 0; i < roundsCount; i += 1) {
    const dataGame = generateDataGame();
    const question = car(dataGame);
    const trueAnswer = cdr(dataGame);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (trueAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${decorateText(userAnswer)} is wrong answer ;(. Correct answer was ${decorateText(trueAnswer)}.`);
      console.log(`Let's try again, ${userName}!\n`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
  return true;
};
