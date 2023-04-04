#!/usr/bin/env node

import { runGame } from '../cli.js';
import getRandomInt from '../utils.js';

//  функция определяющая НОД
function calculateGcd(a, b) {
  if (!b) {
    return a;
  }
  return calculateGcd(b, a % b);
}
//  здесь храниться описание игры
const gameDescription = 'Find the greatest common divisor of given numbers.';
//  функция генерации вопроса и правильного ответа
function getQuestionAndAnswer() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = calculateGcd(num1, num2).toString();
//  Возвращаем вопрос и правильный ответ
  return { question, correctAnswer };
}

//  Собираем и экспортируем наш код игры
export default function brainGcd() {
  runGame(getQuestionAndAnswer, gameDescription);
}
