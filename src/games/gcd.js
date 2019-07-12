import { cons } from '@hexlet/pairs';
import play from '..';
import { getRandomInt } from '../utils';

const findGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return findGCD(number2, number1 % number2);
};

const makeGame = () => {
  const number1 = getRandomInt(30);
  const number2 = getRandomInt(30);
  const question = `${number1} ${number2}`;
  const answer = findGCD(number1, number2);
  return cons(question, String(answer));
};

const task = 'Find the greatest common divisor of given numbers.\n';
const numberOfRounds = 3;

export default () => play(makeGame, numberOfRounds, task);
