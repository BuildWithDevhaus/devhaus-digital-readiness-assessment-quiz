export default function wrapUp(score: number) {
  if (score > 74 && score <= 100) {
    return `Digital Leader`;
  }
  if (score > 49 && score <= 74) {
    return `Digital Performer`;
  }
  if (score > 24 && score <= 49) {
    return `Digital Literate`;
  }
  return `Digital Starter`;
}
