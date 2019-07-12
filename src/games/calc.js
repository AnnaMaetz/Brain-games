import { cons } from '@hexlet/pairs';
import play from '..';
import { getRandomInt } from '../utils';

const operations = ['+', '-', '*'];

const getAnswer = (number1, number2, operation) => {
  const calculations = {
    '+': () => number1 + number2,
    '-': () => number1 - number2,
    '*': () => number1 * number2,
  };
  return calculations[operation]();
};

const makeGame = () => {
  const operationIndex = getRandomInt(operations.length);
  const number1 = getRandomInt(30);
  const number2 = getRandomInt(30);
  const question = `${number1} ${operations[operationIndex]} ${number2}`;
  const answer = getAnswer(number1, number2, operations[operationIndex]);
  return cons(question, String(answer));
};

const task = 'What is the result of the expression?\n';
const numberOfRounds = 3;

export default () => play(makeGame, numberOfRounds, task);
