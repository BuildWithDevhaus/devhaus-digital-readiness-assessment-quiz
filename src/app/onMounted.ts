//import { AnimationItem, LottiePlayer } from 'lottie-web';
import { AnimationItem } from 'lottie-web';
import { LottiePlayer } from 'lottie-web';
import type App from 'src/types/app';

import waitForAnimationsLoaded from '$utils/animations/waitForAnimationsLoaded';

export default async function onMounted(app: App, wf: Window['Webflow']) {
  //console.log(app.store.i);
  const loadingSection = document.getElementById('loading-screen') as HTMLElement;
  //console.log(loadingSection);
  const lottieee = wf?.require?.('lottie');
  const l = lottieee.lottie as LottiePlayer;
  const anims = l.getRegisteredAnimations() as AnimationItem[];
  await waitForAnimationsLoaded(anims);
  const anim = anims.find((a) => {
    return a.wrapper?.id === 'loading-lottie-wrapper';
  }) as AnimationItem;
  // console.log(anim);
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
  const baseDelay = 5005.004801146985;
  setTimeout(() => {
    loadingSection.style.opacity = '0';
  }, baseDelay);
  setTimeout(() => {
    loadingSection.style.display = 'none';
  }, baseDelay + 300);
}
