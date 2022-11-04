import type { AnimationItem } from 'lottie-web';
import { reactive } from 'petite-vue';

import questions from './questions';

//contains things to init the petite-vue app
const reducedQuestions = questions.filter((_, index) => index <= 2); // use this only for testing

export const initObject = {
  possibleMaxScore: 0,
  questions: reducedQuestions,
  finalVerdict: 'Digital Starter',
  animWrapper: null as HTMLElement | null,
  animConfetti: null as AnimationItem | null,
  showNotes: false,
  halfwayIsShown: false,
  currentQuestionIndex: 0,
  totalQuestions: 0,
  showEmailSection: false,
};

export const storeInitObject = {
  isMobile: window.innerWidth < 768,
  scorePercentage: 0,
  maxScorePercentage: 100,
  currentQuestion: '',
  progressBarWidth: 0,
  answerSelected: initObject.questions[0].type === 2 ? ([] as number[]) : -1,
  i: -1,
  showHalfway: false,
  finalVerdict: 'Digital Starter',
};

export const store = reactive(storeInitObject);
