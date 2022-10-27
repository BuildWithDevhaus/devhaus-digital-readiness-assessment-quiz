import App from 'src/types/app';

import waitForElementLoaded from '$utils/waitForElementLoaded';

export default async function onSetProgressBar(app: App) {
  //const progressBarBottom = document.querySelector('.assess-quiz_progress-bar');
  const progressBarBottom = await waitForElementLoaded('.assess-quiz_progress-bar');
  //get progress bar width
  const baseProgressBarWidth = progressBarBottom.clientWidth ?? 0; //100%

  const percentage = (app.store.i + 1) / app.totalQuestions;
  app.store.progressBarWidth = baseProgressBarWidth * percentage;
}
