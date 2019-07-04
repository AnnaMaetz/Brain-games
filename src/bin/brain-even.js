#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from './brain-games';
import name from '..';

welcome();
console.log('Answer \x1B[31m"yes" \x1B[39mif number even otherwise answer \x1B[31m"no"\x1B[39m.\n\n');
const userName = name();

const getRandomIntInclusive = (min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

for (let i = 0; i < 3; i += 1) {
  const number = getRandomIntInclusive(1, 20);
  const trueAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
  if (trueAnswer === userAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`\x1B[31m${userAnswer} \x1B[39mis wrong answer ;(. Correct answer was \x1B[31m${trueAnswer}\x1B[39m.`);
    console.log(`Let's try again, ${userName}!\n`);
    break;
  }
}
