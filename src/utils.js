export default function getRandomInt(min, max) {
  RandomMin = Math.ceil(min);
  RandomMax = Math.floor(max);
  return Math.floor(Math.random() * (RandomMax - RandomMin + 1)) + RandomMin;
}
