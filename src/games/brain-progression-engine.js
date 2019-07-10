import { cons } from '@hexlet/pairs';
import { greet, getRandomIntInclusive, play } from '..';

const isPlaceOfQuestion = (acc, place) => acc === place;

const buildQuestionAnswerIter = (number, step, place, acc, question, answer) => {
  const newNumber = number + step;
  const newQuestion = isPlaceOfQuestion(acc, place) ? `${question} ..` : `${question} ${number}`;
  const newAnswer = isPlaceOfQuestion(acc, place) ? number : answer;
  if (acc === 10) {
    return cons(newQuestion, String(newAnswer));
  }
  return buildQuestionAnswerIter(newNumber, step, place, acc + 1, newQuestion, newAnswer);
};

const buildQuestionAnswer = () => {
  const place = getRandomIntInclusive(1, 10);
  const step = getRandomIntInclusive(1, 10);
  const number1 = getRandomIntInclusive(1, 30);
  return buildQuestionAnswerIter(number1, step, place, 1, '', '');
};

const task = 'What number is missing in the progression?\n';
const userName = greet(task);

export default () => play(buildQuestionAnswer, userName, 0);
