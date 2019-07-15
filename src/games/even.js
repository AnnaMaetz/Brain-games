import { cons } from '@hexlet/pairs';
import play from '..';
import { decorateText, getRandomInt } from '../utils';

const isEven = question => question % 2 === 0;

const generateGameData = () => {
  const question = getRandomInt();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const task = `Answer ${decorateText('\'yes\'')} if number even otherwise answer ${decorateText('\'no\'')}.`;

export default () => play(generateGameData, task);
