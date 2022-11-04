import App from 'src/types/app';

export default function countScoreAndVerdict(app: App) {
  app.store.scorePercentage = Math.round(app.store.scorePercentage);
  if (app.store.scorePercentage >= 100) {
    app.finalVerdict = `You are an absolute unit! Perfect score!`;
    app.finalSubVerdict = `Your score is ${app.store.scorePercentage} out of 100. Tell your friends that you're the best and also let them try!`;
    app.finalCategory = 3;
  } else if (app.store.scorePercentage > 62 && app.store.scorePercentage < 100) {
    app.finalVerdict = `Not too bad, but you can do better!`;
    app.finalSubVerdict = `Your score is ${app.store.scorePercentage} out of 100. You can try again to improve your score.`;
    app.finalCategory = 2;
  } else {
    app.finalVerdict = `Oh no! There's so much for you to learn!`;
    app.finalSubVerdict = `You've failed the Assessment and your score is ${app.store.scorePercentage} out of 100. You can try again, though.`;
    app.finalCategory = 1;
  }
}
