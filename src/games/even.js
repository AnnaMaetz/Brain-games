import { cons } from '@hexlet/pairs';
import play from '..';
import { decorateText, getRandomInt } from '../utils';

const minNumber = 0;
const maxNumber = 30;

const isEven = question => question % 2 === 0;

const generateDataGame = () => {
  const question = getRandomInt(minNumber, maxNumber + 1);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const task = `Answer ${decorateText('\'yes\'')} if number even otherwise answer ${decorateText('\'no\'')}.`;

export default () => play(generateDataGame, task);
