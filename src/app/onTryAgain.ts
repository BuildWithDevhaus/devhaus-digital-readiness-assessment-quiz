import App from 'src/types/app';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';

import { initObject } from './initApp';

export default async function onTryAgain(app: App) {
  //reset the store
  //app.store = reactive({ ...storeInitObject });
  await app.sectionTransitionOut('#final-page', 750);
  app.store.scorePercentage = 0;
  Object.assign(app, { ...initObject });
  triggerSegmentEvent('Digital Readiness Assessment Quiz Try Again Button Clicked', {});
  app.mountQuestion(0);
  await app.setProgressBar();
}
