#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { brainGames, getRandomIntInclusive } from '../brain-games';

const task = 'Find the greatest common divisor of given numbers.\n';


const gcd = (n1, n2) => {
  if (!n2) {
    return n1;
  }
  return gcd(n2, n1 % n2);
};

const questionAnswer = () => {
  const number1 = getRandomIntInclusive(1, 30);
  const number2 = getRandomIntInclusive(1, 30);
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2);
  return cons(question, String(answer));
};
brainGames(task, questionAnswer);
