#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import name from '..';

export const getRandomIntInclusive = (min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

const brainGamesIter = (questAnsw, uName, i) => {
  const pairQuestionAnswer = questAnsw();
  const question = car(pairQuestionAnswer);
  const trueAnswer = cdr(pairQuestionAnswer);
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
  if (trueAnswer === userAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${uName}!\n`);
      return null;
    }
    return brainGamesIter(questAnsw, uName, i + 1);
  }
  console.log(`\x1B[31m${userAnswer} \x1B[39mis wrong answer ;(. Correct answer was \x1B[31m${trueAnswer}\x1B[39m.`);
  console.log(`Let's try again, ${uName}!\n`);
  return null;
};

export const brainGames = (task, questionAnswer) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(task);
  const userName = name();
  return brainGamesIter(questionAnswer, userName, 0);
};
