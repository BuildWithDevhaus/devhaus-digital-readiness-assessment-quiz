import App from 'src/types/app';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';
import playConfetti from '$utils/animations/confetti/playConfetti';
import waitForElementLoaded from '$utils/waitForElementLoaded';

export default async function onQuizFinished(app: App, wf: Window['Webflow']) {
  triggerSegmentEvent('Digital Readiness Assessment Quiz Completed', {
    quiz_score: app.store.scorePercentage,
  });
  app.showEmailSection = false;
  // console.log(lowerCaseVerdict);
  const memoji = (await waitForElementLoaded(`#category-${app.finalCategory}`)) as HTMLElement;
  memoji.style.display = 'block';

  const social_platforms = [
    'facebook',
    'reddit',
    'linkedin',
    'twitter',
    'whatsapp',
    'telegram',
    'email',
  ];

  social_platforms.forEach((platform) => {
    const shareButton = document.querySelector(`#${platform}-button`);
    if (shareButton) {
      shareButton.addEventListener('click', () => {
        triggerSegmentEvent('Digital Readiness Assessment Quiz Share Button Clicked', {
          social_platform: platform,
        });
      });
    }
  });
  await app.sectionTransitionIn('#final-page', 1000);
  await playConfetti(wf);
}
