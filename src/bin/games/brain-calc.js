#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { brainGames, getRandomIntInclusive } from '../brain-games';

const task = 'What is the result of the expression?';
const questionAnswer = () => {
  const operation = getRandomIntInclusive(1, 3);
  const number1 = getRandomIntInclusive(1, 30);
  const number2 = getRandomIntInclusive(1, 30);
  let answer;
  let question;
  switch (operation) {
    case 1:
      question = `${number1} + ${number2}`;
      answer = number1 + number2;
      break;

    case 2:
      question = `${number1} - ${number2}`;
      answer = number1 - number2;
      break;

    default:
      question = `${number1} * ${number2}`;
      answer = number1 * number2;
      break;
  }
  return cons(question, String(answer));
};
brainGames(task, questionAnswer);
