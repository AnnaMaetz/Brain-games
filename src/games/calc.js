import { cons } from '@hexlet/pairs';
import play from '..';
import { getRandomInt } from '../utils';

const minNumber = 0;
const maxNumber = 30;

const operators = ['+', '-', '*'];

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateDataGame = () => {
  const operatorIndex = getRandomInt(0, operators.length);
  const a = getRandomInt(minNumber, maxNumber + 1);
  const b = getRandomInt(minNumber, maxNumber + 1);
  const operator = operators[operatorIndex];
  const question = `${a} ${operator} ${b}`;
  const answer = operations[operator](a, b);
  return cons(question, String(answer));
};

const task = 'What is the result of the expression?';

export default () => play(generateDataGame, task);
