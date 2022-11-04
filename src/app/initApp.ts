import type { AnimationItem } from 'lottie-web';
import { reactive } from 'petite-vue';
import Question from 'src/types/question';

import { isDevMode } from '$utils/isDevMode';

import questions from './questions';

//contains things to init the petite-vue app
const reducedQuestions =
  isDevMode() === true ? questions.filter((_, index) => index <= 2) : questions;

function getPossibleMaxScore(questionArray: Array<Question>) {
  let currentPoints = 0;
  questionArray.forEach((q) => {
    if (q.type === 1) currentPoints += 1;
    if (q.type === 2) currentPoints += (q.correctAnswer as Array<number>).length;
  });
  return currentPoints;
}

export const initObject = {
  possibleMaxScore: getPossibleMaxScore(reducedQuestions),
  questions: reducedQuestions,
  finalVerdict: 'Digital Starter',
  animWrapper: null as HTMLElement | null,
  animConfetti: null as AnimationItem | null,
  showNotes: false,
  halfwayIsShown: false,
  currentQuestionIndex: 0,
  totalQuestions: reducedQuestions.length,
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
};

export const store = reactive(storeInitObject);
