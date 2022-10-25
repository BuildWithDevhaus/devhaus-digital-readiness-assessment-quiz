import { AnimationItem, LottiePlayer } from 'lottie-web';
import type App from 'src/types/app';

import waitForAnimationsLoaded from '$utils/animations/waitForAnimationsLoaded';

export default async function onMounted(app: App, wf: Window['Webflow']) {
  const loadingSection = document.querySelector('.loading-section') as HTMLElement;
  const lottieee = wf?.require?.('lottie');
  const l = lottieee.lottie as LottiePlayer;
  const anims = l.getRegisteredAnimations();
  await waitForAnimationsLoaded(anims);
  const anim = anims.find((a) => {
    return a.wrapper?.id === 'confetti';
  }) as AnimationItem;
  anim.pause();
  app.animWrapper = anim.wrapper as HTMLElement;
  app.animConfetti = anim as AnimationItem;
  let currentPoints = 0;
  app.questions.forEach((q) => {
    if (q.type === 1 || q.type === 2) currentPoints += 1;
    if (q.type === 3) currentPoints += 4;
    if (q.type === 4) currentPoints += 2;
  });
  app.possibleMaxScore = currentPoints;
  app.totalQuestions = app.questions.length;
  app.mountQuestion(-1);
  //on resize window, resize the progress bar
  window.addEventListener('resize', () => {
    app.setProgressBar();
  });

  setTimeout(() => {
    loadingSection.style.opacity = '0';
  }, 2000);

  setTimeout(() => {
    loadingSection.style.display = 'none';
  }, 2200);
}
