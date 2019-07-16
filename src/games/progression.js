import { cons } from '@hexlet/pairs';
import play from '..';
import { getRandomInt } from '../utils';

const length = 9;

const generateGameData = () => {
  const hiddenPosition = getRandomInt(0, length);
  const step = getRandomInt();
  const firstElement = getRandomInt();
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    const element = (i === 0) ? firstElement : progression[i - 1] + step;
    progression.push(element);
  }
  const answer = progression[hiddenPosition];
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');
  return cons(question, String(answer));
};

const task = 'What number is missing in the progression?';

export default () => play(generateGameData, task);
