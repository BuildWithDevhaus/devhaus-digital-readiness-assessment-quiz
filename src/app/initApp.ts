import type { AnimationItem } from 'lottie-web';
import { reactive } from 'petite-vue';

//contains things to init the petite-vue app
export const store = reactive({
  scorePercentage: 0,
  maxScorePercentage: 100,
  i: 0,
});

export const initObject = {
  possibleMaxScore: 0,
  questions: [
    {
      type: 1,
      correctAnswer: 2,
      question: 'What is a CDP?',
      answers: [
        'Customer Date Platform',
        'Critical Date Platform',
        'Customer Data Platform',
        'Cancelled Data Platform',
      ],
    },
    {
      type: 1,
      correctAnswer: 0,
      question: 'What is a CRM?',
      answers: [
        'Customer Relationship Platform',
        'Critical Race Platform',
        'Customer Rate Platform',
        'Cancelled Readiness Platform',
      ],
    },
  ],
  finalVerdict: 'CDP expert',
  animWrapper: null as HTMLElement | null,
  animConfetti: null as AnimationItem | null,
};
