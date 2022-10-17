import type { AnimationItem } from 'lottie-web';

import animationLoaded from './animationLoaded';

// Return a promise that resolves to true once all animations are loaded
export default async function waitForAnimationsLoaded(animations: AnimationItem[]) {
  await Promise.all(animations.map(animationLoaded));
}
