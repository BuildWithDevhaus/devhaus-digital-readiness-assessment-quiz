export default function wrapUp(score: number) {
  if (score > 74 && score <= 100) {
    return 'a Digital Leader. Well done!';
  }
  if (score > 49 && score <= 74) {
    return 'a Digital Performer. Well done!';
  }
  if (score > 24 && score <= 49) {
    return 'a Digital Literate';
  }
  return 'a Digital Starter';
}
