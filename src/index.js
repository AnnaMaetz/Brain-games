import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export const greet = (task = '') => {
  console.log('\nWelcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n\n`);
  return userName;
};

export const getRandomIntInclusive = (min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

export const play = (buildQuestionAnswer, userName, i) => {
  const pairQuestionAnswer = buildQuestionAnswer();
  const question = car(pairQuestionAnswer);
  const trueAnswer = cdr(pairQuestionAnswer);
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  if (trueAnswer === userAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!\n`);
      return null;
    }
    return play(buildQuestionAnswer, userName, i + 1);
  }
  console.log(`\x1B[31m${userAnswer} \x1B[39mis wrong answer ;(. Correct answer was \x1B[31m${trueAnswer}\x1B[39m.`);
  console.log(`Let's try again, ${userName}!\n`);
  return null;
};
