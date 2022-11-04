import anime from 'animejs';
import App from 'src/types/app';

import {
  animeConfigDeselect,
  animeConfigSelect,
} from '$utils/animations/sectionAnimations/answerButtonAnimeConfigs';

export default function onCheckAnswer(event: MouseEvent, app: App, index: number) {
  const target = event.currentTarget as HTMLElement;
  target.style.transition = 'background-color 300ms ease-in-out';
  const answers = Array.from(
    document.querySelectorAll('.assess-quiz_answers-block') as NodeListOf<HTMLElement>
  ) as HTMLElement[];
  if (app.questions[app.store.i].type === 1) {
    if (app.store.answerSelected > -1) {
      // if an answer is already selected
      answers.forEach((elem) => elem.classList.remove('is-selected'));
      let config = animeConfigDeselect(answers[app.store.answerSelected as number]);
      anime(config);
      //if the answer is already selected, deselect it
      if (app.store.answerSelected === index) {
        app.store.answerSelected = -1;
      } else {
        //else, if the answer is not already selected, select it
        app.store.answerSelected = index;
        answers[index].classList.add('is-selected');
        config = animeConfigSelect(answers[index]);
        anime(config);
      }
    } else if (app.store.answerSelected === -1) {
      //if no answer is selected, select it
      const config = animeConfigSelect(target);
      anime(config);
      target.classList.add('is-selected');
      app.store.answerSelected = index;
    }
  } else if (app.questions[app.store.i].type === 2) {
    //select all that apply
    // for each correct answer, if it is selected, add 1 to the score
    if ((app.store.answerSelected as Array<number>).includes(index)) {
      //if the answer is already selected, deselect it
      const config = animeConfigDeselect(target);
      anime(config);
      target.classList.remove('is-selected');
      app.store.answerSelected = (app.store.answerSelected as Array<number>).filter(
        (i) => i !== index
      );
    } else {
      //else, if the answer is not already selected, select it
      const config = animeConfigSelect(target);
      anime(config);
      target.classList.add('is-selected');
      app.store.answerSelected = [...(app.store.answerSelected as Array<number>), index];
    }
  }
}
