declare module 'lottie-web' {
  export interface AnimationItem {
    wrapper: HTMLElement;
    goToAndPlay: (frame: number) => void;
    getDuration: () => number;
    pause: () => void;
  }
  export interface LottiePlayer {
    getRegisteredAnimations: () => AnimationItem[];
  }
}
