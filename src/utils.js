export default function getRandomInt(min, max) {
  let newMin = Math.ceil(min);
  let newMmax = Math.floor(max);
  return Math.floor(Math.random() * (newMmax - newMin + 1)) + newMin;
}
