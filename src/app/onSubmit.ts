import App from 'src/types/app';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';
import triggerSegmentIdentify from '$utils/Segment/triggerSegmentIdentify';

export default async function onSubmit(app: App, event: SubmitEvent) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const webhookLink = 'https://api-eu.customer.io/v1/webhook/31cc017bf937bd6f';

  const data = {
    email: formData.get('email') as string,
    scorePercentage: app.store.scorePercentage,
    finalVerdict: app.finalVerdict,
  };

  //console.log(data);

  const button = document.getElementById('quiz-result-submit-button') as HTMLButtonElement;
  button.value = 'Submitting...';
  button.disabled = true;
  button.style.cursor = 'not-allowed';
  button.style.backgroundColor = '#e6e6e6';

  // const response = await fetch(webhookLink, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });

  //console.log(response);
  setTimeout(async () => {
    if (
      //response.status === 200
      true
    ) {
      triggerSegmentEvent('Digital Readiness Assessment Quiz Completed', {
        score: app.store.scorePercentage,
        finalVerdict: app.finalVerdict,
      });
      triggerSegmentIdentify({
        email: data.email,
      });
      await app.sectionTransitionOut('#email-page', 750);

      app.quizFinished();
      triggerSegmentEvent();
    }
  }, 1000);
}
