import { cons } from '@hexlet/pairs';
import play from '..';
import { makeTextRed, getRandomInt } from '../utils';

const isEven = question => question % 2 === 0;

const makeGame = () => {
  const question = getRandomInt(20);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const task = `Answer ${makeTextRed('\'yes\'')} if number even otherwise answer ${makeTextRed('\'no\'')}.\n\n`;
const numberOfRounds = 3;

export default () => play(makeGame, numberOfRounds, task);
