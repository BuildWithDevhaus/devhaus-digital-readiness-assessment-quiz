export const animeConfigSelect = (target: HTMLElement) => ({
  targets: target,
  width: ['100%', '99%'],
  translateX: ['0%', '-1%'],
  easing: 'easeInOutExpo',
  duration: 300,
});

export const animeConfigDeselect = (target: HTMLElement) => ({
  targets: target,
  width: ['99%', '100%'],
  translateX: ['-1%', '0%'],
  easing: 'easeInOutExpo',
  duration: 300,
});
