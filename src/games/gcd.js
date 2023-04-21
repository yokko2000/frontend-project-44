#!/usr/bin/env node

import { runGame } from '../index.js';
import getRandomInt from '../utils.js';

function calculateGcd(a, b) {
  if (!b) {
    return a;
  }
  return calculateGcd(b, a % b);
}
const gameDescription = 'Find the greatest common divisor of given numbers.';
function getQuestionAndAnswer() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = calculateGcd(num1, num2).toString();
  return { question, correctAnswer };
}

export default function startBrainGcdGame() {
  runGame(getQuestionAndAnswer, gameDescription);
}
