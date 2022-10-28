import type App from 'src/types/app';

import triggerSegmentEvent from '$utils/Segment/triggerSegmentEvent';

function triggerSegmentQuestionEvent(
  index: number, // 0-based
  question: string
) {
  triggerSegmentEvent(`Digital Readiness Assessment Quiz Question ${index + 1} Viewed`, {
    quiz_question: question,
  });
}

export default async function onMountQuestion(app: App, index: number) {
  app.currentQuestionIndex = index;
  if (index === 0) {
    //first question
    app.store.i = index;
    await app.sectionTransitionIn('#quiz-page-question-0', 750);
    await app.setProgressBar();

    triggerSegmentQuestionEvent(index, app.questions[index].question);
  } else if (index + 1 === Math.round(app.totalQuestions / 2) && app.halfwayIsShown === false) {
    await app.sectionTransitionOut(`#quiz-page-last-question`, 750);
    triggerSegmentEvent(`Digital Readiness Assessment Quiz Halfway Section Viewed`, {});
    app.store.showHalfway = true;
    app.store.i = index;
    app.store.progressBarWidth = 0;
    app.store.currentQuestion = `Question ${index + 1} of ${app.totalQuestions}`;
    await app.sectionTransitionIn('#halfway-page', 750);
    await app.setProgressBar();
  }
  if (index >= app.totalQuestions) {
    await app.sectionTransitionOut(`#quiz-page-last-question`, 750);
    app.store.i = index;
    app.showEmailSection = true;
    await app.sectionTransitionIn('#email-page', 750);
    triggerSegmentEvent('Digital Readiness Assessment Quiz Email Page Viewed', {});
    //app.quizFinished();
  } else if (index > 0 && index < app.totalQuestions) {
    //anything but first question
    await app.sectionTransitionOut(`#quiz-page`, 750);

    app.store.i = index;
    triggerSegmentQuestionEvent(index, app.questions[index].question);
    //deselect all answers
    const answers = document.querySelectorAll(
      '.assess-quiz_answers-block'
    ) as NodeListOf<HTMLElement>;
    answers.forEach((answer) => {
      answer.classList.remove('is-selected');
      answer.style.transform = 'translateX(0%)';
    });
    app.store.answerSelected = -1;
    if (index + 1 !== Math.round(app.totalQuestions / 2))
      await app.sectionTransitionIn('#quiz-page', 750);
    await app.setProgressBar();
  }
}
