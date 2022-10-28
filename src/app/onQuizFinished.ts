import App from 'src/types/app';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';

export default async function onQuizFinished(app: App) {
  triggerSegmentEvent('Digital Readiness Assessment Quiz Completed', {
    quiz_score: app.store.scorePercentage,
    quiz_verdict: app.finalVerdict,
  });
  app.showEmailSection = false;
  await app.sectionTransitionIn('#final-page', 1000);
}
