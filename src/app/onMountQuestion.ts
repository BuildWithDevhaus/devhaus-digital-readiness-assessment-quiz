import type App from 'src/types/app';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';
import halfwayPageTransitionIn from '$utils/animations/sectionAnimations/halfwayPageTransitionIn';
import waitForElementLoaded from '$utils/waitForElementLoaded';

export default async function onMountQuestion(app: App, index: number) {
  app.currentQuestionIndex = index;
  app.store.currentQuestion = `Question ${index + 1} of ${app.totalQuestions}`;
  if (index >= app.totalQuestions) {
    app.showEmailSection = true;
    triggerSegmentEvent('Digital Readiness Assessment Quiz Email Section Viewed', {});
    //app.quizFinished();
  } else if (index + 1 / 2 >= app.totalQuestions / 2 && app.halfwayIsShown === false) {
    //this is halfway
    //put transition before this
    app.showHalfway = true;
    const halfwayPage = await waitForElementLoaded('#halfway-page');
    await halfwayPageTransitionIn(halfwayPage, 1000);
    await app.setProgressBar();
  }
  app.store.i = index;
  await app.setProgressBar();
}
