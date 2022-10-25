import App from 'src/types/app';

export default function onCheckAnswer(app: App, index: number) {
  if (index === app.questions[app.store.i].correctAnswer) {
    app.store.scorePercentage += (1 / app.possibleMaxScore) * 100;
  }
  setTimeout(() => {
    app.mountQuestion(app.store.i + 1);
  }, 300);
}
