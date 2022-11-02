export default interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
  subQuestion?: string;
  type: number;
}
