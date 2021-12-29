export interface ExperienceType {
  title: string;
  startDate: Date;
  endDate: Date;
  firstExplanation: string;
  secondExplanation: string;
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
