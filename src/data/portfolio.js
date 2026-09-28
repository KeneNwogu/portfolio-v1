// Central content module (plan §39) — content lives here, presentation in components.
// All copy is restructured from the original portfolio; no fabricated claims (Rule 5).

import streamlitImage from '../assets/streamlit.jpg';
import buyItImage from '../assets/buyitHero.webp';
import twitterImage from '../assets/twitter.jpg';
import natalBondLogo from '../assets/natalbond-logo.webp';
import resume from '../assets/resume.pdf';

export const profile = {
  name: 'Kenechukwu Nwogu',
  shortName: 'Ken',
  moniker: 'kcee',
  role: 'Software Engineer',
  location: 'Lagos, Nigeria',
  email: 'nwogujoseph1111@gmail.com',
  resume,
};

// Featured / "Selected Work" showcases (plan §9).
// `visual` selects the presentation: 'image' | 'terminal' | 'flow'
export const featuredProjects = [
  {
    number: '01',
    title: 'Chowdeck Clone',
    category: 'Full-stack build',
    tagline:
      'A modern food-delivery commerce platform connecting users to restaurants, built end to end.',
    description:
      'Cloned and extended Chowdeck: restaurant browsing, orders and checkout — with Paystack payment integration and real-time order status updates streamed to the client via Server-Sent Events.',
    role: 'Solo developer — frontend, backend, payments and deployment.',
    engineering:
      'Containerized services with Docker, PostgreSQL for order data, SSE for realtime order state, Paystack webhooks for payment reconciliation.',
    technologies: ['Vue.js', '.NET Core', 'PostgreSQL', 'Python', 'Docker', 'Azure'],
    visual: 'terminal',
    links: [{ label: 'View on GitHub', href: 'https://github.com/KeneNwogu/chowdeck' }],
  },
  {
    number: '02',
    title: 'SpeakToDocs',
    category: 'Open-source contribution',
    tagline:
      'Talk to your documents — an interactive platform for asking questions about uploaded files by speech or text.',
    description:
      'Contributed to an open-source project building a RAG-powered Q&A interface over user-uploaded documents, with Azure Speech handling recognition and generation for a hands-free workflow.',
    role: 'Open-source contributor on the speech + retrieval experience.',
    engineering:
      'Retrieval-augmented generation with LangChain, Azure Speech Recognition & Generation, Streamlit UI.',
    technologies: ['Python', 'Streamlit', 'Azure Speech', 'LangChain', 'RAG'],
    image: streamlitImage,
    visual: 'image',
    links: [{ label: 'View project', href: 'https://speak-to-docs.streamlit.app/' }],
  },
  {
    number: '03',
    title: 'ITMO Bot — UNILAG',
    category: 'Contract · AI platform',
    tagline:
      'An AI-driven platform that guides University of Lagos graduates through kicking off the patent filing process.',
    description:
      'Built for the Innovation and Technology Management Office (ITMO) at UNILAG: an interactive chat experience that turns a confusing patent-filing process into a seamless guided flow.',
    role: 'Software engineer (contract) — chat frontend, API and LLM orchestration.',
    engineering:
      'Vue.js client talking to an Express API, with LangChain orchestrating OpenAI models to guide users step by step. Deployed with Docker.',
    technologies: ['Vue.js', 'Express.js', 'LangChain', 'OpenAI', 'Docker'],
    visual: 'flow',
    flowNodes: ['Graduate', 'Vue.js Client', 'Express API', 'LangChain', 'OpenAI'],
    links: [{ label: 'View project', href: 'https://itmobot.unilag.edu.ng/chat' }],
  },
];

// Secondary projects — compact cards (plan §10).
export const moreProjects = [
  {
    number: '04',
    title: 'BuyIt',
    description: 'E-commerce platform for a clothing store with Paystack payment integration.',
    primaryTech: 'Django · Vue.js · MongoDB',
    image: buyItImage,
    href: 'https://buyit-shop.netlify.app/',
  },
  {
    number: '05',
    title: 'NatalBond',
    description:
      'Community platform where 1,000+ women receive healthcare and antenatal advice from qualified medical professionals.',
    primaryTech: 'Nest.js · TypeScript · MongoDB',
    image: natalBondLogo,
    imageIsLogo: true,
    href: 'https://natalbond.com/',
  },
  {
    number: '06',
    title: 'Tweeter!',
    description: 'Social media application inspired by Twitter (now X).',
    primaryTech: 'Flask · Python · MongoDB',
    image: twitterImage,
    href: 'https://tweetercloneapp.netlify.app/',
  },
];

// Capability groups (plan §13–15). Derived strictly from real stack usage below.
export const primaryStack = ['Python', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'];
export const workingWith = [
  'Django',
  'Nest.js',
  'Redis',
  'Docker',
  'Azure',
  'LangChain',
  'Stripe',
];

export const capabilityGroups = [
  {
    label: 'Backend',
    detail: 'APIs · Distributed tasks · Auth · Queues · Realtime (SSE/WebSockets) · Payments',
  },
  {
    label: 'Languages',
    detail: 'Python · TypeScript · JavaScript · C# (.NET Core)',
  },
  {
    label: 'Data',
    detail: 'PostgreSQL · MongoDB · Redis · Pandas · Data modelling & pipelines',
  },
  {
    label: 'Frontend',
    detail: 'Vue.js · Next.js · Streamlit · Responsive, accessible UI',
  },
  {
    label: 'Infrastructure',
    detail: 'Docker · Azure · DigitalOcean · CI/CD · Deployment & monitoring',
  },
  {
    label: 'AI Engineering',
    detail: 'OpenAI · LangChain · RAG pipelines · Speech services',
  },
];

// Experience timeline (plan §16) — existing entries, newest first.
export const experience = [
  {
    period: 'Sept 2025 — Present',
    year: '2025',
    role: 'Backend Engineer (Part-time)',
    company: 'Nigerian Datasets',
    description:
      'Architected the core data model and metadata pipelines for a collaborative platform that helps Nigerian data scientists share, index, and access Nigeria-specific datasets.',
    technologies: ['Django', 'Pandas', 'Python', 'PostgreSQL'],
    website: 'https://nigeriandatasets.com/',
  },
  {
    period: 'Aug 2025 — Dec 2025',
    year: '2025',
    role: 'Backend Engineer (Contract)',
    company: 'Genius By PettySave MFB',
    description:
      'Led the design of an automated background processing system that handled unresolved transaction states, eliminating the majority of customer service escalations related to pending transfers.',
    technologies: ['Nest.js', 'MongoDB', 'Python', 'Redis'],
    website: 'https://customer.geniusforyou.com/',
  },
  {
    period: 'May 2025 — Aug 2025',
    year: '2025',
    role: 'Software Engineer (Contract)',
    company: 'ITMO Unilag',
    description:
      'Developed an interactive AI-driven platform to provide a seamless process for graduates to kick-off the patent filing process at the Innovation and Technology Management Office (ITMO) in the University of Lagos (UNILAG).',
    technologies: ['Vue.js', 'Express.js', 'OpenAI', 'LangChain', 'Docker'],
    website: 'https://itmobot.unilag.edu.ng/chat',
  },
  {
    period: 'Sept 2024 — Aug 2025',
    year: '2024',
    role: 'Development Lead',
    company: 'ECX',
    description:
      "Led the development team for Engineering Career Expo (ECX) to build core infrastructure for ECX's operations, like the batch email service and the ECX Merch website.",
    technologies: ['Next.js', 'Django', 'Express', 'MongoDB', 'PostgreSQL'],
    website: 'https://www.linkedin.com/company/engineering-career-expo/',
  },
  {
    period: 'Jun 2024 — Aug 2024',
    year: '2024',
    role: 'Backend Engineer (Contract)',
    company: 'SeedX',
    description:
      'Implemented core infrastructure for a real-estate firm that offered services like periodic payments for real-estate assets.',
    technologies: ['Express', 'MongoDB'],
    website: 'https://seedx.africa/',
  },
  {
    period: 'Sept 2022 — Present',
    year: '2022',
    role: 'Software Engineer',
    company: 'NatalBond',
    description:
      'Developed an interactive community platform for over 1000 women to receive healthcare and antenatal advice from qualified medical professionals.',
    technologies: ['Nest.js', 'MongoDB', 'TypeScript'],
    website: 'https://natalbond.com/',
  },
  {
    period: 'March 2023 — March 2025',
    year: '2023',
    role: 'Backend Engineer',
    company: 'DietBloom',
    description:
      'Collaborated with the data science team to integrate key features like calorie calculations and auto-generated meal plans to rapidly improve the food culture in Africa.',
    technologies: ['Nest.js', 'MongoDB', 'Python'],
    website: 'https://dietbloom.com/',
  },
  {
    period: 'Nov 2021 — Dec 2023',
    year: '2021',
    role: 'Backend Developer',
    company: 'KofyImages',
    description:
      'Developed admin functionality for inventory and content management for an arts and images e-commerce application. Integrated Stripe for online payments.',
    technologies: ['Django', 'Python', 'Redis', 'DigitalOcean', 'Stripe'],
    website: 'https://kofyimages.com/',
  },
  {
    period: 'Jan 2020 — Jul 2020',
    year: '2020',
    role: 'Full-stack Developer (Contract)',
    company: 'TriviaStation',
    description:
      'Integrated payment services (Flutterwave and Paystack) into an online trivia platform. Developed core in-game features.',
    technologies: ['JQuery', 'Python', 'Flask', 'MongoDB'],
  },
];

export const socialLinks = [
  {
    name: 'X (Twitter)',
    handle: '@lazy_kcee',
    url: 'https://x.com/lazy_kcee',
  },
  {
    name: 'LinkedIn',
    handle: 'Kenechukwu Nwogu',
    url: 'https://linkedin.com/in/kenenwogu',
  },
  {
    name: 'GitHub',
    handle: 'KeneNwogu',
    url: 'https://github.com/KeneNwogu',
  },
  {
    name: 'Email',
    handle: 'nwogujoseph1111@gmail.com',
    url: 'mailto:nwogujoseph1111@gmail.com',
  },
];

export const articles = [
  {
    title: 'Enhance Your Express Applications with Zod Library',
    url: 'https://kcee.hashnode.dev/enhance-your-express-applications-with-zod-library',
    cover:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1729282626855/9350ca84-00c9-4292-a0d4-9b77b485f851.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    excerpt:
      'Express.js is a great framework for building web applications. In this article, we use Zod to enhance the features of a web API built with Express.',
    readTime: 6,
  },
  {
    title: 'Implementing JSON Web Token Authentication with Django-REST Framework',
    url: 'https://kcee.hashnode.dev/implementing-json-web-token-authentication-with-django-rest-framework',
    cover:
      'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/p-l8OjDH9eE/upload/b3c36809af21dea3e89f16d79fd2acf4.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    excerpt:
      'Authentication is the process of identifying users accessing a web service. This article explains how to implement JWT authentication in a Django application.',
    readTime: 9,
  },
  {
    title: 'Passing Data from Child to Parent Components in Vue.js',
    url: 'https://kcee.hashnode.dev/passing-data-from-child-to-parent-components-in-vuejs-a-comprehensive-guide',
    cover:
      'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/d_3EKbSg1tg/upload/685be60f707f15cd6fb4adaa7031d78f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    excerpt:
      'Components are modular UI elements that provide their own data and logic. Vue allows data to be passed from child components to parent components — here is how.',
    readTime: 11,
  },
];

export const navSections = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];
