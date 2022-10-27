import anime from 'animejs';

export default function halfwayPageTransitionOut(elem: HTMLElement, duration = 1000) {
  //use animejs
  const section = elem.querySelector('#halfway-page-section') as HTMLElement;
  const progressBarSection = elem.querySelector('.assess-quiz_progress') as HTMLElement;

  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration,
  });

  tl.add({
    targets: section,
    opacity: [1, 0],
  }).add(
    {
      targets: progressBarSection,
      opacity: [1, 0],
    },
    0
  );
  return tl.finished;
}
