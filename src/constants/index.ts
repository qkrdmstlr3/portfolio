export interface ExperienceType {
  title: string;
  startDate: Date;
  endDate: Date;
  firstExplanation: string;
  secondExplanation: string;
}

export interface PortfolioType {
  title: string;
  startDate: Date;
  endDate: Date;
  explanation: string;
  imgLink: string;
  logo: string;
  githubLink: string;
  deployLink: string;
}

export const experiences: ExperienceType[] = [
  {
    title: '네이버 부스트캠프 5기',
    startDate: new Date('2020-07'),
    endDate: new Date('2020-12'),
    firstExplanation: '풀스택 과정 수료',
    secondExplanation: '개발자로서의 협업과 성장방법 학습',
  },
  {
    title: 'SIAnalytics 인턴',
    startDate: new Date('2021-07'),
    endDate: new Date('2021-08'),
    firstExplanation: '프론트엔드 개발자로서 임무수행',
    secondExplanation: 'LabelEarth 개발 담당',
  },
  {
    title: 'Purdue Winter Software Program',
    startDate: new Date('2022-01'),
    endDate: new Date('2022-02'),
    firstExplanation: '퍼듀대학교에서 두 달간 프로젝트 수행',
    secondExplanation: '딥러닝을 이용한 쓰러진 나무 탐지 및 시각화',
  },
];

export const portfolios: PortfolioType[] = [
  {
    title: 'STYLED MAP ADMIN TOOL',
    startDate: new Date('2020-11'),
    endDate: new Date('2020-12'),
    explanation: '내 맘대로 커스텀하는 지도 만들기',
    imgLink: 'styled-map-admin-tool.png',
    logo: 'styled-map-admin-tool-logo.png',
    deployLink: 'https://map-styler.vercel.app/map',
    githubLink: 'https://github.com/boostcamp-2020/Project08-A-Styled-Map-Admin-Tool',
  },
  {
    title: 'ARC PIE CHART',
    startDate: new Date('2020-10'),
    endDate: new Date('2021-10'),
    explanation: '다운로드 1.5k이상 차트 라이브러리',
    imgLink: 'arc-pie-chart.png',
    logo: 'arc-pie-chart-logo.png',
    deployLink: 'https://www.npmjs.com/package/arc-pie-chart',
    githubLink: 'https://github.com/qkrdmstlr3/arc-pie-chart',
  },
  {
    title: 'Devlog',
    startDate: new Date('2021-01'),
    endDate: new Date('2021-10'),
    explanation: '개발 블로그',
    imgLink: 'devlog.png',
    logo: 'devlog-logo.png',
    deployLink: 'https://www.shellboylog.com/',
    githubLink: 'https://github.com/qkrdmstlr3/devlog',
  },
  {
    title: 'TechStack Generator',
    startDate: new Date('2021-10'),
    endDate: new Date('2021-12'),
    explanation: '동적 기술 스택 아이콘 제공',
    imgLink: 'tsg.png',
    logo: 'tsg-logo.png',
    deployLink: 'https://techstack-generator.vercel.app/',
    githubLink: 'https://github.com/qkrdmstlr3/techstack-generator',
  },
];
