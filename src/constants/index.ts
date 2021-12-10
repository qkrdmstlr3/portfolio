import { ContactInfo } from '../components/template/ContactPage';
import { PortfolioType } from '../components/template/PortfolioPage';

export const infoList: ContactInfo[] = [
  { title: 'EMAIL', content: 'qkrdmstlr3@naver.com' },
  { title: 'GIT', content: 'https://github.com/qkrdmstlr3' },
  { title: 'BLOG', content: 'https://shellboylog.com' },
];

export const portfolioList: PortfolioType[] = [
  {
    title: 'arc-pie-chart',
    gifLink: '/portfolio/arc-pie-chart.png',
    imageLink: '/portfolio/arc-pie-chart.png',
    githubLink: 'https://github.com/qkrdmstlr3/arc-pie-chart',
    deployLink: 'https://www.npmjs.com/package/arc-pie-chart',
    techs: ['ts', 'svg'],
    explanations: ['svg와 ts를 이용해서 구현한 차트 라이브러리', 'npm에 배포되어 있으며 1.4K 다운로드 기록 중'],
    startDate: new Date('2020-10-18'),
    authors: ['shellboy'],
  },
];
