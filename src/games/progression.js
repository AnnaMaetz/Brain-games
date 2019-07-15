import { cons } from '@hexlet/pairs';
import play from '..';
import { getRandomInt } from '../utils';

const length = 10;
const minFirstElement = 0;
const maxFirstElement = 71;
const minStep = 1;
const maxStep = 10;

const generateDataGame = () => {
  const hiddenPosition = getRandomInt(0, length);
  const step = getRandomInt(minStep, maxStep + 1);
  const firstElement = getRandomInt(minFirstElement, maxFirstElement + 1);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const element = (i === 0) ? firstElement : progression[i - 1] + step;
    progression.push(element);
  }
  const answer = progression[hiddenPosition];
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');
  return cons(question, String(answer));
};

const task = 'What number is missing in the progression?';

export default () => play(generateDataGame, task);
