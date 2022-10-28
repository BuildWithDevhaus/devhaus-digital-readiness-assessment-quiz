import { createApp } from 'petite-vue';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';
import onSectionTransitionIn from '$utils/animations/onSectionTransitionIn';
import onSectionTransitionOut from '$utils/animations/onSectionTransitionOut';

import { initObject, store } from './app/initApp';
import onCheckAnswer from './app/onCheckAnswer';
import onMountQuestion from './app/onMountQuestion';
import onMounted from './app/onMounted';
import onNextQuestion from './app/onNextQuestion';
import onQuizFinished from './app/onQuizFinished';
import onSetProgressBar from './app/onSetProgressBar';
import onShowConfetti from './app/onShowConfetti';
import onSubmit from './app/onSubmit';
import type App from './types/app';

const wf = window.Webflow || [];
let app: App;
wf.push(() => {
  app = {
    store,
    ...initObject,
    async mounted() {
      const lottieDelay = 4900;
      onMounted(this, wf, lottieDelay);
      setTimeout(
        async () => await this.sectionTransitionIn('#first-page', 1000),
        lottieDelay - 100
      );
      triggerSegmentEvent('Digital Readiness Assessment Quiz Start Page Viewed', {});
    },
    async startQuiz() {
      await this.sectionTransitionOut('#first-page', 1000);
      this.showNotes = true;
      triggerSegmentEvent('Digital Readiness Assessment Quiz Scenario Page Viewed', {});
      await this.sectionTransitionIn('#second-page', 800);
    },
    async reallyStartQuiz() {
      await this.sectionTransitionOut('#second-page', 800);
      this.mountQuestion(0);
    },
    async quizFinished() {
      await onQuizFinished(this);
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
      return onSectionTransitionIn(selector, duration);
    },
    sectionTransitionOut(selector: string, duration = 1000) {
      return onSectionTransitionOut(selector, duration);
    },
  } as App;
  createApp(app).mount('#app');
});
