#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { brainGames, getRandomIntInclusive } from '../brain-games';

const task = 'Answer \x1B[31m"yes" \x1B[39mif number even otherwise answer \x1B[31m"no"\x1B[39m.\n\n';
const questionAnswer = () => {
  const question = getRandomIntInclusive(1, 20);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
};
brainGames(task, questionAnswer);
