#!/usr/bin/env node

import { runGame } from '../cli.js';
import getRandomInt from '../utils.js';

//  функция проверящая является ли число четным
const isEven = (num) => num % 2 === 0;
//  здесь храниться описание игры
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
//  функция генерации вопроса и правильного ответа
const getQuestionAndAnswer = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

//  Собираем и экспортируем наш код игры
export default function brainEven() {
  runGame(getQuestionAndAnswer, gameDescription);
}
