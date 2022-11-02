import { AnimationItem, LottiePlayer } from 'lottie-web';

import waitForAnimationsLoaded from './waitForAnimationsLoaded';

export default async function loadAnimations(wf: Window['Webflow']): Promise<AnimationItem[]> {
  const lottie = wf?.require?.('lottie');
  const l = lottie.lottie as LottiePlayer;
  const anims = l.getRegisteredAnimations() as AnimationItem[];
  await waitForAnimationsLoaded(anims);
  return anims;
}
