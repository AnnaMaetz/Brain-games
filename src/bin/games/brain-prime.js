#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { brainGames, getRandomIntInclusive } from '../brain-games';

const task = 'Answer \x1B[31m"yes" \x1B[39mif given number is prime. Otherwise answer \x1B[31m"no"\x1B[39m.\n\n';
const questionAnswer = () => {
  const primeNumbersArr = [2, 35, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
  const question = getRandomIntInclusive(1, 71);
  const answer = primeNumbersArr.indexOf(question) === -1 ? 'no' : 'yes';
  return cons(question, answer);
};
brainGames(task, questionAnswer);
