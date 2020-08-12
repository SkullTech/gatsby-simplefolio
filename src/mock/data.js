import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sumit Ghosh', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey, I'm",
  name: 'Sumit',
  subtitle: "I'm a fullstack serverless web developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a full-stack web developer, expert in Python and JavaScript. I have more than 4 years of experience developing and maintaining web applications, bringing great value to individuals and small businesses.',
  paragraphTwo:
    'I can help you build your next website from ground-up using the AWS cloud and serverless technologies. Serverless allows you to implement your application at explosion speed, but also supports future scalability. I can also extend or maintain your existing website in any way you want.',
  paragraphThree:
    'My tech stack includes—Python, JavaScript, Flask, Django, FastAPI, HTML5, CSS3, React, AWS, Amplify, Firebase, SQL, NoSQL',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    images: ['shorty-screenshot.png', 'shorty-architecture.png'],
    title: 'Shorty',
    info:
      'Serverless URL shortener written in Python using the serverless framework and deployed on AWS.',
    accomplished: [],
    technologies: ['Serverless', 'AWS Lambda', 'DynamoDB', 'S3', 'Cloudfront'],
    url: 'https://shorty.skghosh.me/',
    repo: 'https://github.com/SkullTech/shorty.sls',
  },
  {
    id: nanoid(),
    images: ['tuskii.png'],
    title: 'Tuskii',
    info: 'Designed the cloud architecture for a vehicle tracking and monitoring service.',
    accomplished: [],
    technologies: [
      'AWS IoT',
      'Kinesis Firehose',
      'AWS Lambda',
      'DynamoDB',
      'S3',
      'Amazon Quicksight',
    ],
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    images: ['evnnt.png'],
    title: 'Evnnt',
    info:
      'Evnnt is an event directory to find events in your area by location, distance, category and more. I was responsible for extending and maintaining the website’s backend.',
    accomplished: [
      'As a system administrator, brought the various services back up and configured them correctly.',
      'Built and extended a robust scrapy pipeline for scraping events from multiple websites.',
      'Created a high-performance web-app utilising Redis to monitor live statistics of the scrapy spiders.',
    ],
    technologies: [
      'Python',
      'Django',
      'Flask',
      'Scrapy',
      'Celery',
      'Redis',
      'Supervisord',
      'Postgresql',
      'Nginx',
      'AWS SES',
    ],
    url: 'https://evnnt.com/',
    repo: '',
  },
  {
    id: nanoid(),
    images: ['inboxignite.png'],
    title: 'Inboxignite',
    info:
      'Inboxignite is a domain reputation management platform for email marketers. I was responsible for building and maintaining most of the backend services.',
    accomplished: [
      'Created a web-app for monitoring DNS records, checking availability of mail servers, and sending emails from those mail servers conveniently.',
      'Created an SMTP smart-host for routing emails.',
      'Created an email queuing system that sped up bulk-email sending rate over 140 times.',
      'Created an email deliverability and folder placement checker.',
      'Created an user authentication system and a dashboard.',
    ],
    technologies: [
      'Python',
      'Flask',
      'Redis',
      'Supervisord',
      'Slimta',
      'SMTP',
      'IMAP',
      'MySQL',
      'DNS',
    ],
    url: 'https://inboxignite.com/',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sumit@sumit-ghosh.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      faClass: 'fab',
      url: 'https://www.twitter.com/SkullTech101',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      faClass: 'fab',
      url: 'https://www.linkedin.com/in/sumit-ghosh101',
    },
    {
      id: nanoid(),
      name: 'github',
      faClass: 'fab',
      url: 'https://github.com/SkullTech',
    },
    {
      id: nanoid(),
      name: 'globe',
      url: 'https://sumit-ghosh.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
