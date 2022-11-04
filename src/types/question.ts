export default interface Question {
  question: string;
  answers: string[];
  correctAnswer: number | Array<number>;
  subQuestion?: string;
  type: number;
}
