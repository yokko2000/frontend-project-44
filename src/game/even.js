#!/usr/bin/env node

import { runGame } from '../cli.js';
import getRandomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default function brainEven() {
  runGame(getQuestionAndAnswer, gameDescription);
}
