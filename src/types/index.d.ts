export {};

declare global {
  interface Window {
    analytics: {
      track: (event: string, properties: any) => void;
      identify: (userId: string, traits: any) => void;
    };
    Webflow: {
      push: (fn: () => void) => void;
      require: (module: string) => any;
    };
  }
}
