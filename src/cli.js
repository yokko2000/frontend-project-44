#!/usr/bin/env node
import readlineSync from 'readline-sync';

let name;
export function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}
const ROUNDS_COUNT = 3;
export function runGame(getQuestionAndAnswer, gameDescription) {
  welcomeUser();
  console.log(gameDescription);
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
