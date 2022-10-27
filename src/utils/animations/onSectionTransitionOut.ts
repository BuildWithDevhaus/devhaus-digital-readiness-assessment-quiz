import waitForElementLoaded from '$utils/waitForElementLoaded';

import QuizPageQuestionTransitionOut from './sectionAnimations/QuizPageQuestionTransitionOut';
import firstPageTransitionOut from './sectionAnimations/firstPageTransitionOut';
import secondPageTransitionOut from './sectionAnimations/secondPageTransitionOut';

export default async function onSectionTransitionOut(selector: string, duration: number) {
  const section = await waitForElementLoaded(selector);
  switch (selector) {
    case '#first-page':
      return firstPageTransitionOut(section, duration);
    case '#second-page':
      return secondPageTransitionOut(section, duration);
    case '#quiz-page':
      return QuizPageQuestionTransitionOut(section, duration);
  }
}
