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
    techs: ['TS', 'SVG'],
    explanations: ['svg와 ts를 이용해서 구현한 차트 라이브러리', 'npm에 배포되어 있으며 1.4K 다운로드 기록 중'],
    startDate: new Date('2020-10-18'),
    authors: ['shellboy'],
  },
  {
    title: 'styled-map-admin-tool',
    gifLink: '/portfolio/styled-map.gif',
    imageLink: '/portfolio/styled-map.png',
    githubLink: 'https://github.com/boostcamp-2020/Project08-A-Styled-Map-Admin-Tool',
    deployLink: 'https://map-styler.vercel.app/',
    musicLink: '/music/test2.mp3',
    techs: ['TS', 'React', 'Redux', 'emotionJS', 'mapbox'],
    explanations: [
      '지도의 세부요소를 바꿀 수 있는 커스텀 지도',
      'LocalStorage를 활용한 Undo/Redo/History 기능',
      'URL/JSON을 이용한 import/export 기능',
      'README에서 기타 기능 및 동작 확인',
    ],
    startDate: new Date('2020-10-18'),
    authors: ['shellboy', 'Eunsol', 'yyjjjj', 'gitgitWi', 'GodDrinkTeJAVA'],
  },
  {
    title: 'techstack-generator',
    gifLink: '/portfolio/techstack.gif',
    imageLink: '/portfolio/techstack.png',
    githubLink: 'https://github.com/qkrdmstlr3/techstack-generator',
    deployLink: 'https://techstack-generator.vercel.app/',
    musicLink: '/music/test3.mp3',
    techs: ['TS', 'React', 'Gatsby', 'emotionJS'],
    explanations: ['동적인 기술 아이콘으로 차별화된 README 꾸미기', '공개된 svg아이콘에 직접 애니메이션 부여'],
    startDate: new Date('2021-10-08'),
    endDate: new Date('2021-12-05'),
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
