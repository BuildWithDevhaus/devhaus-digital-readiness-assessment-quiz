import type { AnimationItem, LottiePlayer } from 'lottie-web';
import { createApp } from 'petite-vue';

import waitForAnimationsLoaded from '$utils/animations/waitForAnimationsLoaded';

import { initObject, store } from './app/initApp';
import wrapUp from './app/wrapUp';

const wf = window.Webflow ?? [];
wf.push(() => {
  const app = {
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
      let currentPoints = 0;
      this.questions.forEach((q) => {
        if (q.type === 1 || q.type === 2) currentPoints += 1;
        if (q.type === 3) currentPoints += 4;
        if (q.type === 4) currentPoints += 2;
      });
      this.possibleMaxScore = currentPoints;
      this.totalQuestions = this.questions.length;
      this.mountQuestion(-1);
      //on resize window, resize the progress bar
      window.addEventListener('resize', () => {
        this.setProgressBar();
      });
    },
    startQuiz() {
      this.showNotes = true;
    },
    reallyStartQuiz() {
      this.mountQuestion(0);
    },
    quizFinished() {
      this.store.scorePercentage = Math.round(this.store.scorePercentage);
      this.finalVerdict = wrapUp(this.store.scorePercentage);
    },
    setProgressBar() {
      const progressBarBottom = document.querySelector('.progress-bar-bottom');
      //get progress bar width
      const baseProgressBarWidth = progressBarBottom?.clientWidth ?? 0; //100%
      const percentage =
        this.currentQuestionIndex <= 0 ? 0 : this.currentQuestionIndex / this.totalQuestions;
      this.store.progressBarWidth = baseProgressBarWidth * percentage;
    },
    mountQuestion(index: number) {
      this.currentQuestionIndex = index;
      this.setProgressBar();
      this.store.currentQuestion = `Question ${index + 1} of ${this.totalQuestions}`;
      if (index >= this.totalQuestions) {
        this.quizFinished();
      } else if (index + 1 / 2 >= this.totalQuestions / 2 && this.halfwayIsShown === false) {
        this.showHalfway = true;
        this.showConfetti();
      }
      this.store.i = index;
    },
    closeHalfway() {
      this.showHalfway = false;
      this.halfwayIsShown = true;
    },
    showConfetti() {
      const animWrapper = this.animWrapper as HTMLElement;
      const animConfetti = this.animConfetti as AnimationItem;
      animWrapper.style.display = 'block';
      animConfetti.goToAndPlay(0);
      const duration = animConfetti.getDuration();
      setTimeout(() => {
        animWrapper.style.display = 'none';
      }, duration * 1000);
    },
    checkAnswer(_: Event, index: number) {
      if (index === this.questions[this.store.i].correctAnswer) {
        this.store.scorePercentage += (1 / this.possibleMaxScore) * 100;
      }
      setTimeout(() => {
        this.mountQuestion(this.store.i + 1);
      }, 300);
    },
  };
  createApp(app).mount('#app');
});
