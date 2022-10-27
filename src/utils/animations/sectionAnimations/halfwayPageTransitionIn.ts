import anime from 'animejs';

export default function halfwayPageTransitionIn(elem: HTMLElement, duration = 1000) {
  //use animejs
  const section = elem.querySelector('#halfway-page-section') as HTMLElement;
  const progressBarSection = elem.querySelector('.assess-quiz_progress') as HTMLElement;

  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration,
  });

  tl.add({
    targets: section,
    opacity: [0, 1],
  }).add(
    {
      targets: progressBarSection,
      opacity: [0, 1],
    },
    '-=500'
  );
  return tl.finished;
}
