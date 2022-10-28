import App from 'src/types/app';

import triggerSegmentIdentify from '$utils/Segment/triggerSegmentIdentify';

import wrapUp from './wrapUp';

export default async function onSubmit(app: App, event: SubmitEvent) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const webhookLink = 'https://api-eu.customer.io/v1/webhook/31cc017bf937bd6f';

  app.store.scorePercentage = Math.round(app.store.scorePercentage);
  app.finalVerdict = wrapUp(app.store.scorePercentage);

  const data = {
    email: formData.get('email') as string,
    scorePercentage: app.store.scorePercentage,
    finalVerdict: app.finalVerdict,
  };

  const button = document.getElementById('quiz-result-submit-button') as HTMLButtonElement;
  button.value = 'Submitting...';
  button.disabled = true;
  button.style.cursor = 'not-allowed';
  button.style.backgroundColor = '#e6e6e6';

  const response = await fetch(webhookLink, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  setTimeout(async () => {
    if (response.status === 200) {
      triggerSegmentIdentify({
        email: data.email,
      });
      await app.sectionTransitionOut('#email-page', 750);
      app.quizFinished();
    }
  }, 1000);
}
