import type { AnimationItem, LottiePlayer } from 'lottie-web';
import { createApp } from 'petite-vue';

import waitForAnimationsLoaded from '$utils/animations/waitForAnimationsLoaded';

import { initObject, store } from './app/initApp';

const wf = window.Webflow ?? [];
wf.push(() => {
  const app = {
    // exposed to all expressions
    store,
    ...initObject,
    async mounted() {
      const { lottie } = wf.require('lottie');
      const l = lottie as LottiePlayer;
      const anims = l.getRegisteredAnimations();
      await waitForAnimationsLoaded(anims);
      const anim = anims.find((a) => {
        return a.wrapper?.id === 'confetti';
      }) as AnimationItem;
      anim.pause();
      this.animWrapper = anim.wrapper;
      this.animConfetti = anim;
      anim.wrapper.style.display = 'none';
      let currentPoints = 0;
      this.questions.forEach((q) => {
        if (q.type === 1 || q.type === 2) currentPoints += 1;
        if (q.type === 3) currentPoints += 4;
        if (q.type === 4) currentPoints += 2;
      });
      this.possibleMaxScore = currentPoints;
      //bind display of main-cta button with calculated value
    },
    wrapUp() {
      if (this.store.scorePercentage >= 0 && this.store.scorePercentage <= 60) {
        this.finalVerdict = 'a Noob';
        return;
      }
      if (this.store.scorePercentage > 60 && this.store.scorePercentage <= 80) {
        this.finalVerdict = 'a decent Marketer';
        return;
      }
      if (this.store.scorePercentage > 80) {
        this.finalVerdict = 'a Pro Marketer';
      }
    },
    mountQuestion(index: number) {
      if (index >= this.questions.length) {
        this.wrapUp();
      }
      this.store.i = index;
    },
    checkAnswer(e: Event, index: number) {
      const elem = e.currentTarget as HTMLElement;
      const animWrapper = this.animWrapper as HTMLElement;
      const animConfetti = this.animConfetti as AnimationItem;
      const correctIcon = (elem as HTMLElement).querySelector('.is-correct-icon') as HTMLElement;

      if (index === this.questions[this.store.i].correctAnswer) {
        correctIcon.style.display = 'block';
        correctIcon.classList.add('is-correct');
        this.store.scorePercentage = this.store.scorePercentage + (1 / this.possibleMaxScore) * 100;
        animWrapper.style.display = 'block';
        animConfetti.goToAndPlay(0);
      } else {
        elem.classList.add('is-wrong');
        (elem.querySelector('.is-wrong-icon') as HTMLElement).style.display = 'block';
      }

      setTimeout(() => {
        this.mountQuestion(this.store.i + 1);
        //reset all classes
        const allAnswers = document.querySelectorAll('.question-block');
        animWrapper.style.display = 'none';
        allAnswers.forEach((a) => {
          a.classList.remove('is-correct');
          a.classList.remove('is-wrong');
          (a.querySelector('.is-correct-icon') as HTMLElement).style.display = 'none';
          (a.querySelector('.is-wrong-icon') as HTMLElement).style.display = 'none';
        });
      }, 1000);
    },
  };
  createApp(app).mount('#app');
});
