import { cons } from '@hexlet/pairs';
import play from '..';
import { getRandomInt } from '../utils';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateGameData = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const question = `${a} ${b}`;
  const answer = findGcd(a, b);
  return cons(question, String(answer));
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => play(generateGameData, task);
