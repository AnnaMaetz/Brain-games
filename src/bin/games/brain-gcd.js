#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { brainGames, getRandomIntInclusive } from '../brain-games';

const task = 'Find the greatest common divisor of given numbers.\n';


const gcd = (n1, n2, result, divisor) => {
  const n2Devisor = (nu1, nu2, r, d) => {
    const newN2 = nu2 / d;
    const newResult = r * d;
    if (nu1 === 1) {
      return newResult;
    }
    return gcd(nu1, newN2, newResult, 2);
  };
  const n1Devisor = (num1, num2, res, div) => {
    const newN1 = num1 / div;
    if (num2 % div === 0) {
      return n2Devisor(newN1, num2, res, div);
    }
    if (newN1 === 1) {
      return res;
    }
    return gcd(newN1, num2, res, 2);
  };

  if (n1 < 2) {
    return result;
  }
  if (n1 % divisor === 0) {
    return n1Devisor(n1, n2, result, divisor);
  }
  return gcd(n1, n2, result, divisor + 1);
};

const questionAnswer = () => {
  const number1 = getRandomIntInclusive(1, 30);
  const number2 = getRandomIntInclusive(1, 30);
  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2, 1, 2);
  return cons(question, String(answer));
};
brainGames(task, questionAnswer);
