import anime from 'animejs';

export default function secondPageTransitionIn(elem: HTMLElement, duration = 1000) {
  //use animejs
  const tagline = elem.querySelector('#second-page-tagline') as HTMLElement;
  const title = elem.querySelector('#second-page-title') as HTMLElement;
  const subtitle = elem.querySelector('#second-page-content') as HTMLElement;
  const button = elem.querySelector('.button-regular') as HTMLElement;

  const tl = anime.timeline({
    easing: 'easeInOutExpo',
    duration,
  });
  tl.add(
    {
      targets: [tagline, title, subtitle],
      translateX: [-100, 0],
      opacity: [0, 1],
    },
    '-=500'
  ).add(
    {
      targets: button,
      opacity: [0, 1],
      duration,
    },
    '-=500'
  );

  return tl.finished;
}
