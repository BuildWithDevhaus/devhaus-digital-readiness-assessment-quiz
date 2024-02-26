import anime from 'animejs';

export default function secondPageTransitionOut(elem: HTMLElement, duration: number) {
  //use animejs
  const tagline = elem.querySelector('#second-page-tagline') as HTMLElement;
  const title = elem.querySelector('#second-page-title') as HTMLElement;
  const subtitle = elem.querySelector('#second-page-content') as HTMLElement;
  const button = elem.querySelector('#second-page-button') as HTMLElement;

  const tl = anime({
    targets: [tagline, title, subtitle, button],
    easing: 'easeInOutExpo',
    opacity: [1, 0],
    duration,
  });

  return tl.finished;
}
