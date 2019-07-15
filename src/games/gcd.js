import { cons } from '@hexlet/pairs';
import play from '..';
import { getRandomInt } from '../utils';

const minNumber = 0;
const maxNumber = 30;

const findGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return findGCD(b, a % b);
};

const generateDataGame = () => {
  const a = getRandomInt(minNumber, maxNumber + 1);
  const b = getRandomInt(minNumber, maxNumber + 1);
  const question = `${a} ${b}`;
  const answer = findGCD(a, b);
  return cons(question, String(answer));
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => play(generateDataGame, task);
