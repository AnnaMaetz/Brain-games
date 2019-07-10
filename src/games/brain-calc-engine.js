import { cons } from '@hexlet/pairs';
import { greet, getRandomIntInclusive, play } from '..';

const operations = ['+', '-', '*'];

const getQuestion = (number1, number2, operationIndex) => `${number1} ${operations[operationIndex]} ${number2}`;

const getAnswer = (number1, number2, operationIndex) => {
  const question = `${number1} ${operations[operationIndex]} ${number2}`;
  return Math.eval(question);
};

const buildQuestionAnswer = () => {
  const operationIndex = getRandomIntInclusive(0, operations.length - 1);
  const number1 = getRandomIntInclusive(1, 30);
  const number2 = getRandomIntInclusive(1, 30);
  const question = getQuestion(number1, number2, operationIndex);
  const answer = getAnswer(number1, number2, operationIndex);
  return cons(question, String(answer));
};

const task = 'What is the result of the expression?\n';
const userName = greet(task);

export default () => play(buildQuestionAnswer, userName, 0);
