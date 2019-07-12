import { cons } from '@hexlet/pairs';
import play from '..';
import { makeTextRed, getRandomInt } from '../utils';

const isPrime = (number, i = 2) => {
  if (number % i === 0) {
    return false;
  }
  if (i > Math.sqrt(number)) {
    return true;
  }
  return isPrime(number, i + 1);
};

const makeGame = () => {
  const question = getRandomInt(71);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const task = `Answer ${makeTextRed('\'yes\'')} if given number is prime. Otherwise answer ${makeTextRed('\'no\'')}.\n\n`;
const numberOfRounds = 3;

export default () => play(makeGame, numberOfRounds, task);
