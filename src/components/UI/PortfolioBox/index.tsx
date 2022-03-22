import React from 'react';
import * as Style from './styled';

export interface PortfolioInfoType {
  id: number;
  startDate: Date;
  endDate: Date;
  explanation: string;
}

interface PortfolioBoxProps {
  children: PortfolioInfoType;
}

function PortfolioBox({ children: { startDate, endDate, explanation } }: PortfolioBoxProps) {
  const startDateString = startDate.toISOString().slice(0, 7);
  const endDateString = endDate.toISOString().slice(0, 7);

  return (
    <Style.Container>
      <Style.Date aria-label="date">
        {startDateString} / {endDateString}
      </Style.Date>
      <Style.Explanation>{explanation}</Style.Explanation>
    </Style.Container>
  );
}

export default PortfolioBox;
