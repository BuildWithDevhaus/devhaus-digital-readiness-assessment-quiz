import type App from 'src/types/app';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';

export default async function onMountQuestion(app: App, index: number) {
  app.currentQuestionIndex = index;
  app.store.currentQuestion = `Question ${index + 1} of ${app.totalQuestions}`;
  if (index >= app.totalQuestions) {
    app.showEmailSection = true;
    triggerSegmentEvent('Digital Readiness Assessment Quiz Email Section Viewed', {});
    //app.quizFinished();
  } else if (index + 1 / 2 >= app.totalQuestions / 2 && app.halfwayIsShown === false) {
    app.showHalfway = true;
    await app.setProgressBar();
    //app.showConfetti();
    //showHalfway && !halfwayIsShown
  }
  app.store.i = index;
  await app.setProgressBar();
}
