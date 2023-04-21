import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

const ROUNDS_COUNT = 3;
export default function runGame(getQuestionAndAnswer, gameDescription) {
  const { name } = welcomeUser();
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
