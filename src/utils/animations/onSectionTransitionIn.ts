import waitForElementLoaded from '$utils/waitForElementLoaded';

import emailPageTransitionIn from './sectionAnimations/emailPageTransitionIn';
import finalPageTransitionIn from './sectionAnimations/finalPageTransitionIn';
import firstPageTransitionIn from './sectionAnimations/firstPageTransitionIn';
import halfwayPageTransitionIn from './sectionAnimations/halfwayPageTransitionIn';
import quizPageFirstQuestionTransitionIn from './sectionAnimations/quizPageFirstQuestionTransitionIn';
import quizPageQuestionTransitionIn from './sectionAnimations/quizPageQuestionTransitionIn';
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
      return quizPageFirstQuestionTransitionIn(section, duration);
    case '#quiz-page':
      return quizPageQuestionTransitionIn(section, duration);
    case '#halfway-page':
      return halfwayPageTransitionIn(section, duration);
    case '#email-page':
      return emailPageTransitionIn(section, duration);
    default:
      return finalPageTransitionIn(section, duration);
  }
}
