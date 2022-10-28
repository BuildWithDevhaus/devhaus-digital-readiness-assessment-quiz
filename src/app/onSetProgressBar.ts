import App from 'src/types/app';

import waitForElementLoaded from '$utils/waitForElementLoaded';

export default async function onSetProgressBar(app: App, index: number) {
  const progressBarBottom = await waitForElementLoaded('.assess-quiz_progress-bar');
  const baseProgressBarWidth = progressBarBottom.clientWidth ?? 0; //100%
  const percentage = (app.store.i + 1) / app.totalQuestions;
  app.store.progressBarWidth = baseProgressBarWidth * percentage;
  app.store.currentQuestion = `Question ${index + 1} of ${app.totalQuestions}`;
}
