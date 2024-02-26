import anime from 'animejs';

export default function secondPageTransitionIn(elem: HTMLElement, duration = 1000) {
  //use animejs
  const tagline = elem.querySelector('#second-page-tagline') as HTMLElement;
  const title = elem.querySelector('#second-page-title') as HTMLElement;
  const subtitle = elem.querySelector('#second-page-content') as HTMLElement;
  const button = elem.querySelector('#second-page-button') as HTMLElement;

  const tl = anime({
    targets: [tagline, title, subtitle, button],
    opacity: [0, 1],
  });

  return tl.finished;
}
