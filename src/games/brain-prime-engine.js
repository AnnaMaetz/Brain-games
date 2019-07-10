import { cons } from '@hexlet/pairs';
import { greet, getRandomIntInclusive, play } from '..';

const isPrime = (number) => {
  const isPrimeIter = (i) => {
    if (number % i === 0) {
      return false;
    }
    if (i > Math.sqrt(number)) {
      return true;
    }
    return isPrimeIter(i + 1);
  };
  return isPrimeIter(2);
};

const buildQuestionAnswer = () => {
  const question = getRandomIntInclusive(1, 71);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const task = 'Answer \x1B[31m"yes" \x1B[39mif given number is prime. Otherwise answer \x1B[31m"no"\x1B[39m.\n\n';
const userName = greet(task);

export default () => play(buildQuestionAnswer, userName, 0);
