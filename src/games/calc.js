import { cons } from '@hexlet/pairs';
import play from '..';
import { getRandomInt } from '../utils';

const operators = ['+', '-', '*'];
const length = operators.length - 1;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateGameData = () => {
  const operatorIndex = getRandomInt(0, length);
  const a = getRandomInt();
  const b = getRandomInt();
  const operator = operators[operatorIndex];
  const question = `${a} ${operator} ${b}`;
  const answer = operations[operator](a, b);
  return cons(question, String(answer));
};

const task = 'What is the result of the expression?';

export default () => play(generateGameData, task);
