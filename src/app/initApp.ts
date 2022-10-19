import type { AnimationItem } from 'lottie-web';
import { reactive } from 'petite-vue';

//contains things to init the petite-vue app
export const store = reactive({
  scorePercentage: 0,
  maxScorePercentage: 100,
  currentQuestion: '',
  progressBarWidth: 0,
  i: 0,
});

const questions = [
  {
    type: 1,
    correctAnswer: 0,
    question:
      'Which type of tools could help you the most by saving you cost and delivering you the most optimal results?',
    answers: ['CDP', 'CRM', 'Product Analytics', 'Marketing Automation'],
  },
  {
    type: 1,
    correctAnswer: 2,
    question: `This tool helps collect and unify 1st party data, it’s called a CDP but <u>what is a CDP?</u>`,
    answers: [
      'Customer Date Platform',
      'Crisis Data Platform',
      'Customer Data Platform',
      'Critical Data Platform',
    ],
  },
  {
    type: 1,
    correctAnswer: 3,
    question: `Which tool could help you drive optimal results with a lean cost?`,
    subQuestion: `Now we’re going cold and we’re going top funnel. 
    You’re tasked to get new <b>cold leads</b> for your organisation via <b>sending out emails</b> 
    to your target buyers and run ads in certain platform.`,
    answers: ['Mailchimp', 'Hubspot Sales Hub', 'Salesforce Sales Cloud', 'Mailshake'],
  },
  {
    type: 1,
    correctAnswer: 0,
    question: `What is the data privacy law that governs Singapore's personal data protection?`,
    answers: ['CAN-SPAM Act', 'PDPA', 'GDPR', `Murphy's Law`],
  },
  {
    type: 1,
    correctAnswer: 1,
    question: `Which one of these tools will help you the most without coding?`,
    subQuestion: `<p>Now you’ll need to put on your Product Marketing hat.</p><br/>
    You need to classify different types of user segments based on your form submission funnels via a user journey funnel data visualisation tool.`,
    answers: ['Metabase', 'Heap', 'Google Analytics 4', 'Tableau', 'Segment'],
  },
  {
    type: 1,
    correctAnswer: 0,
    question: `Which of these tool will help you efficiently view your Marketing Data for free and without hassle on report building?`,
    subQuestion: `<p><b>Now you’ll need to put on your Analyst hat.</b></p><br/>
    You’ve been running some Meta & Google search ads for the company to drive awareness and acquisition to your organisation’s website.`,
    answers: ['Snov.io', 'Google Data Studio', 'Pantone Notebook', 'Figma Jam'],
  },
  {
    type: 1,
    correctAnswer: 3,
    question: `Which one of these Frameworks/Funnel are used by modern day Growth teams to scale their organisation?`,
    answers: ['DCF Framework', 'Pirate Funnel', 'AIDA Funnel', 'RACE Framework'],
  },
  {
    type: 1,
    correctAnswer: 2,
    question: `Which one of these platform is known to be a headless CMS?`,
    subQuestion: `You need to deploy Marketing campaigns with beautiful designs - quickly, at scale and without any code, most marketers usually use a CMS for that.`,
    answers: ['Wordpress', 'Wagtail', 'Webflow', 'Shopcada'],
  },
];

export const initObject = {
  possibleMaxScore: 0,
  questions: questions,
  finalVerdict: 'Digital Starter',
  animWrapper: null as HTMLElement | null,
  animConfetti: null as AnimationItem | null,
  showNotes: false,
  showHalfway: false,
  halfwayIsShown: false,
  currentQuestionIndex: 0,
  totalQuestions: 0,
};
