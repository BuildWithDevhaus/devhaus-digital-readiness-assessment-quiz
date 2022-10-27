import anime from 'animejs';
import { createApp } from 'petite-vue';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';
import waitForElementLoaded from '$utils/waitForElementLoaded';

import { initObject, store } from './app/initApp';
import onCheckAnswer from './app/onCheckAnswer';
import onMountQuestion from './app/onMountQuestion';
import onMounted from './app/onMounted';
import onSetProgressBar from './app/onSetProgressBar';
import onShowConfetti from './app/onShowConfetti';
import onSubmit from './app/onSubmit';
import wrapUp from './app/wrapUp';
import type App from './types/app';

const wf = window.Webflow || [];
let app: App;
wf.push(() => {
  app = {
    store,
    ...initObject,
    async mounted() {
      onMounted(
        this
        // wf
      );
      await this.sectionTransitionIn('#first-page');
      triggerSegmentEvent('Digital Readiness Assessment Quiz Initiated', {});
    },
    async startQuiz() {
      await this.sectionTransitionOut('#first-page');
      this.showNotes = true;
      await this.sectionTransitionIn('#second-page');
    },
    reallyStartQuiz() {
      this.mountQuestion(0);
    },
    quizFinished() {
      this.store.scorePercentage = Math.round(this.store.scorePercentage);
      this.finalVerdict = wrapUp(this.store.scorePercentage);
    },
    async setProgressBar() {
      await onSetProgressBar(this);
    },
    mountQuestion(index: number) {
      onMountQuestion(this, index);
      if (index >= 0 && index < this.totalQuestions)
        triggerSegmentEvent(`Digital Readiness Assessment Quiz Question ${index + 1} Viewed`, {
          question: this.questions[index].question,
        });
    },
    async closeHalfway() {
      this.showHalfway = false;
      this.halfwayIsShown = true;
      await onSetProgressBar(this);
    },
    showConfetti() {
      onShowConfetti(this);
    },
    checkAnswer(_: Event, index: number) {
      onCheckAnswer(this, index);
    },
    async submitEmail(e: Event) {
      await onSubmit(this, e as SubmitEvent);
    },
    async sectionTransitionIn(selector: string) {
      const target = (await waitForElementLoaded(selector)) as HTMLElement;
      console.log(target);
      if (target) {
        target.style.opacity = '0';
        anime({
          targets: target,
          opacity: 1,
          duration: 1000,
          easing: 'easeInOutQuad',
        });
      }
    },
    async sectionTransitionOut(selector: string) {
      const target = (await waitForElementLoaded(selector)) as HTMLElement;
      console.log(target);
      if (target) {
        target.style.opacity = '1';
        anime({
          targets: target,
          opacity: 0,
          duration: 1000,
          easing: 'easeInOutQuad',
        });
      }
    },
  } as App;
  createApp(app).mount('#app');
});
