import App from 'src/types/app';

import { initObject, storeInitObject } from './initApp';

export default async function onTryAgain(app: App) {
  //reset the store
  app.store = { ...storeInitObject };
  Object.assign(app, { ...initObject });
  await app.sectionTransitionOut('#final-page', 750);
  app.mountQuestion(0);
}
