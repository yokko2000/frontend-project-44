#!/usr/bin/env node
import { runGame } from '../src/cli.js';
import { getRandomInt } from '../src/utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
// функция проверяет простое ли число
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
// функция генерации вопроса и ответа
function getQuestionAndAnswer() {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
}

runGame(getQuestionAndAnswer, gameDescription);
