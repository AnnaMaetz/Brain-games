#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { brainGames, getRandomIntInclusive } from '../brain-games';

const task = 'What is the result of the expression?\n';

const getQuestion = (n1, n2, oper) => {
  const q = {
    1: `${n1} + ${n2}`,
    2: `${n1} - ${n2}`,
    3: `${n1} * ${n2}`,
  };
  return q[oper];
};

const getAnswer = (n1, n2, oper) => {
  const a = {
    1: () => n1 + n2,
    2: () => n1 - n2,
    3: () => n1 * n2,
  };
  return a[oper]();
};

const questionAnswer = () => {
  const operation = getRandomIntInclusive(1, 3);
  const number1 = getRandomIntInclusive(1, 30);
  const number2 = getRandomIntInclusive(1, 30);
  const question = getQuestion(number1, number2, operation);
  const answer = getAnswer(number1, number2, operation);
  return cons(question, String(answer));
};

brainGames(task, questionAnswer);
