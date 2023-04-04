export default function getRandomInt(min, max) {
  const newMin = Math.ceil(min);
  const newMmax = Math.floor(max);
  return Math.floor(Math.random() * (newMmax - newMin + 1)) + newMin;
}
