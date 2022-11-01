import type { AnimationItem } from 'lottie-web';
import { reactive } from 'petite-vue';

import questions from './questions';

//contains things to init the petite-vue app
export const store = reactive({
  scorePercentage: 0,
  maxScorePercentage: 100,
  currentQuestion: '',
  progressBarWidth: 0,
  answerSelected: -1,
  i: -1,
  showHalfway: false,
  finalVerdict: 'Digital Starter',
});

export const initObject = {
  possibleMaxScore: 0,
  questions,
  finalVerdict: 'Digital Starter',
  animWrapper: null as HTMLElement | null,
  animConfetti: null as AnimationItem | null,
  showNotes: false,
  halfwayIsShown: false,
  currentQuestionIndex: 0,
  totalQuestions: 0,
  showEmailSection: false,
};
