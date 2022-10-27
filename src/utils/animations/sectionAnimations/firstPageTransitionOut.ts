import anime from 'animejs';

export default function firstPageTransitionOut(elem: HTMLElement, duration = 500) {
  //use animejs
  const icon = elem.querySelector('#first-page-icon') as HTMLElement;
  const title = elem.querySelector('#first-page-title') as HTMLElement;
  const subtitle = elem.querySelector('#first-page-subtitle') as HTMLElement;
  const button = elem.querySelector('.button-regular') as HTMLElement;
  const tl = anime({
    targets: [icon, title, subtitle, button],
    translateX: [0, -100],
    opacity: [1, 0],
    easing: 'easeOutExpo',
    duration,
  });
  return tl.finished;
}
