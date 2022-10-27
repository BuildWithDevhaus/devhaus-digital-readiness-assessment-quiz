import anime from 'animejs';

export default function emailPageTransitionOut(elem: HTMLElement, duration = 1000) {
  //use animejs
  const title = elem.querySelector('#email-page-title') as HTMLElement;
  const subtitle = elem.querySelector('#email-page-subtitle') as HTMLElement;
  const emailPageForm = elem.querySelector('#email-page-form') as HTMLElement;
  const tl = anime({
    targets: [title, subtitle, emailPageForm],
    opacity: [1, 0],
    easing: 'easeInOutExpo',
    duration,
  });

  return tl.finished;
}
