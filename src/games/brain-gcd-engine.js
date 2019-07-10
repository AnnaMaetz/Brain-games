import { cons } from '@hexlet/pairs';
import { greet, getRandomIntInclusive, play } from '..';

const calculateGcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return calculateGcd(number2, number1 % number2);
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
