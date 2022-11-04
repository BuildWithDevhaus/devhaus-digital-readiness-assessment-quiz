export default function getVerdict(score: number, verdictOrSubVerdict = 'verdict') {
  if (score >= 100) {
    if (verdictOrSubVerdict === 'verdict') return `Digital Leader`;
    return `You are a Digital Leader`;
  }
  if (score > 49 && score <= 74) {
    if (verdictOrSubVerdict === 'verdict') return `Digital Performer`;
    return `You are a Digital Performer`;
  }
  if (verdictOrSubVerdict === 'verdict') return `Digital Starter`;
  return `You are a Digital Starter`;
}
