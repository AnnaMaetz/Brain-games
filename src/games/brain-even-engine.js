import { cons } from '@hexlet/pairs';
import { greet, getRandomIntInclusive, play } from '..';

const isEven = question => question % 2 === 0;

const buildQuestionAnswer = () => {
  const question = getRandomIntInclusive(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const task = 'Answer \x1B[31m"yes" \x1B[39mif number even otherwise answer \x1B[31m"no"\x1B[39m.\n\n';
const userName = greet(task);

export default () => play(buildQuestionAnswer, userName, 0);
