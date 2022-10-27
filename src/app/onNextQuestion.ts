import App from 'src/types/app';

export default function onNextQuestion(e: MouseEvent, app: App, index: number) {
  if (index === -1) {
    return;
  }

  if (index === app.questions[app.store.i].correctAnswer) {
    app.store.scorePercentage += (1 / app.possibleMaxScore) * 100;
  }

  app.mountQuestion(app.store.i + 1);
}
