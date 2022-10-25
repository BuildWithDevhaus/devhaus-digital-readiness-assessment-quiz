import App from 'src/types/app';

export default function onSetProgressBar(app: App) {
  const progressBarBottom = document.querySelector('.progress-bar-bottom');
  //get progress bar width
  const baseProgressBarWidth = progressBarBottom?.clientWidth ?? 0; //100%
  const percentage =
    app.currentQuestionIndex <= 0 ? 0 : app.currentQuestionIndex / app.totalQuestions;
  app.store.progressBarWidth = baseProgressBarWidth * percentage;
}
