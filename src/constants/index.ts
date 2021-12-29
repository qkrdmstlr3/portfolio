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
    firstExplanation: '퍼듀대학교에서 두 달간 프로젝트 진행',
    secondExplanation: '드론을 이용해 나무를 촬영/분석해서 GPS위치 렌더링',
  },
];

export const portfolios: PortfolioType[] = [
  {
    title: 'STYLED MAP ADMIN TOOL',
    startDate: new Date('2020-11'),
    endDate: new Date('2020-12'),
    explanation: '지도의 세부사항을 커스텀',
    imgLink: 'styled-map-admin-tool.png',
    logo: '',
  },
  {
    title: 'ARC PIE CHART',
    startDate: new Date('2020-10'),
    endDate: new Date('2021-10'),
    explanation: '다운로드 수 1.4k이상 차트 라이브러리',
    imgLink: 'arc-pie-chart.png',
    logo: '',
  },
  {
    title: 'TechStack Generator',
    startDate: new Date('2021-10'),
    endDate: new Date('2021-12'),
    explanation: '살아움직이는 기술 스택 아이콘 제공',
    imgLink: 'tsg.png',
    logo: '',
  },
];
