declare module 'lottie-web' {
  export interface AnimationItem {
    wrapper: HTMLElement;
    goToAndPlay: (frame: number) => void;
    getDuration: () => number;
    pause: () => void;
    isLoaded: boolean;
    totalFrames: number;
    frameRate: number;
  }
  export interface LottiePlayer {
    getRegisteredAnimations: () => AnimationItem[];
  }
}
