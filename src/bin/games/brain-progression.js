#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { brainGames, getRandomIntInclusive } from '../brain-games';

const task = 'What is the result of the expression?\n';

const questionAnswerIter = (num, st, pl, acc, q, a) => {
  const newN = num + st;
  const newQ = acc === pl ? `${q} ..` : `${q} ${num}`;
  const newA = acc === pl ? num : a;
  if (acc === 10) {
    return cons(newQ, String(newA));
  }
  return questionAnswerIter(newN, st, pl, acc + 1, newQ, newA);
};

const questionAnswer = () => {
  const place = getRandomIntInclusive(1, 10);
  const step = getRandomIntInclusive(1, 10);
  const number1 = getRandomIntInclusive(1, 30);
  return questionAnswerIter(number1, step, place, 1, '', '');
};
brainGames(task, questionAnswer);
