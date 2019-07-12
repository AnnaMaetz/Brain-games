import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { makeTextRed } from './utils';

export default (makeGame, numberOfRounds = 3, task = '') => {
  console.log('\nWelcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n\n`);

  if (task !== '') {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const game = makeGame();
      const question = car(game);
      const trueAnswer = cdr(game);
      const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
      if (trueAnswer === userAnswer) {
        console.log('Correct!');
        if (i === numberOfRounds - 1) {
          console.log(`Congratulations, ${userName}!\n`);
        }
      } else {
        console.log(`${makeTextRed(userAnswer)} is wrong answer ;(. Correct answer was ${makeTextRed(trueAnswer)}.`);
        console.log(`Let's try again, ${userName}!\n`);
        break;
      }
    }
  }
};
