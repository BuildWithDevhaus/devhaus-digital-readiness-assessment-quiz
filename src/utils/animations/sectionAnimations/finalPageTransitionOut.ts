import anime from 'animejs';

export default function finalPageTransitionIn(elem: HTMLElement, duration = 1000) {
  //use animejs
  const memoji = elem.querySelector('#final-page-memoji') as HTMLElement;
  const title = elem.querySelector('#final-page-title') as HTMLElement;
  const subtitle = elem.querySelector('#final-page-subtitle') as HTMLElement;
  const subtitle2 = elem.querySelector('#final-page-subtitle-2') as HTMLElement;
  const loveThisCaption = elem.querySelector('#final-page-love-this') as HTMLElement;
  const sharingButtons = elem.querySelector('.socials-container') as HTMLElement;
  const finalPageTryAgainButton = elem.querySelector('#final-page-try-again-button') as HTMLElement;
  const tl = anime({
    targets: [
      title,
      memoji,
      subtitle,
      subtitle2,
      sharingButtons,
      finalPageTryAgainButton,
      loveThisCaption,
    ],
    opacity: [1, 0],
    easing: 'easeOutExpo',
    duration,
  });

  return tl.finished;
}
