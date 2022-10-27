import anime from 'animejs';

export default function finalPageTransitionIn(elem: HTMLElement, duration = 1000) {
  //use animejs
  const title = elem.querySelector('#final-page-title') as HTMLElement;
  const subtitles = Array.from(
    elem.querySelectorAll('#final-page-subtitle') as NodeListOf<HTMLElement>
  );
  const sharingButtons = elem.querySelector('.socials-container') as HTMLElement;
  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration,
  });

  tl.add(
    {
      targets: [title],
      opacity: [0, 1],
    },
    0
  )
    .add(
      {
        targets: [...subtitles],
        opacity: [0, 1],
      },
      '+=200'
    )
    .add(
      {
        targets: [sharingButtons],
        opacity: [0, 1],
      },
      '+=200'
    );

  return tl.finished;
}
