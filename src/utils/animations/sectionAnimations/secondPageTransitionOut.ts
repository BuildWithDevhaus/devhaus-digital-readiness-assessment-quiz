import anime from 'animejs';

export default function secondPageTransitionOut(elem: HTMLElement, duration = 1000) {
  //use animejs
  const tagline = elem.querySelector('#second-page-tagline') as HTMLElement;
  const title = elem.querySelector('#second-page-title') as HTMLElement;
  const subtitle = elem.querySelector('#second-page-content') as HTMLElement;
  const button = elem.querySelector('.button-regular') as HTMLElement;

  const tl = anime.timeline({
    targets: [tagline, title, subtitle],
    easing: 'easeInOutExpo',
    translateX: [0, -100],
    opacity: [1, 0],
    duration,
  });

  tl.add(
    {
      targets: button,
      opacity: [1, 0],
      duration,
    },
    '-=500'
  );

  return tl.finished;
}
