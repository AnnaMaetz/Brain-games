#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '..';
import { car, cdr } from '@hexlet/pairs';

export const getRandomIntInclusive = (min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

export const brainGames = (task, questionAnswer) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(task);
  const userName = name();
  for (let i = 0; i < 3; i += 1) {
    const pairQuestionAnswer = questionAnswer();
    const question = car(pairQuestionAnswer);
    const trueAnswer = cdr(pairQuestionAnswer);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
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
};
