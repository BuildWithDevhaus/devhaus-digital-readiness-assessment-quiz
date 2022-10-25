export declare global {
  interface Window {
    analytics: any;
    Webflow: {
      require: (name: string) => any;
      push: (fn: () => void) => void;
    };
  }
}
