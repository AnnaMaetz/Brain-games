import { cons } from '@hexlet/pairs';
import play from '..';
import { decorateText, getRandomInt } from '../utils';

const minNumber = 0;
const maxNumber = 71;

const isPrime = (number) => {
  const iter = (n, acc) => {
    if (n % acc === 0) {
      return false;
    }
    if (acc > Math.sqrt(n)) {
      return true;
    }
    return iter(n, acc + 1);
  };
  return iter(number, 2);
};

const generateGameData = () => {
  const question = getRandomInt(minNumber, maxNumber + 1);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const task = `Answer ${decorateText('\'yes\'')} if given number is prime. Otherwise answer ${decorateText('\'no\'')}.`;

export default () => play(generateGameData, task);
