import { ContactInfo } from '../components/template/ContactPage';
import { PortfolioType } from '../components/template/PortfolioPage';

export const infoList: ContactInfo[] = [
  { title: 'EMAIL', content: 'qkrdmstlr3@naver.com', musicLink: '/music/test.mp3' },
  { title: 'GIT', content: 'https://github.com/qkrdmstlr3', musicLink: '/music/test2.mp3' },
  { title: 'BLOG', content: 'https://shellboylog.com', musicLink: '/music/test3.mp3' },
];

export const portfolioList: PortfolioType[] = [
  {
    title: 'arc-pie-chart',
    gifLink: '/portfolio/arc-pie-chart.png',
    imageLink: '/portfolio/arc-pie-chart.png',
    githubLink: 'https://github.com/qkrdmstlr3/arc-pie-chart',
    deployLink: 'https://www.npmjs.com/package/arc-pie-chart',
    musicLink: '/music/test.mp3',
    techs: ['ts', 'svg'],
    explanations: ['svg와 ts를 이용해서 구현한 차트 라이브러리', 'npm에 배포되어 있으며 1.4K 다운로드 기록 중'],
    startDate: new Date('2020-10-18'),
    authors: ['shellboy'],
  },
  {
    title: 'arc-pie-chart2',
    gifLink: '/portfolio/arc-pie-chart.png',
    imageLink: '/portfolio/arc-pie-chart.png',
    githubLink: 'https://github.com/qkrdmstlr3/arc-pie-chart',
    deployLink: 'https://www.npmjs.com/package/arc-pie-chart',
    musicLink: '/music/test2.mp3',
    techs: ['ts', 'svg'],
    explanations: ['svg와 ts를 이용해서 구현한 차트 라이브러리', 'npm에 배포되어 있으며 1.4K 다운로드 기록 중'],
    startDate: new Date('2020-10-18'),
    authors: ['shellboy'],
  },
  {
    title: 'arc-pie-chart3',
    gifLink: '/portfolio/arc-pie-chart.png',
    imageLink: '/portfolio/arc-pie-chart.png',
    githubLink: 'https://github.com/qkrdmstlr3/arc-pie-chart',
    deployLink: 'https://www.npmjs.com/package/arc-pie-chart',
    musicLink: '/music/test3.mp3',
    techs: ['ts', 'svg'],
    explanations: ['svg와 ts를 이용해서 구현한 차트 라이브러리', 'npm에 배포되어 있으며 1.4K 다운로드 기록 중'],
    startDate: new Date('2020-10-18'),
    authors: ['shellboy'],
  },
];

export const skillList: string[] = [
  'https://techstack-generator.vercel.app/js-icon.svg',
  'https://techstack-generator.vercel.app/ts-icon.svg',
  'https://techstack-generator.vercel.app/react-icon.svg',
  'https://techstack-generator.vercel.app/redux-icon.svg',
  'https://techstack-generator.vercel.app/gatsby-icon.svg',
  'https://techstack-generator.vercel.app/sass-icon.svg',
  'https://techstack-generator.vercel.app/webpack-icon.svg',
  'https://techstack-generator.vercel.app/eslint-icon.svg',
  'https://techstack-generator.vercel.app/prettier-icon.svg',
  'https://techstack-generator.vercel.app/storybook-icon.svg',
  'https://techstack-generator.vercel.app/jest-icon.svg',
  'https://techstack-generator.vercel.app/testinglibrary-icon.svg',
  'https://techstack-generator.vercel.app/restapi-icon.svg',
  'https://techstack-generator.vercel.app/github-icon.svg',
];
