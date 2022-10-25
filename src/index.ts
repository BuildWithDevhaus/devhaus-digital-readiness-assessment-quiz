import { createApp } from 'petite-vue';

import { initObject, store } from './app/initApp';
import onCheckAnswer from './app/onCheckAnswer';
import onMountQuestion from './app/onMountQuestion';
import onMounted from './app/onMounted';
import onSetProgressBar from './app/onSetProgressBar';
import onShowConfetti from './app/onShowConfetti';
import wrapUp from './app/wrapUp';
import type App from './types/app';

const wf = window.Webflow || [];
let app: App;
wf.push(() => {
  app = {
    store,
    ...initObject,
    async mounted() {
      onMounted(app, wf);
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
      onSetProgressBar(app);
    },
    mountQuestion(index: number) {
      onMountQuestion(app, index);
    },
    closeHalfway() {
      this.showHalfway = false;
      this.halfwayIsShown = true;
    },
    showConfetti() {
      onShowConfetti(app);
    },
    checkAnswer(_: Event, index: number) {
      onCheckAnswer(app, index);
    },
  } as App;
  createApp(app).mount('#app');
});
