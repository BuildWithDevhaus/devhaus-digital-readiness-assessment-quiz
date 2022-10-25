import type App from 'src/types/app';

export default function onMountQuestion(app: App, index: number) {
  app.currentQuestionIndex = index;
  app.setProgressBar();
  app.store.currentQuestion = `Question ${index + 1} of ${app.totalQuestions}`;
  if (index >= app.totalQuestions) {
    app.quizFinished();
  } else if (index + 1 / 2 >= app.totalQuestions / 2 && app.halfwayIsShown === false) {
    app.showHalfway = true;
    app.showConfetti();
  }
  app.store.i = index;
}
