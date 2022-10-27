import waitForElementLoaded from '$utils/waitForElementLoaded';

import QuizPageFirstQuestionTransitionIn from './sectionAnimations/QuizPageFirstQuestionTransitionIn';
import QuizPageQuestionTransitionIn from './sectionAnimations/QuizPageQuestionTransitionIn';
import firstPageTransitionIn from './sectionAnimations/firstPageTransitionIn';
import secondPageTransitionIn from './sectionAnimations/secondPageTransitionIn';

export default async function onSectionTransitionIn(selector: string, duration: number) {
  const section = await waitForElementLoaded(
    selector === '#quiz-page-question-0' ? '#quiz-page' : selector
  );
  switch (selector) {
    case '#first-page':
      return firstPageTransitionIn(section, duration);
    case '#second-page':
      return secondPageTransitionIn(section, duration);
    case '#quiz-page-question-0':
      return QuizPageFirstQuestionTransitionIn(section, duration);
    case '#quiz-page':
      return QuizPageQuestionTransitionIn(section, duration);
  }
}
