import { createApp } from 'petite-vue';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';
import onSectionTransitionIn from '$utils/animations/onSectionTransitionIn';
import onSectionTransitionOut from '$utils/animations/onSectionTransitionOut';

import { initObject, store } from './app/initApp';
import onCheckAnswer from './app/onCheckAnswer';
import onMountQuestion from './app/onMountQuestion';
import onMounted from './app/onMounted';
import onNextQuestion from './app/onNextQuestion';
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
      onMounted(this, wf);
      setTimeout(
        async () => await this.sectionTransitionIn('#first-page', 1000),
        5005.004801146985
      );
      triggerSegmentEvent('Digital Readiness Assessment Quiz Initiated', {});
    },
    async startQuiz() {
      await this.sectionTransitionOut('#first-page', 1000);
      this.showNotes = true;
      await this.sectionTransitionIn('#second-page', 800);
    },
    async reallyStartQuiz() {
      await this.sectionTransitionOut('#second-page', 800);
      this.mountQuestion(0);
    },
    async quizFinished() {
      this.store.scorePercentage = Math.round(this.store.scorePercentage);
      this.finalVerdict = wrapUp(this.store.scorePercentage);
      this.showEmailSection = false;
      await this.sectionTransitionIn('#final-page', 1000);
    },
    setProgressBar() {
      return onSetProgressBar(this, this.store.i);
    },
    async mountQuestion(index: number) {
      return onMountQuestion(this, index);
    },
    async closeHalfway() {
      await this.sectionTransitionOut('#halfway-page', 750);
      this.halfwayIsShown = true;
      this.store.showHalfway = false;
      this.store.progressBarWidth = 0;
      await app.sectionTransitionIn('#quiz-page-question-0', 750);
      await this.setProgressBar();
    },
    showConfetti() {
      onShowConfetti(this);
    },
    checkAnswer(event: MouseEvent, index: number) {
      onCheckAnswer(event, this, index);
    },
    nextQuestion(event: MouseEvent) {
      onNextQuestion(event, this, this.store.answerSelected);
    },
    async submitEmail(e: Event) {
      await onSubmit(this, e as SubmitEvent);
    },
    sectionTransitionIn(selector: string, duration = 1000) {
      console.log('sectionTransitionIn', selector);
      return onSectionTransitionIn(selector, duration);
    },
    sectionTransitionOut(selector: string, duration = 1000) {
      console.log('sectionTransitionOut', selector);
      return onSectionTransitionOut(selector, duration);
    },
  } as App;
  createApp(app).mount('#app');
});
