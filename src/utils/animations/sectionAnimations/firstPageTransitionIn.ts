import anime from 'animejs';

export default function firstPageTransitionIn(elem: HTMLElement, duration = 1000) {
  //use animejs
  const icon = elem.querySelector('#first-page-icon') as HTMLElement;
  const title = elem.querySelector('#first-page-title') as HTMLElement;
  const subtitle = elem.querySelector('#first-page-subtitle') as HTMLElement;
  const button = elem.querySelector('#first-page-button') as HTMLElement;

  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration,
    delay: anime.stagger(100),
  });
  tl.add({
    targets: icon,
    translateX: [-100, 0],
    opacity: [0, 1],
  })
    .add(
      {
        targets: title,
        translateX: [-100, 0],
        opacity: [0, 1],
      },
      '-=500'
    )
    .add(
      {
        targets: subtitle,
        translateX: [-100, 0],
        opacity: [0, 1],
      },
      '-=500'
    )
    .add(
      {
        targets: button,
        translateX: [-30, 0],
        opacity: [0, 1],
      },
      '-=500'
    );

  return tl.finished;

  // anime({
  //   targets: elem,
  //   opacity: [0, 1],
  //   duration: 1000,
  //   easing: 'easeInOutQuad',
  //   complete: () => {
  //     elem.style.opacity = '1';
  //   },
  // });
}
