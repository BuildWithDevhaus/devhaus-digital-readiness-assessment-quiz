import waitForElementLoaded from '$utils/waitForElementLoaded';

import emailPageTransitionOut from './sectionAnimations/emailPageTransitionOut';
import finalPageTransitionOut from './sectionAnimations/finalPageTransitionOut';
import firstPageTransitionOut from './sectionAnimations/firstPageTransitionOut';
import halfwayPageTransitionOut from './sectionAnimations/halfwayPageTransitionOut';
import quizPageLastQuestionTransitionOut from './sectionAnimations/quizPageLastQuestionTransitionOut';
import quizPageQuestionTransitionOut from './sectionAnimations/quizPageQuestionTransitionOut';
import secondPageTransitionOut from './sectionAnimations/secondPageTransitionOut';

export default async function onSectionTransitionOut(selector: string, duration: number) {
  const section = await waitForElementLoaded(
    selector === '#quiz-page-last-question' ? '#quiz-page' : selector
  );
  switch (selector) {
    case '#first-page':
      return firstPageTransitionOut(section, duration);
    case '#second-page':
      return secondPageTransitionOut(section, duration);
    case '#quiz-page':
      return quizPageQuestionTransitionOut(section, duration);
    case '#halfway-page':
      return halfwayPageTransitionOut(section, duration);
    case '#quiz-page-last-question': // this is the last question
      return quizPageLastQuestionTransitionOut(section, duration);
    case '#email-page':
      return emailPageTransitionOut(section, duration);
    case '#final-page':
      return finalPageTransitionOut(section, duration);
  }
}
