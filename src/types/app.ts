import { AnimationItem } from 'lottie-web';

import Question from './question';

export default interface App {
  store: {
    answerSelected: number;
    scorePercentage: number;
    progressBarWidth: number;
    currentQuestion: string;
    i: number;
    showHalfway: boolean;
  };
  showNotes?: boolean;
  showHalfway?: boolean;
  halfwayIsShown?: boolean;
  finalVerdict?: string;
  currentQuestionIndex?: number;
  totalQuestions: number;
  possibleMaxScore: number;
  animWrapper?: HTMLElement;
  animConfetti?: AnimationItem;
  questions: Question[];
  showEmailSection?: boolean;
  sectionTransitionIn(selector?: string, duration?: number): Promise<void>;
  sectionTransitionOut(selector?: string, duration?: number): Promise<void>;
  startQuiz?: () => void;
  reallyStartQuiz?: () => void;
  quizFinished: () => void;
  setProgressBar: () => Promise<void>;
  mountQuestion: (index?: number) => void;
  closeHalfway?: () => void;
  showConfetti?: () => void;
  checkAnswer?: (event?: MouseEvent, index?: number) => void;
  mounted?: () => void;
  submitEmail?: (e?: Event) => void;
  nextQuestion?: (event?: MouseEvent) => void;
  //this type is extendable
}
