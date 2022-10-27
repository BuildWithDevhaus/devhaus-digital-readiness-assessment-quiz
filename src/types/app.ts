import { AnimationItem } from 'lottie-web';

import Question from './question';

export default interface App {
  showNotes: boolean;
  showHalfway: boolean;
  halfwayIsShown: boolean;
  finalVerdict: string;
  currentQuestionIndex: number;
  totalQuestions: number;
  possibleMaxScore: number;
  store: {
    scorePercentage: number;
    progressBarWidth: number;
    currentQuestion: string;
    i: number;
  };
  animWrapper: HTMLElement;
  animConfetti: AnimationItem;
  questions: Question[];
  showEmailSection: boolean;
  sectionTransitionIn(selector: string, duration: number): Promise<void>;
  sectionTransitionOut(selector: string, duration: number): Promise<void>;
  startQuiz: () => void;
  reallyStartQuiz: () => void;
  quizFinished: () => void;
  setProgressBar: () => void;
  mountQuestion: (index: number) => void;
  closeHalfway: () => void;
  showConfetti: () => void;
  checkAnswer: (_: Event, index: number) => void;
  mounted: () => void;
  submitEmail: (e: Event) => void;
  //this type is extendable
}
