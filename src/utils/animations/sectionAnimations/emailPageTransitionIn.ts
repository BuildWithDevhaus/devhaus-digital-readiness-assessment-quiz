import anime from 'animejs';

export default function emailPageTransitionIn(elem: HTMLElement, duration = 1000) {
  //use animejs
  const title = elem.querySelector('#email-page-title') as HTMLElement;
  const subtitle = elem.querySelector('#email-page-subtitle') as HTMLElement;
  const emailPageForm = elem.querySelector('#email-page-form') as HTMLElement;
  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration,
  });

  tl.add({
    targets: [title, subtitle],
    opacity: [0, 1],
  }).add(
    {
      targets: [emailPageForm],
      opacity: [0, 1],
    },
    '-=500'
  );
  return tl.finished;
}
