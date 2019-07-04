#!/usr/bin/env node
import { brainGames, getRandomIntInclusive } from './brain-games';
import { cons } from '@hexlet/pairs';

const task = 'What is the result of the expression?';
const questionAnswer = () => {
  const operation = getRandomIntInclusive(1, 3);
  const number1 = getRandomIntInclusive(1, 30);
  const number2 = getRandomIntInclusive(1, 30);
  let answer;
  let question;
  switch (operation) {
    case 1: answer = number1 + number2;
            question = `${number1} + ${number2}`;
            break;
    case 2: answer = number1 - number2;
            question = `${number1} - ${number2}`;
            break;
    case 3: answer = number1 * number2;
            question = `${number1} * ${number2}`;
            break;
  }
  return cons(question, String(answer));
}
brainGames(task, questionAnswer);
