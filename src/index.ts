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
    quizFinished() {
      this.store.scorePercentage = Math.round(this.store.scorePercentage);
      this.finalVerdict = wrapUp(this.store.scorePercentage);
    },
    async setProgressBar() {
      await onSetProgressBar(this);
    },
    async mountQuestion(index: number) {
      if (index === 0) {
        onMountQuestion(this, index);
        await this.sectionTransitionIn('#quiz-page-question-0', 750);
      } else if (index > 0) {
        await this.sectionTransitionOut(`#quiz-page`, 750);
        onMountQuestion(this, index);
        //deselect all answers
        const answers = document.querySelectorAll(
          '.assess-quiz_answers-block'
        ) as NodeListOf<HTMLElement>;
        answers.forEach((answer) => {
          answer.classList.remove('is-selected');
          answer.style.transform = 'translateX(0%)';
        });
        this.store.answerSelected = -1;
        await this.sectionTransitionIn('#quiz-page', 750);
      }
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
