import App from 'src/types/app';

import waitForElementLoaded from '$utils/waitForElementLoaded';

export default async function onSetProgressBar(app: App, index: number) {
  //const progressBarBottom = document.querySelector('.assess-quiz_progress-bar');
  const progressBarBottom = await waitForElementLoaded('.assess-quiz_progress-bar');
  //get progress bar width
  const baseProgressBarWidth = progressBarBottom.clientWidth ?? 0; //100%
  //console.log(progressBarBottom);
  const percentage = (app.store.i + 1) / app.totalQuestions;
  // console.log(percentage);
  app.store.progressBarWidth = baseProgressBarWidth * percentage;
  app.store.currentQuestion = `Question ${index + 1} of ${app.totalQuestions}`;
}
