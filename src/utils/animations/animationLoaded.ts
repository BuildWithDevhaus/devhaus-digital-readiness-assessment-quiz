import type { AnimationItem } from 'lottie-web';

// Return a promise that resolves to true once animation is loaded
export default async function animationLoaded(animation: AnimationItem) {
  if (animation.isLoaded) {
    return true;
  }
  return new Promise((resolve) => {
    animation.addEventListener('DOMLoaded', () => {
      resolve(true);
    });
  });
}
