export default function getRandomInt(min, max) {
  let min = Math.ceil(min);
  let max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
