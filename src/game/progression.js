#!/usr/bin/env node

import { runGame } from '../cli.js';

//  здесь храниться описание игры
const gameDescription = 'What number is missing in the progression?';
// функция генерации вопроса и ответа
const getQuestionAndAnswer = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const firstNumber = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * progressionLength);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(firstNumber + i * step);
    }
  }
  const correctAnswer = firstNumber + hiddenIndex * step;
//  Возвращаем вопрос и правильный ответ
  return { question: progression.join(' '), correctAnswer: correctAnswer.toString() };
};

//  Собираем и экспортируем наш код игры
export default function brainProgression() {
  runGame(getQuestionAndAnswer, gameDescription);
}
