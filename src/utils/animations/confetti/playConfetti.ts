import waitForElementLoaded from '$utils/waitForElementLoaded';

import loadAnimationById from '../loadAnimationById';

export default async function playConfetti(wf: Window['Webflow']) {
  const confetti = await loadAnimationById(wf, 'confetti-lottie-wrapper');
  const confettiWrapper = await waitForElementLoaded('.assess-quiz_lottie-confetti');
  confettiWrapper.style.display = 'block';
  confettiWrapper.style.zIndex = '0';
  confetti.goToAndPlay(0);
  setTimeout(() => {
    confetti.pause();
    confettiWrapper.style.display = 'none';
  }, confetti.getDuration() * 1000);
}
