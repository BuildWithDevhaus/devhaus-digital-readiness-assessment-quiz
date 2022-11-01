import { AnimationItem } from 'lottie-web';

import loadAnimations from './loadAnimations';

export default async function loadAnimationById(
  wf: Window['Webflow'],
  animationId: string
): Promise<AnimationItem> {
  const anims = await loadAnimations(wf);
  return anims.find((a) => {
    return a.wrapper?.id === animationId;
  }) as AnimationItem;
}
