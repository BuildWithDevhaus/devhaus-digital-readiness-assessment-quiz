export default function wrapUp(score: number) {
  if (score >= 0 && score <= 60) {
    return 'a Noob';
  }
  if (score > 60 && score <= 80) {
    return 'a decent Marketer';
  }
  if (score > 80) {
    return 'a Pro Marketer';
  }
}
