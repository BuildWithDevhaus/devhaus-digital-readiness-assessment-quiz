import anime from 'animejs';

export default function quizPageQuestionTransitionIn(elem: HTMLElement, duration = 500) {
  //use animejs
  //const tagline = elem.querySelector('#quiz-page-tagline') as HTMLElement;
  const question = elem.querySelector('#quiz-page-question') as HTMLElement;
  const subQuestion = elem.querySelector('#quiz-page-subquestion') as HTMLElement | undefined;
  //const progressTitle = elem.querySelector('#quiz-page-progress-title') as HTMLElement;
  //const progressBar = elem.querySelector('#quiz-page-progress-bar') as HTMLElement;
  const answers = Array.from(
    elem.querySelectorAll('.assess-quiz_answers-block') as NodeListOf<HTMLElement>
  ) as HTMLElement[];

  const nextButton = elem.querySelector('#quiz-page-button') as HTMLElement;

  const tl = anime.timeline({
    easing: 'easeInOutExpo',
    duration,
  });

  tl.add({
    targets: [question, subQuestion],
    translateX: [-100, 0],
    opacity: [0, 1],
  }).add(
    {
      targets: [...answers, nextButton],
      translateX: [+100, 0],
      opacity: [0, 1],
    },
    0
  );

  return tl.finished;
}
