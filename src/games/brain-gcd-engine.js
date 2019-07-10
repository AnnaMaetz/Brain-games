import { cons } from '@hexlet/pairs';
import { greet, getRandomIntInclusive, play } from '..';

const calculateGcd = (n1, n2) => {
  if (!n2) {
    return n1;
  }
  return calculateGcd(n2, n1 % n2);
};

const buildQuestionAnswer = () => {
  const number1 = getRandomIntInclusive(1, 30);
  const number2 = getRandomIntInclusive(1, 30);
  const question = `${number1} ${number2}`;
  const answer = calculateGcd(number1, number2);
  return cons(question, String(answer));
};

const task = 'Find the greatest common divisor of given numbers.\n';
const userName = greet(task);

export default () => {
  play(buildQuestionAnswer, userName, 0);
};
