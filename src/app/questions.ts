import Question from 'src/types/question';

const questions: Question[] = [
  {
    type: 1,
    correctAnswer: 1,
    question:
      'Which one of these tools helps you <u>best</u> understand how users engage on your online platforms*?',
    subQuestion: `Being able to understand how users engages with your platform can provide key insights on which page, 
    content or section has the highest user interaction. This helps you with “Conversion Rate Optimisation” and “A/B testing efforts”.
    <br />
    *Online Platforms = Website, App, etc`,
    answers: ['Snowflake', 'Mixpanel', 'Surveymonkey', 'Tableau'],
  },
  {
    type: 1,
    correctAnswer: 2,
    question: `What is a CDP?`,
    subQuestion: `This tool can help you unify your first-party data 
    from multiple sources to help you create targeted personas and personalise marketing campaigns<b> at scale</u>.`,
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
    question: `Which one of these tools could help you drive optimal results from your outbound email campaigns?`,
    subQuestion: `Now we’re going cold and we’re going top funnel. 
    You’re tasked to get new cold leads for your organisation via sending out emails to your target buyers and run ads in certain platform.`,
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
    correctAnswer: 2,
    question: `Which one of these tools will help you gain the most cohort insights on your marketing campaign performance?`,
    subQuestion: `Now you’ll need to put on your Product Marketing hat. <br/>A bit of a clue for you, we’re assessing your understanding of legacy Marketing Analytics vs Product Analytics tools.`,
    answers: ['Google BigQuery', 'Tableau', 'Mixpanel', 'Segment', 'Crazy Egg'],
  },
  {
    type: 1,
    correctAnswer: 1,
    question: `Which of these tool will help you efficiently build and view your Marketing ROAS reports for free?`,
    subQuestion: `<b>Now you’ll need to put on your Analyst hat.</b> You’ve been running some Meta & Google search ads for the company to drive awareness and acquisition to your organisation’s website.`,
    answers: ['Snov.io', 'Looker Studio', 'RedBricks', 'AirDNA', 'DataDog'],
  },
  {
    type: 2,
    correctAnswer: [1, 2, 3],
    question: `Which one of these Frameworks/Funnel are used by modern day Growth teams to scale their organisation?<br/><u>Select all that apply.</u>`,
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

export default questions;
