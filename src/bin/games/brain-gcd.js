#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { brainGames, getRandomIntInclusive } from '../brain-games';

const task = 'Find the greatest common divisor of given numbers.\n';
const questionAnswer = () => {
  const number1 = getRandomIntInclusive(1, 30);
  const number2 = getRandomIntInclusive(1, 30);
  const question = `${number1} ${number2}`;

  const gcd = (n1, n2, result, divisor) => {
    if (n1 < 2) {
      return result;
    }
    if (n1 % divisor === 0) {
      const newN1 = n1 / divisor;
      if (n2 % divisor === 0) {
        const newN2 = n2 / divisor;
        const newResult = result * divisor;
        if (n1 === divisor) {
          return newResult;
        }
        return gcd(newN1, newN2, newResult, 2);
      }
      if (n1 === divisor) {
        return result;
      }
      return gcd(newN1, n2, result, 2);
    }

    return gcd(n1, n2, result, divisor + 1);
  };
  const answer = gcd(number1, number2, 1, 2);
  return cons(question, String(answer));
};
brainGames(task, questionAnswer);
