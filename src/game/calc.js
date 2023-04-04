#!/usr/bin/env node

import {
  runGame
} from '../cli.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];

  let question;
  let correctAnswer;
  switch (operator) {
    case '+':
      question = `${a} + ${b}`;
      correctAnswer = String(a + b);
      break;
    case '-':
      question = `${a} - ${b}`;
      correctAnswer = String(a - b);
      break;
    case '*':
      question = `${a} * ${b}`;
      correctAnswer = String(a * b);
      break;
    default:
      break;
  }

  return {
    question,
    correctAnswer
  };
};

export default function brainCalc() {
  runGame(getQuestionAndAnswer, gameDescription);
}