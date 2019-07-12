import { cons } from '@hexlet/pairs';
import play from '..';
import { getRandomInt } from '../utils';

const numberOfElements = 10;

const makeGame = () => {
  const place = getRandomInt(10);
  const step = getRandomInt(10);
  const firstElement = getRandomInt(30);
  const elements = [firstElement];
  for (let i = 0; i < numberOfElements; i += 1) {
    elements.push(elements[i] + step);
  }
  const answer = elements[place];
  elements[place] = '..';
  const question = elements.join(' ');
  return cons(question, String(answer));
};

const task = 'What number is missing in the progression?\n';
const numberOfRounds = 3;

export default () => play(makeGame, numberOfRounds, task);
