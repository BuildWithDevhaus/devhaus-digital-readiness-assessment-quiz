import { AnimationItem } from 'lottie-web';

// Return a promise that resolves to true once animation is loaded
export default async function animationLoaded(animation: AnimationItem): Promise<boolean> {
  if (animation.isLoaded) {
    return true;
  }

  return new Promise((resolve) => {
    (animation as unknown as HTMLElement).addEventListener('DOMLoaded', () => {
      resolve(true);
    });
  });
}
