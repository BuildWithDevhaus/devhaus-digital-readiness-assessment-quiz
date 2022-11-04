import App from 'src/types/app';

import triggerSegmentIdentify from '$utils/Segment/triggerSegmentIdentify';
import { isDevMode } from '$utils/isDevMode';

import countScoreAndVerdict from './countScoreAndVerdict';

export default async function onSubmit(app: App, event: SubmitEvent) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const webhookLink = 'https://api-eu.customer.io/v1/webhook/31cc017bf937bd6f';

  //-------- score counting here --------//
  countScoreAndVerdict(app);
  //-------- score counting done --------//

  const data = {
    email: formData.get('email') as string,
    scorePercentage: app.store.scorePercentage,
    finalCategory: app.finalCategory,
    finalVerdict: app.finalVerdict,
    note: `Score between 0 and 62; category = 1. between 63 and 99; category = 2, and 100 is category 3.`,
  };

  const button = document.getElementById('quiz-result-submit-button') as HTMLButtonElement;
  button.value = 'Submitting...';
  button.disabled = true;
  button.classList.add('is-disabled');
  button.style.cursor = 'not-allowed';

  let response: Response;

  if (!isDevMode()) {
    response = await fetch(webhookLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  // if (isDevMode()) {
  //   console.log('DEV MODE: not sending data to webhook');
  //   console.log(data);
  // }
  setTimeout(async () => {
    if (response?.status === 200 || isDevMode()) {
      //if (isDevMode()) console.log(data);
      //app.store.finalVerdict = app.finalVerdict;
      triggerSegmentIdentify({
        email: data.email,
      });
      button.classList.remove('is-disabled');

      await app.sectionTransitionOut('#email-page', 750);
      app.quizFinished();
    }
  }, 1000);
}
