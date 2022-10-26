import { createApp } from 'petite-vue';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';

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
      onMounted(this, wf);
      triggerSegmentEvent('Digital Readiness Assessment Quiz Initiated', {});
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
      onSetProgressBar(this);
    },
    mountQuestion(index: number) {
      onMountQuestion(this, index);
      if (index >= 0 && index < this.totalQuestions)
        triggerSegmentEvent(`Digital Readiness Assessment Quiz Question ${index + 1} Viewed`, {
          question: this.questions[index].question,
        });
    },
    closeHalfway() {
      this.showHalfway = false;
      this.halfwayIsShown = true;
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
  } as App;
  createApp(app).mount('#app');
});
