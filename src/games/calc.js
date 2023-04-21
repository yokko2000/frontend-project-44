#!/usr/bin/env node

import { runGame } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomInt(0, operators.length - 1);
  return operators[operatorIndex];
};

const calculateExpression = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const operator = getRandomOperator();

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculateExpression(a, b, operator));

  return { question, correctAnswer };
};

export default function startBrainCalcGame() {
  runGame(getQuestionAndAnswer, gameDescription);
}
