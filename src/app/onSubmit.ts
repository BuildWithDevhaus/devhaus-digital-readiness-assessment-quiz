import App from 'src/types/app';

import triggerSegmentIdentify from '$utils/Segment/triggerSegmentIdentify';
import { isDevMode } from '$utils/isDevMode';

import countScoreAndVerdict from './countScoreAndVerdict';

export default async function onSubmit(app: App, event: SubmitEvent) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const webhookLink = 'https://api.customer.io/v1/webhook/08e738f87d98f89a';

  //-------- score counting here --------//
  countScoreAndVerdict(app);
  //-------- score counting done --------//

  const data = {
    email: formData.get('email') as string,
    scorePercentage: app.store.scorePercentage,
    finalCategory: app.finalCategory,
    finalVerdict: app.finalVerdict,
    note: `Score between 0 and 62 is finalCategory = 1; between 63 and 99 is finalCategory = 2; and 100 is finalCategory = 3.`,
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
